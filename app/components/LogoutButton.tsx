import { Button } from "@/ui"
export default function LogoutButton() {
  return (
    <form action='/auth/sign-out' method='post'>
      <Button type='submit'>Logout</Button>
    </form>
  )
}
