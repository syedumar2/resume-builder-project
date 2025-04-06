
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

const FinalStep = ({ onFinalSubmit, prevStep, formData, isLoading, submitError }) => {
  return (
    <div className="space-y-6">
      <h3 className="wizard-title text-xl font-semibold">Final Preview of Details:</h3>
      <div className="flex flex-col items-start p-6 bg-gray-600 rounded-lg w-full space-y-6">
        <div className="w-full">
          <h2 className="text-lg font-bold mb-3">Personal Info</h2>
          <div className="grid grid-cols-1 gap-2">
            <p><strong>Name:</strong> {formData.personal.name}</p>
            <p><strong>Email:</strong> {formData.personal.email}</p>
            <p><strong>Phone:</strong> {formData.personal.phone}</p>
            <p><strong>LinkedIn:</strong> {formData.personal.linkedIn}</p>
            <p><strong>Location:</strong> {formData.personal.location}</p>
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-lg font-bold mb-3">Education</h2>
          <div className="grid grid-cols-1 gap-2">
            <p><strong>University:</strong> {formData.education.university}</p>
            <p><strong>CGPA:</strong> {formData.education.cgpa}</p>
            <p><strong>Degree:</strong> {formData.education.degree}</p>
            <p><strong>PUC Percentage:</strong> {formData.education.pucPercentage}</p>
            <p><strong>Pre University College:</strong> {formData.education.pucSchool}</p>
            <p><strong>10th Percentage:</strong> {formData.education.tenthPercentage}</p>
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-lg font-bold mb-3">Projects</h2>
          {formData.projects.length === 0 ? (
            <p>No projects added.</p>
          ) : (
            formData.projects.map((project, index) => (
              <div key={index} className="mb-4 border-b border-gray-500 pb-2 last:border-b-0">
                <p><strong>Project {index + 1}</strong></p>
                <p><strong>Title:</strong> {project.projectName}</p>
                <p><strong>Description:</strong> {project.projectDescription}</p>
                <p><strong>Month Completed in:</strong> {project.month}</p>
                <p><strong>Year completed in:</strong> {project.year}</p>
              </div>
            ))
          )}
        </div>

        <div className="w-full">
          <h2 className="text-lg font-bold mb-3">Experience</h2>
          {formData.experiences.length === 0 ? (
            <p>No experience added.</p>
          ) : (
            formData.experiences.map((experience, index) => (
              <div key={index} className="mb-4 border-b border-gray-500 pb-2 last:border-b-0">
                <p><strong>Company {index + 1}</strong></p>
                <p><strong>Company Name:</strong> {experience.company}</p>
                <p><strong>Role:</strong> {experience.role}</p>
                <p><strong>Description:</strong> {experience.description}</p>
              </div>
            ))
          )}
        </div>

        <div className="w-full">
          <h2 className="text-lg font-bold mb-3">Skills</h2>
          {formData.skills.length === 0 ? (
            <p>No skills added.</p>
          ) : (
            formData.skills.map((skill, index) => (
              <div key={index} className="mb-2">
                <p><strong>Skill {index + 1}:</strong> {skill.name}</p>
              </div>
            ))
          )}
        </div>

        <div className="w-full">
          <h2 className="text-lg font-bold mb-3">Certificates</h2>
          {formData.certificates.length === 0 ? (
            <p>No Certificates added.</p>
          ) : (
            formData.certificates.map((certificate, index) => (
              <div key={index} className="mb-2">
                <p><strong>Certificate {index + 1}:</strong> {certificate.name}</p>
              </div>
            ))
          )}
        </div>

        <div className="flex justify-between w-full pt-4">
          <Button className="buttons-color" onClick={prevStep}>
            Prev Step
          </Button>
          <Button className="buttons-color" onClick={onFinalSubmit}>
            {isLoading ? "Sending..." : " Send to Server"}
          </Button>
        </div>
        <div>{submitError &&  <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        {submitError}
      </AlertDescription>
    </Alert>}</div>
      </div>
    </div>

  )
}

export default FinalStep