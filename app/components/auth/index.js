import React from "react"
import { Button } from "@/ui"

function LogoutButton() {
  return (
    <form action='/auth/sign-out' method='post'>
      <Button size='md' type='submit'>
        Log out
      </Button>
    </form>
  )
}

function LoginButton() {
  return (
    <form action='/auth/sign-in' method='post'>
      <Button size='md' type='submit'>
        Log in
      </Button>
    </form>
  )
}

export { LogoutButton, LoginButton }
