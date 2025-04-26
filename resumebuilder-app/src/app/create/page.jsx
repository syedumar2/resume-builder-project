"use client"
import { useEffect, useState } from "react"
import RootLayout from '../components/Layout';
import Education from "../components/form/Education"
import Experience from "../components/form/Experience"
import Personal from "../components/form/Personal"
import Projects from "../components/form/Projects"
import FinalStep from "../components/form/FinalStep"
import Skills from "../components/form/Skills"
import Certification from "../components/form/Certification"
import CareerObjective from "../components/form/CareerObjective";
import { useRouter } from "next/navigation";

const MultiStepForm = () => {
  const router = useRouter();
  const[isLoading,setIsLoading] = useState(false);
  const [submitError,setSubmitError] = useState("")
  const [step, setStep] = useState(1); // Start at step 1
  const [ formData, setFormData ] = useState({    // Store all answers here

    personal:{
      name: "",
      email: "",
      phone : "",
      linkedIn : "",
      location : "",
    },
    education:{
      tenthSchool: "",
      tenthPercentage: "",
      pucSchool: "",
      university: "",
      degree: "",
      cgpa: "",
  },
  experiences: [],  // <-- Add this
  projects: [],
  skills: [],
  certificates: [],
  career_objective : "",


  });

  const nextStep = () => setStep(step+1);
  const prevStep = () => setStep(step-1);

  const onFinalSubmit  = () => {
    console.log("Submitting...");
    console.log("Final form data:", formData);
    
    alert("Form Submitted!! Check console.");
    router.push("/template")
    
  

  
  };


  useEffect(()=>{
    localStorage.setItem('resumeDetails',JSON.stringify(formData))
  },[formData])


  return (
    
    <RootLayout>

      
        <div className="flex justify-center items-center py-10">
          <div className="mx-auto p-6 border-2 border-white rounded-2xl shadow-lg  bg-gray-600 text-white   w-full max-w-3xl">
            <h3 className="mb-2 text-center font-bold">Step {step} of 7</h3>
          {step === 1 && (<Personal formData={formData} setFormData={setFormData} nextStep={nextStep}/>)}
          {step === 2 && (<Education formData={formData} setFormData={setFormData} prevStep={prevStep} nextStep={nextStep}/>)}
          {step === 3 && (<Experience formData={formData} setFormData={setFormData} prevStep={prevStep} nextStep={nextStep}/>)}
          {step === 4 && (<Projects formData={formData} setFormData={setFormData} prevStep={prevStep} nextStep={nextStep}/>)}
          {step === 5 && (<Skills formData={formData}  setFormData={setFormData} prevStep={prevStep} nextStep={nextStep} />)}
          {step === 6 && (<Certification formData={formData}  setFormData={setFormData} prevStep={prevStep} nextStep={nextStep} />)}
          {step === 7 && (<CareerObjective formData={formData}  setFormData={setFormData} prevStep={prevStep} nextStep={nextStep} />)}
          
          {step ===8 && (<FinalStep prevStep={prevStep} onFinalSubmit={onFinalSubmit} formData={formData} isLoading={isLoading} submitError={submitError}/>)}
          </div>
        </div>
      
    </RootLayout>
  );
}

export default MultiStepForm

//create another step for career objective
//another step for selecting template
//make sure to delete localstorage resume details if user clicks create resume button again but be4 that give user a warning
