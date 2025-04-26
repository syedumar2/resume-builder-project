"use client"
import { useEffect,useState } from 'react'
import { useRouter } from 'next/navigation';

const page = () => {
    //Functions
    const router = useRouter();


    //States
    const [resumeData, setResumeData] = useState("")





    //UseEffect
    useEffect(()=>{
        if(localStorage.getItem("resumeDetails")){
            setResumeData(JSON.parse(localStorage.getItem("resumeDetails")));
        } else {
            router.push("/")

        }
       
    },[localStorage.getItem("resumeDetails")])

  return (
    <div>page</div>
  )
}

export default page