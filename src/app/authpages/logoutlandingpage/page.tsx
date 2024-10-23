import logoutImage from '../../../../public/images/logout.png'
import Image from 'next/image'

const LogoutLandingPage = ()=>{
  
  return (
    <div className=" h-96 flex flex-col justify-center items-center">
    <div className=''>
    <p className="my-10"> You have successfully logged out.</p>

    <div className='relative h-32 w-full'>
      <Image src={logoutImage} alt='logout image' fill />
    </div>
    </div>
    </div>
  )
}

export default LogoutLandingPage