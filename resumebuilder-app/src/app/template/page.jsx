"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import RootLayout from "../components/Layout";
import "./template.css";
import { Button } from "@/components/ui/button";
import Router from "next/navigation";

const page = () => {
  //Functions
  const router = useRouter();

 

  //States
  const [resumeData, setResumeData] = useState("");
  


  //UseEffect
  useEffect(() => {
   
    if (localStorage.getItem("resumeDetails")) {
      setResumeData(JSON.parse(localStorage.getItem("resumeDetails")));
    } else {
      router.push("/");
    }
  }, []);

  const handleSelectedTemplate = (templateId) => {
    router.push(`/preview/${templateId}`);
  }

  return (
    <RootLayout>
      <div className="flex justify-center flex-col items-center py-10 gap-3">
        <h1 className="font-semibold text-5xl leading-normal tracking-wide text-white">
          Choose a Template to build your Resume
        </h1>
        <p className="text-white text-center leading-normal tracking-wide font-semibold ">Your Resume Data has been saved successfully <br/>Choose a template to build your Resume</p>
      </div>

      <section id="templates" className="bg-gray-600 min-h-screen">
        <div className="container flex items-center max-w-full mx-auto px-12 py-20 text-white h-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 items-center py-2">
            <div className="template-display ">
              <div className="p-4">
                <img src="https://devsnap.nyc3.digitaloceanspaces.com/devsnap.me/manual/sample-resume.png" className="imageHeight" width={500} ></img>

              </div>
              <h3 className="text-2xl font-bold text-center">Sample Resume Idea </h3>
              <div>
                <p className="text-center">
                Author: naman kalkhuria (knaman2609) <br />
                Created on: October 9, 2015 <br/>
                Made with: HTML, SCSS
                </p>
              </div>
              <div className="items-center justify-end"><Button onClick={()=>handleSelectedTemplate("template1")} className=" buttons-color" >Apply </Button></div>
            </div>
            <div className=" template-display">
              <div className="p-4">
                <img src="https://devsnap.nyc3.digitaloceanspaces.com/devsnap.me/codepen-PzGvdJ.png" className="imageHeight" width={500} ></img>
              </div>
              <h3 className="text-2xl font-bold ">Minimal CSS Resume</h3>
              <div>
                <p className="text-center">
                Author: Kyle Shanks (mavrK) <br />
                Created on:  June 20, 2016 <br/>
                Made with: HTML, Stylus, JS
                </p>
              </div>
              <div className="items-center justify-end"><Button className=" buttons-color" >Apply </Button></div>
            </div>
            <div className="template-display">
              <div className="p-4">
                <img src="https://devsnap.nyc3.digitaloceanspaces.com/devsnap.me/sam/responsive-resume-template.gif" className="imageHeight" width={500} ></img>
              </div>
              <h3 className="text-2xl font-bold">Responsive Resume Template </h3>
              <div>
                <p className="text-center">
                Author: mario s maselli (mariosmaselli) <br />
                Created on:  July 18, 2014 <br/>
                Made with: HTML, SCSS, JS
                </p>
              </div>
              <div className="items-center justify-end"><Button className=" buttons-color" >Apply </Button></div>
            </div>
            <div className="template-display">
              <div className="p-4">
                <img src="https://devsnap.nyc3.digitaloceanspaces.com/devsnap.me/codepen-bVZRRv.png" className="imageHeight" width={500} ></img>
              </div>
              <h3 className="text-2xl font-bold">Dark Theme HTML Resume</h3>
              <div>
                <p className="text-center">
                Author:  Vishnu Padmanabhan (neoelemento) <br />
                Created on: November 18, 2015<br/>
                Made with: HTML, SCSS
                </p>
              </div>
              <div className="items-center justify-end"><Button className=" buttons-color" >Apply </Button></div>
            </div>
            <div className="template-display">
              <div className="p-4">
                <img src="https://devsnap.nyc3.digitaloceanspaces.com/devsnap.me/sam/responsive-resume.gif" className="imageHeight" width={500} ></img>
              </div>
              <h3 className="text-2xl font-bold">Responsive CSS Resume</h3>
              <div>
                <p className="text-center">
                Author: Jeremy Hawes (jhawes)<br />
                Created on: November 1, 2014 <br/>
                Made with: Pug, Sass, JS
                </p>
              </div>
              <div className="items-center justify-end"><Button className=" buttons-color" >Apply </Button></div>
            </div>
            <div className="template-display">
              <div className="p-4">
                <img src="https://devsnap.nyc3.digitaloceanspaces.com/devsnap.me/codepen-NPeBqZ.png" className="imageHeight" width={500} ></img>
              </div>
              <h3 className="text-2xl font-bold">Dark HTML Resume</h3>
              <div>
                <p className="text-center">
                Author: Javier Latorre López-Villalta (jlalovi) <br />
                Created on: March 21, 2015 <br/>
                Made with:  HTML, CSS, JS
                </p>
              </div>
              <div className="items-center justify-end"><Button className=" buttons-color" >Apply </Button></div>
            </div>
            <div className="template-display">
              <div className="p-4">
                <img src="https://devsnap.nyc3.digitaloceanspaces.com/devsnap.me/codepen-KKpXLqR.png" className="imageHeight" width={500} ></img>
              </div>
              <h3 className="text-2xl font-bold">RWD Resume</h3>
              <div>
                <p className="text-center">
                Author: chih-hsi-chen (chih-hsi-chen) <br />
                Created on:  March 5, 2020 <br/>
                Made with: HTML, CSS, JS
                </p>
              </div>
              <div className="items-center justify-end"><Button className=" buttons-color" >Apply </Button></div>
            </div>
            <div className="template-display">
              <div className="p-4">
                <img src="https://devsnap.nyc3.digitaloceanspaces.com/devsnap.me/codepen-areqqr.png" className="imageHeight" width={500} ></img>
              </div>
              <h3 className="text-2xl font-bold">Thiago Braga | English Resume</h3>
              <div>
                <p className="text-center">
                Author: Thiago (thiagobraga) <br />
                Created on: June 8, 2019
                <br/>
                Made with:  Pug, Stylus, Babel
                </p>
              </div>
              <div className="items-center justify-end"><Button className=" buttons-color" >Apply </Button></div>
            </div>
            <div className="template-display">
              <div className="p-4">
                <img src="https://devsnap.nyc3.digitaloceanspaces.com/devsnap.me/codepen-PgydGj.png" className="imageHeight" width={500} ></img>
              </div>
              <h3 className="text-2xl font-bold">Profile Template</h3>
              <div>
                <p className="text-center">
                Author:  Jyotirmoy Barman (jewel998) <br />
                Created on:  April 24, 2019 <br/>
                Made with: HTML, CSS
                </p>
              </div>
              <div className="items-center justify-end"><Button className=" buttons-color" >Apply </Button></div>
            </div>
      
          </div>
        </div>
      </section>
    </RootLayout>
  );
};

export default page;
