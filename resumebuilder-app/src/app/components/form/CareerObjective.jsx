import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";

const CareerObjective = ({formData, setFormData, prevStep, nextStep}) => {
    const onSubmit = (data) =>{
        setFormData({...formData,
             career_objective:{...data}
            });
        nextStep();
    };






  return (
    <div className="gap-1.5">
        <h2 className="wizard-title"> Career Objective </h2>
        <form onSubmit={onSubmit}>
<div className="flex flex-col mt-5 gap-3">
    
            <Label className="font-bold" htmlFor="message">What is your Career Objective ?</Label>
            <Textarea />
</div>
<div className="buttons-far mt-4">
  <Button className={"buttons-color"} onClick={prevStep}> Previous </Button>
            <Button className={"buttons-color"} type="submit">Next</Button>
</div>
</form>


        </div>
  )
}

export default CareerObjective