import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/cloudflare';
import { json } from '@remix-run/cloudflare';
import { Form, useLoaderData, useNavigation } from '@remix-run/react';
import { desc, eq } from 'drizzle-orm';
import { useEffect, useRef } from 'react';
import { getDBClient } from '~/libs/drizzle/client.server';
import { posts } from '~/libs/drizzle/schema';
import { getAuthenticator } from '~/services/auth.server';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    {
      name: 'description',
      content: 'Welcome to Remix! Using Vite and Cloudflare!',
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

  const navigation = useNavigation();
  const isAdding = navigation.state === 'submitting';
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isAdding) {
      formRef.current?.reset();
      inputRef.current?.focus();
    }
  }, [isAdding]);

  if (data.user) {
    return (
      <div className='mx-auto p-4 sm:p-16'>
        <div className='flex flex-col gap-4'>
          <pre className='font-extrabold text-2xl'>Hi, {data.user.name}</pre>
          <Form action={'/logout'} method={'POST'}>
            <button
              type={'submit'}
              className='flex items-center rounded-md bg-red-700 p-2.5 font-semibold text-sm text-white hover:bg-red-500'
            >
              Logout
            </button>
          </Form>
          <hr className='border-2 border-slate-900' />
          <Form
            ref={formRef}
            action={'/posts/create'}
            method={'POST'}
            className='flex items-end gap-2'
          >
            <div className='flex flex-col gap-1'>
              <input
                ref={inputRef}
                type='text'
                name='post-body'
                id='post-body'
                placeholder='post something'
                required
                minLength={1}
                maxLength={100}
                className='block w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset'
              />
            </div>
            <button
              type={'submit'}
              className='flex items-center rounded-md bg-slate-900 p-2.5 font-semibold text-sm text-white hover:bg-slate-700'
            >
              Create Post
            </button>
          </Form>
          <hr className='border-2 bg-slate-900' />
          <table className='border-collapse border border-slate-400'>
            <thead>
              <tr>
                <th className='w-1/6 border border-slate-300 p-4 text-left font-semibold'>
                  ID
                </th>
                <th className='w-3/6 border border-slate-300 p-4 text-left font-semibold'>
                  Body
                </th>
                <th className='w-1/6 border border-slate-300 p-4 text-left font-semibold'>
                  Created At
                </th>
                <th className='w-1/6 border border-slate-300 p-4 text-left font-semibold'>
                  Edit
                </th>
              </tr>
            </thead>
            <tbody>
              {data.posts.map(post => (
                <tr key={post.id}>
                  <td className='border border-slate-300 p-4 text-left'>
                    {post.id}
                  </td>
                  <td className='border border-slate-300 p-4 text-left'>
                    {post.body}
                  </td>
                  <td className='border border-slate-300 p-4 text-left'>
                    {post.createdAt}
                  </td>
                  <td className='border border-slate-300 p-4 text-left'>
                    <Form action='/posts/delete' method={'POST'}>
                      <input type='hidden' name='post-id' value={post.id} />
                      <button
                        type={'submit'}
                        className='flex items-center rounded-md bg-red-700 p-2.5 font-semibold text-sm text-white hover:bg-red-500'
                      >
                        delete
                      </button>
                    </Form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  return (
    <div className='mx-auto p-4 sm:p-16'>
      <h1 className='font-extrabold text-2xl'>Home</h1>
      <div className='mt-4 leading-7'>
        <Form action='/auth/google' method='post'>
          <button
            type={'submit'}
            className='flex items-center rounded-md bg-blue-700 p-2.5 font-semibold text-sm text-white hover:bg-blue-500'
          >
            Login with Google
          </button>
        </Form>
      </div>
    </div>
  );
}
