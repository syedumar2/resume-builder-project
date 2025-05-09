import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Define months and years
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const years = Array.from({ length: 201 }, (_, i) => 2000 + i);
const ProjectsForm = ({ onSubmit, form, projectCount, prevStep }) => {
  return (
    <div className="flex flex-col items-start gap-2 p-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col w-full gap-2 space-y-2"
        >
          {Array.from({ length: projectCount }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 w-full border border-gray-200  backdrop-blur-sm p-4 rounded-md"
            >
              <FormField
                control={form.control}
                name={`projects.${index}.projectName`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project {index + 1}</FormLabel>
                    <FormControl>
                      <Input
                        className="fancy-input"
                        placeholder="Enter title of your Project "
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`projects.${index}.projectDescription`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Description </FormLabel>
                    <FormControl>
                      <Textarea
                        className="fancy-input resize-none"
                        placeholder="Describe what you accomplished in the Project"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Month Dropdown */}

              <div className="flex flex-col gap-4 w-full">
                <FormField
                  control={form.control}
                  name={`projects.${index}.month`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Month of Completion {index + 1}</FormLabel>
                      <FormControl>
                        <Select
                          className="w-full"
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className={"w-full fancy-input"}>
                            <SelectValue placeholder="Select Month" />
                          </SelectTrigger>
                          <SelectContent>
                            {months.map((month) => (
                              <SelectItem
                                className={"w-full"}
                                key={month}
                                value={month}
                              >
                                {month}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`projects.${index}.year`}
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
          ))}
          <div className="buttons-far">
            <Button className={"buttons-color"} onClick={prevStep}>
              Previous Step
            </Button>
            <Button className={"buttons-color"} type="Submit">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProjectsForm;
