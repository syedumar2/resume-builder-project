"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import ExperienceForm from "./ExperienceForm";
import DoYouHaveAnyExp from "./DoYouHaveAnyExp";

// Define validation schema for a single experience entry
const singleExperienceSchema = z
  .object({
    company: z.string().min(1, "Company is required"),
    role: z.string().min(1, "Role is required"),
    description: z.string().min(1, "Description is required"),
    from: z.coerce.date({ required_error: "'From' date is required" }),
    to: z.coerce.date({ required_error: "'To' date is required" }),
  })
  .refine((data) => data.to >= data.from, {
    message: "'To' date must be after or equal to 'From' date",
    path: ["to"],
  });

// Define dynamic schema based on number of experiences
const createExperienceSchema = (count) => {
  return z.object({
    experiences: z
      .array(singleExperienceSchema)
      .length(count, `Exactly ${count} experiences required`),
  });
};
const Experience = ({ formData, setFormData, prevStep, nextStep }) => {
  const [expCount, setExpCount] = useState(0);
  const [showForm, setShowForm] = useState(false);
  // register	Registers form inputs so they can be validated & managed.
  // handleSubmit	Wraps your onSubmit function to ensure validation runs before submission.
  // formState	Provides real-time form state (e.g., errors, isSubmitting).
  // control	Used when working with controlled components (e.g., Controller from RHF).
  const form = useForm({
    resolver: zodResolver(createExperienceSchema(expCount)),
    defaultValues: {
      experiences: formData.experiences || [],
    },
  });

  const handleCountSubmit = (e) => {
    e.preventDefault();
    const count = parseInt(e.target.count.value); //get input value
    if (count === 0) {
      return nextStep();
    }
    setExpCount(count);
    setShowForm(true);
    setFormData({
      ...formData, //will create an empty area of count
      experiences: Array(count).fill({
        company: "",
        role: "",
        description: "",
      }),
    });
  };
  const onSubmit = (data) => {
    setFormData((formData) => ({ ...formData, experiences: data.experiences }));
    nextStep();
  };

  return (
    <div className="flex flex-col gap-2">
      <h3 className="wizard-title"> Experience</h3>
      {!showForm ? (
        <DoYouHaveAnyExp
          handleCountSubmit={handleCountSubmit}
          prevStep={prevStep}
        />
      ) : (
        <ExperienceForm form={form} onSubmit={onSubmit} expCount={expCount} />
      )}
    </div>
  );
};
export default Experience;
