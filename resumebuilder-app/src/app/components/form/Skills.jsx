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

const skillsSchema = z.object({
  name: z.string().min(1, "Skill name is required")
});

const createSkillSchema = (count) => {
  return z.object({
    skills: z.array(skillsSchema).length(count, `Atleast ${count} skills are required`)
  })
};

const Skills = ({ formData, setFormData, prevStep, nextStep }) => {
  const [skillCount, setSkillCount] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const form = useForm({
    resolver: zodResolver(createSkillSchema(skillCount)),
    defaultValues: {
      skills: formData?.skills || [],
    },
  });

  const handleSkillCount = (e) => {
    e.preventDefault();
    const count = parseInt(e.target.count.value);
    if (isNaN(count) || count <= 0) {
      alert("Please enter a valid positive number.");
      return;
    }
    setSkillCount(count);
    setShowForm(true);
    setFormData(
      {
        ...formData,
        skills: Array(count).fill(
          {
            name: "",
          }
        )

      }
    );
  };

  const onSubmit = (data) => {
    setFormData({
      ...formData,
      skills: data.skills
    })

    nextStep();

  };

  return (

    <div className="p-4 space-y-4">
      <h3 className="wizard-title">Skills</h3>

      {!showForm ? (<div className="flex flex-col items-start w-full">
          <form onSubmit={handleSkillCount} className="space-y-4 w-full">
            <div className="flex flex-col gap-2.5">
              <Label className="font-bold" htmlFor="count">How many skills do you have?</Label>
              <Input className={"fancy-input"} id="count" name="count" type="number" placeholder="Enter number of skills" />
            </div>
            <div className="flex items-center justify-end"><Button className={"buttons-color"} type="submit">Submit</Button></div>
          </form>
          {showForm && <h3 className="mt-4 text-md">Count is set at {skillCount}</h3>}
        
      </div>)
        :
        (
          <div className="flex items-start w-full">
            <Form {...form}>
              <form onSubmit = {form.handleSubmit(onSubmit)} className="space-y-4 w-full">
                {Array.from({length : skillCount}).map((_,index)=>
                (
                  <FormField key={index} control = {form.control} name={`skills.${index}.name`} render = {({field}) => (
                    <FormItem>
                      <FormLabel>Skill {index+1}</FormLabel>
                      <FormControl>
                        <Input className={"fancy-input"} placeholder="Enter skill name" {...field}/>

                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )
                }/>
                )
                )}
                <div className="flex justify-end items-center"><Button className="buttons-color" type ="Submit">Submit</Button></div>
              </form>
            </Form>

            {/* By spreading {...form}, you are passing all these properties as props to the Form component. */}




          </div>
        )
      }
      </div>
  )
}
      export default Skills