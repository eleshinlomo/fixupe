'use client'
import { Waitlist } from "../waitlist";
import {useState, useEffect} from 'react'


const Contact = () => {

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('Be one of the first to use this new technology.')
  const [emailSent, setEmailSent] = useState<boolean>(false)

  const handleWaitlist = async  (e: React.FormEvent<HTMLFormElement>)=>{
    const response = await Waitlist(e, name, email)
    setMessage(response.message)
    setEmailSent(true)
  }


  
  return (
    <section id="contact" className="text-center overflow-hidden">
      <div className="">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 ">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Join the Waitlist
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                {message}
              </p>
              {emailSent ? null :
              <form className="flex flex-col justify-center items-center" onSubmit={handleWaitlist}>
                <div className="">
                  <div className="w-full px-4 ">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        name={name}
                        onChange={(e)=>setName(e.target.value)}
                        placeholder="Enter your name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 ">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        onChange={(e)=>setEmail(e.target.value)}
                        value={email}
                        name={email}
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                 
                  <div className="w-full px-4">
                    <button type='submit'
                    className="rounded-sm bg-green-600 px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      Send message
                    </button>
                  </div>
                </div>
              </form>
                 }
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Contact;
