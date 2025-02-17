import Link from "next/link";
import { Button } from "./ui/button";
import { FaCode, FaCloud, FaDatabase, FaBrain, FaTools } from "react-icons/fa"; // Icons for each category

export const Skillsets = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center grid md:grid-cols-5 gap-6">
          {/* Col One - Languages */}
          <div className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-700">
            <div className="flex justify-center">
              <FaCode className="text-4xl text-blue-400 mb-4" />
            </div>
            <p className="text-2xl font-extrabold text-blue-400 mb-4">Languages</p>
            <p className="text-gray-300">Javascript, Python, Typescript, HTML, CSS</p>
          </div>

          {/* Col Two - Frameworks */}
          <div className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-700">
            <div className="flex justify-center">
              <FaTools className="text-4xl text-purple-400 mb-4" />
            </div>
            <p className="text-2xl font-extrabold text-purple-400 mb-4">Frameworks</p>
            <p className="text-gray-300">Django, React, FastAPI, Next JS, Node JS, Shadcn, MUI, Tailwind</p>
          </div>

          {/* Col Three - GenAI */}
          <div className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-700">
            <div className="flex justify-center">
              <FaBrain className="text-4xl text-green-400 mb-4" />
            </div>
            <p className="text-2xl font-extrabold text-green-400 mb-4">GenAI</p>
            <p className="text-gray-300">PyTorch, TensorFlow, Keras, Langchain, Numpy, Pandas, OpenAI, Mlops</p>
          </div>

          {/* Col Four - Cloud */}
          <div className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-700">
            <div className="flex justify-center">
              <FaCloud className="text-4xl text-orange-400 mb-4" />
            </div>
            <p className="text-2xl font-extrabold text-orange-400 mb-4">Cloud</p>
            <p className="text-gray-300">Git, Gitlab, AWS, GCP, Vercel</p>
          </div>

          {/* Col Five - Database */}
          <div className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-700">
            <div className="flex justify-center">
              <FaDatabase className="text-4xl text-pink-400 mb-4" />
            </div>
            <p className="text-2xl font-extrabold text-pink-400 mb-4">Database</p>
            <p className="text-gray-300">Redis, PostgreSQL, SQL, MongoDB/ATLAS, Pinecone, Chroma</p>
          </div>
        </div>
      </div>
    </div>
  );
};