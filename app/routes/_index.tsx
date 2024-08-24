import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { Form, useLoaderData } from "@remix-run/react";
import { desc, eq } from "drizzle-orm";
import { getDBClient } from "~/libs/drizzle/client.server";
import { posts } from "~/libs/drizzle/schema";
import { getAuthenticator } from "~/services/auth.server";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix! Using Vite and Cloudflare!",
    },
  ];
};

export const loader = async ({ context, request }: LoaderFunctionArgs) => {
  const authenticator = getAuthenticator(context);
  const user = await authenticator.isAuthenticated(request);
  if (user) {
    const db = getDBClient(context.cloudflare.env.DB);
    const userPosts = await db
      .select()
      .from(posts)
      .where(eq(posts.userId, user.id))
      .orderBy(desc(posts.id));
    return json({ user, posts: userPosts });
  }
  return json({ user });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <div className="mx-auto p-4 sm:p-16">
      <h1 className="text-2xl font-extrabold">Home</h1>
      <div className="mt-4 leading-7">
        <Form action="/auth/google" method="post">
          <button
            type={"submit"}
            className="bg-blue-700 hover:bg-blue-500 text-sm font-semibold text-white rounded-md flex items-center p-2.5"
          >
            Login with Google
          </button>
        </Form>

        {data.user ? (
          <h2>ログインしています</h2>
        ) : (
          <h2>ログインしていません</h2>
        )}
      </div>
    </div>
  );
}
