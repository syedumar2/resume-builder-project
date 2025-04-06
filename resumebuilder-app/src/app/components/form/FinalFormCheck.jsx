import { Label } from "@radix-ui/react-label"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'

const FinalFormCheck = ({handleCertificateCount}) => {
  return (
    <div className="flex flex-col items-start">
    <form onSubmit={handleCertificateCount} className="space-y-4 w-full">
        <div className="flex flex-col gap-2.5 w-full">
            <Label className="font-bold" htmlFor="count">How many Certificates do you have?</Label>
            <Input id="count" className={"fancy-input"} name="count" type="number" placeholder="Enter number of Certificates" />
        </div>
        <div className="flex justify-end"><Button className={"buttons-color"} type="submit">Submit</Button></div>
    </form>
</div> 
  )
}

export default FinalFormCheck