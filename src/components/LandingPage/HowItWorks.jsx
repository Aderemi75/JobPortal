import {steps} from "../data";



export default function HowItWorks() {
   
  
    return (
      <div className="py-16 px-6 bg-gray-100 w-full  text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">How We Do?</h2>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-600 text-white text-3xl rounded-full shadow-lg">
                {step.icon}
              </div>
              <h3 className="mt-4 font-semibold text-gray-800">{step.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  