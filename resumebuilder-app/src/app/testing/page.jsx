"use client"
import { useState } from "react"


import Certification from "../components/form/Certification"
import FinalStep from "../components/form/FinalStep";
import Projects from "../components/form/Projects";
import RootLayout from "../components/Layout"
import CareerObjective from "../components/form/CareerObjective";
import Education from "../components/form/Education";
import Experience from "../components/form/Experience";




const page = () => {
  const [step, setStep] = useState(1); // Start at step 1
  const [ formData, setFormData ] = useState({})

  const onFinalSubmit  = () => {
    console.log("Submitting...");
    console.log("Final form data:", formData);
    alert("Form Submitted!! Check console.");
  
  }
  


  const nextStep = () => setStep(step+1);
  const prevStep = () => setStep(step-1);
  
  return (
    <RootLayout>
    <div>
      <div className="max-w-lg mx-auto p-6 border rounded-lg shadow-lg bg-white">
        <p className="mb-4 text-center">Step {step} of 3</p>
      {step === 1 && (<Experience formData={formData} setFormData={setFormData} nextStep={nextStep}/>)}
      {step ===2 && (<FinalStep prevStep={prevStep} onFinalSubmit={onFinalSubmit}/>)}
      </div>   
    </div>
    </RootLayout>
  )
}

export default page