
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button'


const AllCertificatesForm = ({form,onSubmit,certificateCount}) => {
  return (
           <div className="flex flex-col items-start w-full">
                            <Form {...form}>
                                          <form onSubmit = {form.handleSubmit(onSubmit)} className="space-y-4 w-full">
                                            {Array.from({length : certificateCount}).map((_,index)=>
                                            (
                                              <FormField key={index} control = {form.control} name={`certificates.${index}.name`} render = {({field}) => (
                                                <FormItem>
                                                  <FormLabel>Certificate {index+1}</FormLabel>
                                                  <FormControl>
                                                    <Input className={"fancy-input"} placeholder="Enter Certificate name" {...field}/>
                            
                                                  </FormControl>
                                                  <FormMessage/>
                                                </FormItem>
                                              )
                                            }/>
                                            )
                                            )}
                                            <div className="flex justify-end"><Button className={"buttons-color"} type ="submit">Submit</Button></div>
                                          </form>
                                        </Form>
                            </div>
  )
}

export default AllCertificatesForm