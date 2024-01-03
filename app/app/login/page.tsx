import Link from "next/link"
import Messages from "./messages"
import { Button } from "@/ui"

export default function Login() {
  return (
    <div className='flex w-full px-8 justify-center gap-2'>
      {/* <Link
        href='/'
        className='absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1'
        >
          <polyline points='15 18 9 12 15 6' />
        </svg>{" "}
        Back
      </Link> */}

      <form
        className='flex flex-col justify-center gap-2 text-foreground w-full max-w-md'
        method='post'
      >
        <div className='flex flex-col justify-center gap-2'>
          <label className='text-md' htmlFor='email'>
            Email
          </label>
          <input
            className='rounded-md px-4 py-2 bg-inherit border mb-6'
            name='email'
            placeholder='you@example.com'
            required
          />
          <label className='text-md' htmlFor='password'>
            Password
          </label>
          <input
            className='rounded-md px-4 py-2 bg-inherit border mb-6'
            type='password'
            name='password'
            placeholder='••••••••'
            required
          />
        </div>

        <div className='w-3/4 mx-auto flex flex-col gap-2 justify-center'>
          <Button formAction='/auth/sign-in' type='submit'>
            Sign In
          </Button>
          <Button color='green' formAction='/auth/sign-up' type='submit'>
            Sign Up
          </Button>
        </div>
        <Messages />
      </form>
    </div>
  )
}
