import { UserButton } from "@clerk/nextjs"

const page = () => {
  return (
    <main>dashboard (protect)
        <div>
        <UserButton afterSignOutUrl='/' />
      </div>
    </main>
  )
}

export default page