import React from 'react';
import RootLayout from './components/Layout';
import { Button } from "@/components/ui/button";
import { Share } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Handshake } from 'lucide-react';

const Home = () => {
  return (
    <RootLayout className="flex flex-col min-h-screen">
      <section id="home" className=" flex flex-col md:flex-row items-center justify-between min-h-screen p-4 bg-blue-900">
        {/* Left Section */}
        <div className='mx-6 flex justify-between items-center px-8'>
          <div className="flex flex-col mt-24 text-white md:w-1/2">
            <h1 className="font-semibold text-6xl leading-normal tracking-wide">
              Welcome to <br />
              <span>My Resume Builder</span>
            </h1>
            <p className="text-justify mt-4">
              Are you applying for placements, jobs, or freelancing?
              <br />
              Use this free tool to create an attractive and AI-friendly resume.
            </p>
            <div className="flex justify-between items-center gap-2 mt-6">
              <p>
                Already created a Resume? Download{' '}
                <a href="/download" className="hover:underline">
                  here
                </a>
              </p>
              <Button className={"bg-gray-500 border-1 font-bold hover:bg-white hover:text-black"}>Get Started</Button>
            </div>
          </div>
          {/* Right Image Section (Carousel) */}
          <div className="md:w-1/2 flex justify-end items-center px-6">
            <div className="w-3/4">
              <Carousel>
                <CarouselContent>
                  <CarouselItem>
                    <img
                      src="https://d.novoresume.com/images/doc/skill-based-resume-template.png"
                      alt="Resume template 1"
                      className="w-full h-full object-contain"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src="https://d.novoresume.com/images/doc/general-resume-template.png"
                      alt="Resume template 2"
                      className="w-full h-full object-contain"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src="https://marketplace.canva.com/EAFzSzKZZsg/2/0/1131w/canva-modern-minimalist-cv-resume-I8ItJo4ECp0.jpg"
                      alt="Resume template 3"
                      className="w-full h-full object-contain"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="bg-gray-600 text-white hover:bg-white" />
                <CarouselNext className="bg-gray-600 text-white hover:bg-white" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>


      <section id="otherpoints" className='bg-gray-600' >
        <div className='container flex items-center max-w-full mx-auto px-12 py-20 text-white h-full'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-20 items-center py-2'>
            <div className='flex flex-col items-center gap-3'>
            <div className='rounded-full bg-blue-800 p-4'>
              <Share  className="w-10 h-10" />
            </div><h3 className='text-2xl font-bold'>Easy Edits</h3>
            <div><p className='text-center'>No need to struggle with MS Word 2009 anymore <br/>
            Simply enter your details and instantly generate a downloadable PDF resume for free</p></div>
            </div>
            <div className='flex flex-col items-center gap-3'>
            <div className='rounded-full bg-blue-800 p-4'>
              <Handshake  className="w-10 h-10" />
            </div><h3 className='text-2xl font-bold'>Get Hired</h3>
            <div><p className='text-center'>You never get a second chance to make a first impression
            <br/>
            Increase your chances of getting shortlisted with this quick, free, and elegant tool</p></div>
            </div>
          
            <div className='flex flex-col items-center gap-3'>
            <div className='rounded-full bg-blue-800 p-4'>
              <Share  className="w-10 h-10" />
            </div><h3 className='text-2xl font-bold'>Fully Customizeable</h3>
            <div><p className='text-center'>Use any format from our small Library of templates<br/>
            Resume formats available for all applying individuals including freshers, experienced professionals and more.</p></div>
            </div>
          
          
          </div>
        </div>
      </section>

    </RootLayout>
  );
};

export default Home;