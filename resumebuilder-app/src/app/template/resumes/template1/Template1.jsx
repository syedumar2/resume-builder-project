"use client";
import "./Template1.css";

const Template1 = ({ data }) => {
  if (!data) return null;
  const [f_name, l_name] = data.personal.name.split(" ");
  const projects = data.projects;
  const skills = data.skills;
  const experience = data.experiences;
  const certificates = data.certificates;
  function formatDescriptionWithBulletPoints(text) {
    const parts = text.split(".").filter(Boolean);
    return `<ul>${parts
      .map((sentence) => `<li>${sentence.trim() + "."}</li>`)
      .join("")}</ul>`;
  }

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Lato:400,300,700"
        rel="stylesheet"
        type="text/css"
      />

      <div className="container">
        <div className="header">
          <div className="full-name">
            <span className="first-name">{f_name}</span>
            <span className="last-name">{l_name}</span>
          </div>
          <div className="contact-info !mt-3">
            <span className="email">Email: </span>
            <span className="email-val">{data.personal.email}</span>
            <span className="separator"></span>
            <span className="phone">Phone: </span>
            <span className="phone-val">{data.personal.phone}</span>
            <span className="separator"></span>
           
            <span className="phone-val"><a href={data.personal.linkedIn} target="_blank" rel="noopener noreferrer">
  LinkedIn
</a></span>
            <span className="separator"></span>
            <span className="phone">Location:  </span>
            <span className="phone-val">{data.personal.location}</span>
          </div>

          <div className="about">
            <span className="career-objective">Career Objective:</span>
            <span className="desc">{data.career_objective.data}</span>
          </div>
        </div>
        <div className="details">
          {data.experiences.length !== 0 ? (
            <div className="section">
              <div className="section__title">Experience</div>
              <div className="section__list">
                {experience.map((ele, index) => {
                  return (
                    <div key={index} className="section__list-item">
                      <div  className="left">
                        <div className="name">{ele.company}</div>
                        <div className="addr">Location not added yet</div>
                        <div className="duration">Duration not added yet</div>
                      </div>
                      <div className="right">
                        <div className="name">{ele.role}</div>
                        <div className="desc">{ele.description}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="section">
            <div className="section__title">Education</div>
            <div className="section__list">
              <div className="section__list-item">
                <div className="left">
                  <div className="name">{data.education.degree}</div>
                  <div className="addr">{data.education.university}</div>
                  <div className="duration">CGPA: {data.education.cgpa}</div>
                </div>
                <div className="right">
                  <div className="name">
                    Anticipated Completion in {data.education.degreePassYear}
                  </div>
                  <div className="desc">
                    Bidar, Karnataka **need to insert in form**
                  </div>
                </div>
              </div>
              <div className="section__list-item">
                <div className="left">
                  <div className="name">Pre University College</div>
                  <div className="addr">{data.education.pucSchool}</div>
                  <div className="duration">
                  Board: {data.education.pucBoard} <br/>
                    Score: {data.education.pucPercentage} %
                  </div>
                </div>
                <div className="right">
                  <div className="name">Completed in {data.education.pucPassYear}</div>
                  <div className="desc">Location, somewhere</div>
                </div>
              </div>
              <div className="section__list-item">
                <div className="left">
                  <div className="name">10th Class</div>
                  <div className="addr">{data.education.tenthSchool}</div>
                  <div className="duration">
                    Board: {data.education.tenthBoard} <br/>
                    CGPA: {data.education.tenthPercentage}
                  </div>
                </div>
                <div className="right">
                  <div className="name">
                    Completed in: {data.education.tenthPassYear}
                  </div>
                  <div className="desc">
                    Bidar, Karnataka **need to insert in form**
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section__title">Projects</div>
            <div className="section__list">
              {projects.map((ele, index) => {
                return (  
                  <div key={index} className="section__list-item">
                    <div className="name flex justify-between items-center">{ele.projectName}<p > {ele.month} {ele.year} </p></div> 
                    <div
                      className="text"
                      dangerouslySetInnerHTML={{
                        __html: formatDescriptionWithBulletPoints(
                          ele.projectDescription
                        ),
                      }}
                    ></div>
                    
                  </div>
                );
              })}
            </div>
          </div>
          <div className="section">
            <div className="section__title">Skills</div>
            <div className="skills">
              <div className="skills__item">
                <div>
                  <div className="name">
                    {skills.map((ele, index) => {
                      return (
                        <span key={index}>
                          {ele.name}
                          {index < skills.length - 1 ? ", " : ""}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section__title">Certifications</div>
            <div className="section__list">
            {certificates.map((ele, index) => {
                return (  
                  <div key={index} className="mb-1">
                    <div className="name flex justify-between items-center">{ele.name}</div> 
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;
//need to add board, place and date of completion in education form
