import Link from "next/link"
import { Button } from "./ui/button"

export const Skillsets = ()=>{
    return (
        <div>
            <div className="text-center grid md:grid-cols-5
            grid-flow-row  mx-5 mt-4
            shadow-2xl  font-bold rounded-2xl 
             gap-2
             py-4 px-6 text-sm">
               
               {/* Col One */}
                <div>
                <p className="text-2xl font-extrabold py-4 text-muted-foreground "> 
                Languages
                </p>
                <p className=" py-4 px-4">Javascript, Python, Typescript,
                 HTML, CSS!</p>
                
                </div>

                 {/* Col Two */}
                <div>
                <p className="text-2xl font-extrabold py-4 text-muted-foreground "> 
                Frameworks
                </p>
                <p className=" py-4 px-4">Django, React, FastAPI, Next JS, Node JS, Shadcn, MUI, Tailwind!</p>
                
                </div>

                 {/* Col Three */}
                 <div>
                <p className="text-2xl font-extrabold py-4 text-muted-foreground "> 
                GenAI
                </p>
                <p className=" py-4 px-4">PyTorch, TensorFlow, Keras,Langchain,
                 Numpy, Pandas, OpenAI, Mlops</p>
                
                </div>

                 {/* Col Four */}
                <div>
                <p className="text-2xl font-extrabold py-4 text-muted-foreground "> 
                Cloud
                </p>
                <p className=" py-4 px-4">
                Git, Gitlab, AWS, GCP, Vercel.</p>
                
                </div>

                {/* Col4 */}
                <div>
                <p className="text-2xl font-extrabold py-4 text-muted-foreground"> 
                Database
                </p>
                <p className=" py-4 px-6 flex flex-col md:flex lg-flex">
                Redis, postGreSQL, SQL, 
                MongoDB/ATLAS, Pinecone, Chroma.</p>
                
                </div>

            </div>
        </div>
    )
}