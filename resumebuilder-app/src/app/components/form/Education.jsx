"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Define validation schema for education
const educationSchema = z.object({
  tenthSchool: z.string().min(1, "School is required"),
  tenthPercentage: z.coerce
    .number()
    .min(0, "Percentage cannot be negative")
    .max(100, "Percentage cannot exceed 100"),
  tenthBoard: z.string().min(3, "Board name is required"),
  tenthPassYear: z.coerce.number().int().min(1900).max(2025),

  pucSchool: z.string().min(1, "School Name is required"),
  pucPercentage: z.coerce
    .number()
    .min(0, "Percentage cannot be negative")
    .max(100, "Percentage cannot exceed 100"),
  pucBoard: z.string().min(3, "Board name is required"),
  pucPassYear: z.coerce.number().int().min(1900).max(2025),

  university: z.string().min(1, "University is required"),
  degree: z.string().min(1, "Degree is required"),
  cgpa: z.coerce
    .number()
    .min(0, "CGPA must be at least 0")
    .max(10, "CGPA cannot be more than 10"),
  degreePassYear: z.coerce.number().int().min(1900).max(2025),
});
const years = Array.from({ length: 201 }, (_, i) => 2000 + i);

const Education = ({ formData, setFormData, prevStep, nextStep }) => {
  // Update form data when user types
  //.......
  const form = useForm({
    resolver: zodResolver(educationSchema),
    defaultValues: formData.education,
  });

  const onSubmit = (data) => {
    setFormData({ ...formData, education: { ...data } });
    nextStep();
  };
  return (
    <div className="gap-1.5">
      <h2 className="wizard-title"> Education </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col gap-3 mt-3">
            <div className="form-rounder">
              <FormField
                control={form.control}
                name="tenthSchool"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>10th School </FormLabel>
                    <FormControl>
                      <Input
                        className="fancy-input"
                        placeholder="e.g.. XYZ School"
                        {...field}
                      ></Input>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tenthPercentage"
                type="number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>10th Percentage</FormLabel>
                    <FormControl>
                      <Input
                        className="fancy-input"
                        placeholder="e.g., 65%"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tenthBoard"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>10th Board </FormLabel>
                    <FormControl>
                      <Input
                        className="fancy-input"
                        placeholder="e.g.. SLC, CBSE, GCSE"
                        {...field}
                      ></Input>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tenthPassYear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Year of Completion </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className={"w-full fancy-input"}>
                          <SelectValue placeholder="Select Year" />
                        </SelectTrigger>
                        <SelectContent>
                          {years.map((year) => (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="form-rounder">
              <FormField
                control={form.control}
                name="pucSchool"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pre University College or School</FormLabel>
                    <FormControl>
                      <Input
                        className="fancy-input"
                        placeholder="e.g., Guru Nanak Public School Bidar"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pucPercentage"
                type="number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Pre University College percentage or 12th Percentage
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="fancy-input"
                        placeholder="e.g., 72%"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pucBoard"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>PUC Board </FormLabel>
                    <FormControl>
                      <Input
                        className="fancy-input"
                        placeholder="e.g.. SLC, CBSE, GCSE"
                        {...field}
                      ></Input>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pucPassYear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Year of Completion </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className={"w-full fancy-input"}>
                          <SelectValue placeholder="Select Year" />
                        </SelectTrigger>
                        <SelectContent>
                          {years.map((year) => (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="form-rounder">
              <FormField
                control={form.control}
                name="university"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>University </FormLabel>
                    <FormControl>
                      <Input
                        className="fancy-input"
                        placeholder="e.g., Guru Nanak Dev Engineering College Bidar"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="degree"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Degree</FormLabel>
                    <FormControl>
                      <Input
                        className="fancy-input"
                        placeholder="e.g., Bachelor of Science"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cgpa"
                type="number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CGPA</FormLabel>
                    <FormControl>
                      <Input
                        className="fancy-input"
                        placeholder="e.g., 7.2 out of 10"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="degreePassYear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Year of Completion </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className={"w-full fancy-input"}>
                          <SelectValue placeholder="Select Year" />
                        </SelectTrigger>
                        <SelectContent>
                          {years.map((year) => (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="buttons-far">
            <Button className={"buttons-color"} onClick={prevStep}>
              {" "}
              Previous{" "}
            </Button>
            <Button className={"buttons-color"} type="submit">
              Next
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Education;
