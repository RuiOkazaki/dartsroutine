import { Authenticator } from "remix-auth";
import type { AppLoadContext } from "@remix-run/cloudflare";

import { GoogleStrategy } from "remix-auth-google";
import { eq } from "drizzle-orm";
import { users } from "~/libs/drizzle/schema";
import { getDBClient } from "~/libs/drizzle/client.server";

export type User = {
  name: string;
  id: number;
};

let createCookieSessionStorage: typeof import("@remix-run/cloudflare").createCookieSessionStorage;

if (import.meta.env.DEV) {
  import("@remix-run/node").then((module) => {
    createCookieSessionStorage = module.createCookieSessionStorage;
  });
} else {
  import("@remix-run/cloudflare").then((module) => {
    createCookieSessionStorage = module.createCookieSessionStorage;
  });
}

let _authenticatedUser: Authenticator<User> | null = null;

export function getAuthenticator(context: AppLoadContext) {
  if (_authenticatedUser === null) {
    if (!createCookieSessionStorage) {
      throw new Error("createCookieSessionStorage is not initialized");
    }
    const sessionStorage = createCookieSessionStorage({
      cookie: {
        name: "_session",
        sameSite: "lax",
        path: "/",
        httpOnly: true,
        secrets: [context.cloudflare.env.AUTH_SECRET],
        secure: import.meta.env.PROD,
      },
    });
    _authenticatedUser = new Authenticator<User>(sessionStorage);
    const googleStrategy = new GoogleStrategy(
      {
        clientID: context.cloudflare.env.GOOGLE_CLIENT_ID,
        clientSecret: context.cloudflare.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `${context.cloudflare.env.GOOGLE_CALLBACK_BASE_URL}/auth/google/callback`,
      },
      async ({ profile }) => {
        const db = getDBClient(context.cloudflare.env.DB);
        const exitsUser = await db
          .select()
          .from(users)
          .where(eq(users.providerId, profile.id))
          .limit(1);
        if (exitsUser.length === 0) {
          const createUser = await db
            .insert(users)
            .values({
              provider: profile.provider,
              providerId: profile.id,
              name: profile.displayName,
              icon: profile.photos[0].value,
            })
            .returning()
            .get();
          return { id: createUser.id, name: createUser.name };
        }
        return { id: exitsUser[0].id, name: exitsUser[0].name };
      }
    );
    _authenticatedUser.use(googleStrategy);
  }
  return _authenticatedUser;
}
