
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
const DoYouHaveAnyExp = ({handleCountSubmit,prevStep}) => {
  return (
    <div className="flex flex-col items-start py-2">
      <form onSubmit={handleCountSubmit} className="space-y-4 w-full">
                      <Label className={"font-bold"}>How many companies have you worked or interned for ?</Label>
                      <Input type="number" className="fancy-input" name="count" placeholder="Enter 0 if you're a fresher" required/>
                      
                      <div className="buttons-far">
                      <Button className={"buttons-color"} onClick={prevStep}>Previous Step</Button>
                        <Button className={"buttons-color"} type="submit">Submit</Button>
                    
                      </div>
      
                  </form>
    </div>
  )
}

export default DoYouHaveAnyExp