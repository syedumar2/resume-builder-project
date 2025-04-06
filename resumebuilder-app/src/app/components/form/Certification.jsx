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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import DoYouHaveAnyCertificates from "./DoYouHaveAnyCertificates";
import FinalFormCheck from "./FinalFormCheck";
import AllCertificatesForm from "./AllCertificatesForm";



const certificationSchema = z.object({
    name: z.string().min(1, "Skill name is required")
});
const createCertificationSchema = (count) => {
    return z.object(
        {
            certificates: z.array(certificationSchema).length(count, `Atleast ${count} skills are required`)
        }
    )
};



const Certification = ({ formData, setFormData, prevStep, nextStep }) => {

    const [certificateCount, setCertificateCount] = useState(0)
    const [showCertificateForm, setShowCertificateForm] = useState(false);
    const [isYes, setIsYes] = useState(null);
    const [showFinalForm, setShowFinalForm] = useState(false);
    const form = useForm({
        resolver: zodResolver(createCertificationSchema(certificateCount)),
        defaultValues:{ 
            certificates: formData.certificates || [],},
    });
    
    
    // Add State to Track the Choice:
    // Use React’s useState to keep track of whether they picked "Yes" or "No"

    const handleFormShown = (e) => {
        e.preventDefault();
        setShowCertificateForm(isYes);

    };

    const handleCertificateCount = (e) => {
        e.preventDefault();
        const count = parseInt(e.target.count.value);
        if (isNaN(count) || count <= 0) {
            alert("Please enter a valid positive number.");
            return;
        }
        setCertificateCount(count);
        console.log(certificateCount);
        setShowFinalForm(true);
        setFormData(
            {
                ...formData,
                certificates: Array(count).fill({
                    name: "",
                })
            }
        );
    };

    const onSubmit = (data) => {
        setFormData({
            ...formData,
            certificates: data.certificates,
        })
        nextStep();
    };


    return (
        <div className="p-4 space-y-4">
            <h3 className="wizard-title">Certificates</h3>
            {!showCertificateForm ? (<DoYouHaveAnyCertificates handleFormShown={handleFormShown} setIsYes={setIsYes}/>
            ) : (
                !showFinalForm ? (<FinalFormCheck handleCertificateCount={handleCertificateCount}  />) : (<AllCertificatesForm form={form} onSubmit={onSubmit} certificateCount={certificateCount} /> ))
    }
                        
                    

        </div>
    )
}


export default Certification