import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";

const DoYouHaveAnyCertificates = ({
    setShowCertificateForm,
  isYes,
  setIsYes,
  prevStep,
  nextStep,
  handleFormShown,
  selectedOption,
  setSelectedOption
}) => {

  


  return (
    <form onSubmit={handleFormShown} className="space-y-4 w-full">
      <div className="flex flex-col gap-2.5 w-full">
        <Label className="font-semibold">
          Do you have any certifications that can we can add to your resume ?
        </Label>
        <RadioGroup value = {selectedOption}
                    onValueChange = {setSelectedOption}

        >
          {/* whatever value selected by user is converted to a string
                        then using onValueChange we will compare whether the value is equal to "true", if yes then it will return boolean
                        true and update the isYes usestate to true */}
          <div className="flex items-center space-x-2 ">
            <RadioGroupItem
              className={"hover:bg-blue-500 hover:ring-2  hover:ring-black "}
              value="true"
              id="true"
            />
            <Label htmlFor="yes">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              className={"hover:bg-blue-500 hover:ring-2  hover:ring-black"}
              value="false"
              id="false"
            />
            <Label htmlFor="no">No</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="buttons-far">
        <Button className="buttons-color" onClick={prevStep}>
          {" "}
          Previous Step
        </Button>
        <Button className="buttons-color" type="submit"  disabled={!selectedOption} >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default DoYouHaveAnyCertificates;
