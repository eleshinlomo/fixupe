import Link from "next/link"

export default function TopProjects() {

  const projectname = 'camsecure'

  const Projects = [
    {
      title: 'Camsecure',
      description: 'Detect human and any object',
      href: `/${projectname}`
    },
    {
      title: 'Camsecure',
      description: 'Detect human and any object',
      href: `/${projectname}`
    },
    {
      title: 'Camsecure',
      description: 'Detect human and any object',
      href: `/${projectname}`
    },
    {
      title: 'Camsecure',
      description: 'Detect human and any object',
      href: `/${projectname}`
    },
  ]
    return (
      <section className="relative ">
  
        {/* Section background (needs .relative class on parent and next sibling elements) */}
        {/* <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0  pointer-events-none" aria-hidden="true"></div> */}
        
  
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12">
  
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-4 md:pb-4">
              <h2 className="text-2xl mb-4  font-extrabold text-shadow-2xl">VC CORNER</h2>
              <p className="text-xl ">Top projects with most sign ups.</p>
            </div>
  
            {/* Items */}
            <div className="max-w-sm mx-auto text-white grid gap-6 md:grid-cols-2 lg:grid-cols-3 
            items-start md:max-w-2xl lg:max-w-none">
  
            
              {Projects.slice(0, 3).map((project, index) =>

                <div className="relative flex flex-col items-center p-6 bg-green-700  rounded-2xl shadow-xl" key={index}>
                <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <rect className="fill-current text-green-600" width="64" height="64" rx="32" />
                    <g strokeWidth="2">
                      <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                      <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                      <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                      <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />  
                    </g>
                  </g>
                </svg>
                
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                  {project.title}</h4>
                <p className=" text-center">
                  {project.description}</p>
                  <Link href={project.href} target='_blank'><button className='rounded-2xl bg-white text-black px-4'>Visit Landing Page</button></Link>
            
              </div>
              )}
  
             
  
  
            </div>
  
          </div>
        </div>
      </section>
    )
  }