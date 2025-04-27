"use client";
import { useParams } from "next/navigation";
import templates from "../../template/resumes";
import { useEffect, useState } from "react";


const page = () => {
  const { templateId } = useParams();
  const TemplateComponent = templates[templateId];
  const [resumeData, setResumeData] = useState("");
  useEffect(() => {
      
      setResumeData(JSON.parse(localStorage.getItem("resumeDetails")));
    
  }, []);
  


  if (!TemplateComponent) {
    return <div>Template not found</div>;
  }

  if (!resumeData) {
    return <div>Loading...</div>;
  }

  return (
     <TemplateComponent data={resumeData} />
  )
}

export default page;