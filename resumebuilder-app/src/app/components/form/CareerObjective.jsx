import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import { useState } from "react";

const CareerObjective = ({formData, setFormData, prevStep, nextStep}) => {
  const [career_obj, setCareer_obj] = useState("")
    


const handleChange = (data) =>{
  setCareer_obj({data})
 
}
const handleSubmit = (e) => {
  e.preventDefault();
  setFormData((formData) => ({...formData,career_objective: {...career_obj}}));
  nextStep();
}


  return (
    <div className="gap-1.5">
        <h2 className="wizard-title"> Career Objective </h2>
       
<div className="flex flex-col mt-5 gap-3">
    
            <Label className="font-bold" htmlFor="message">What is your Career Objective ?</Label>
            <Textarea id="careerObjective"
            onChange = {(e)=> handleChange(e.target.value)}
            />
</div>
<div className="buttons-far mt-4">
  <Button className={"buttons-color"} onClick={prevStep}> Previous </Button>
            <Button className={"buttons-color"} onClick={handleSubmit}>Next</Button>
</div>



        </div>
  )
}

export default CareerObjective