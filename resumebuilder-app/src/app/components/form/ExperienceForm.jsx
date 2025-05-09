import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
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
import { Button } from "@/components/ui/button";

const ExperienceForm = ({ form, onSubmit, expCount }) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full"
        >
          {Array.from({ length: expCount }).map((_, index) => (
            <div key={index} className="space-y-4 w-full bg-gray-300 p-3 py-4 rounded-2xl ">
              <FormField
                control={form.control}
                name={`experiences.${index}.company`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name {index + 1}</FormLabel>
                    <FormControl>
                      <Input
                        className="fancy-input"
                        placeholder="Enter Company worked in"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`experiences.${index}.role`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role {index + 1}</FormLabel>
                    <FormControl>
                      <Input
                        className="fancy-input"
                        placeholder="Enter Role name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`experiences.${index}.description`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description {index + 1}</FormLabel>
                    <FormControl>
                      <Input
                        className="fancy-input"
                        placeholder="Description of your work "
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`experiences.${index}.from`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>From Date {index + 1}</FormLabel>
                    <FormControl>
                      <DatePicker
                        selected={field.value}
                        onChange={field.onChange}
                        className="fancy-input p-1 rounded"
                        dateFormat="yyyy-MM-dd"
                        placeholderText=" Select start date"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`experiences.${index}.to`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>To Date {index + 1}</FormLabel>
                    <FormControl>
                      <DatePicker
                        selected={field.value}
                        onChange={field.onChange}
                        className="fancy-input p-1 rounded "
                        dateFormat="yyyy-MM-dd"
                        placeholderText=" Select end date"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ))}
          <div className="flex items-center justify-end">
            <Button className={"buttons-color"} type="Submit">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ExperienceForm;
