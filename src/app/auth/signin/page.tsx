import Signinform from "@/app/components/Signinform"


type Props = {}

const Signin = (props: Props) => {
  return (
    <div className='flex flex-col bg-zinc-600 h-screen'>
    <h1>Sign in</h1>
    <Signinform />
    </div>
  )
}

export default Signin