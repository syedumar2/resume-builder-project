"use client"
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import ProjectsForm from "./ProjectsForm";


//STEP 1 DEFINE YOUR SCHEMA 
//1 singleschema and the other a createSchema function that takes value of count and returns an array of 1st schema also create use state
//to store setCount of schemas/arrays you need to setup

const singleProjectSchema = z.object({
    projectName :z.string().min(1, "Project Name is required"),
    projectDescription : z.string().min(1, "Description is required (preferably in points"),
    month: z.enum([
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ]),
    year: z.coerce.number().int().min(1900).max(2100)
});


const createProjectSchema = (count) => {
    return z.object({
        projects: z.array(singleProjectSchema).length(count,`Exactly ${count} projects required`)
    });
};


const Projects = ({formData, setFormData,prevStep,nextStep}) => {
    const[projectCount, setProjectCount] = useState(0);
    const [showForm, setShowForm] = useState(false);

//STEP 2 also create a showForm use state to show form once count has been inputted

//STEP 5 Create a useForm which will consist of functions register and handleSUbmit
//useform initializes form with resolver and default values
//register is used to register input fields so react hook can track their values
//handleSubmit is a wrapper for onSubmit which applies validation be4 submission
    const form = useForm(
        {
            resolver: zodResolver(createProjectSchema(projectCount)), 
//Converts the Zod schema into a validation function that React Hook Form can use.
//createProjectSchema(projectCount) generates a Zod validation schema requiring projectCount number of projects.
//Ensures that form data follows the validation rules defined in createProjectSchema(projectCount).
            defaultValues: {
                projects: formData.projects || [],
            }
        },
    );
//STEP 4 DEFINE THE HANDLECOUNT submit, it will take event as input, store count, setCount, setSHowFOrm and setTempFORM data that we will 
//populate later. for now populate it with empty fields. this function will create an array of count
    const handleCountSubmit = (e) => {
        e.preventDefault();
        const count = parseInt(e.target.count.value);
        setProjectCount(count);
        setShowForm(true);
        setFormData({
            ...formData,
            projects: Array(count).fill(
                {
                    projectName : "" ,
                    projectDescription : "" ,
                    month : "" ,
                    year  : "" ,
                }
            )
        });
    };
//STEP 3 Create the form element that takes input of count
//when submitted handle its submission using a function called handleCOuntSubmit


//STEP 6 CREATE AN ONSUBMIT FUNCTION that will know what to do with input data
const onSubmit = (data) => {
   

    const updatedFormData = {
        ...formData,
        projects: data.projects
    };
    setFormData(updatedFormData); // Update state for future renders
    nextStep(); // Pass the updated data directly
};
//STEP 7 CREATE THE FINAL FORM DIV THAT WILL CONDITIONALLY RENDER BASED ON COUNT
  return (
    <div className="flex flex-col gap-4 w-full max-w-4xl my-auto">
        <h3 className="wizard-title">Projects</h3>
       {!showForm ? ( <form className="flex flex-col gap-3" onSubmit={handleCountSubmit}>
       
             <Label className="font-bold">How many projects have you worked on?</Label>
             <Input type="number" name="count"  placeholder="Enter the number of projects" required/>
             <div className="buttons-far">
             <Button className={"buttons-color"} onClick={prevStep}>Previous Step</Button>
                 <Button className={"buttons-color"} type="submit">Submit</Button>
               
             </div>
        </form>)
        :
        (
            <ProjectsForm form={form} onSubmit={onSubmit} projectCount={projectCount} prevStep={prevStep}/>
        )
        }
    </div>
  )
}

export default Projects