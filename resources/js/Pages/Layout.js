import { usePage } from '@inertiajs/inertia-react'

export default function Layout({ children }) {
  const { auth } = usePage().props

  return (
    <main>
      <header>
        You are logged in as: {auth.user.name}
      </header>
      <content>
        {children}
      </content>
    </main>
  )
}