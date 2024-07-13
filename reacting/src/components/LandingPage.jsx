import React from 'react';
import Carousel from './Carousel';
import VerticalScrollingLinks from './VerticalScrollingLinks';
import { Cards } from './Card';
import contents from './Content';
import StudentCarousel from './StudentCarousel';
import ResearchCard from './ResearchCard';
import VerticalScroller from './VerticalScroller';
import TestimonialCarousel from './TestimonialCarousel';
import NewsCarousel from './NewsCarousel';
import Slider from './LogoSlider';

const links = Array.from({ length: 13 }, (_, i) => ({ id: i + 1, name: <ResearchCard /> }));

function LandingPage() {
  const slides = [
    "https://nitjsr.ac.in/backend/uploads/banner/add/676e345a-c030-464f-aac9-59077b6445ca-placement%20(1).jpg",
    "https://nitjsr.ac.in/backend/uploads/banner/add/0fb4786f-215e-4071-bd8f-5fc554d59ac8-IMG-20240622-WA0004.jpg",
    "https://nitjsr.ac.in/backend/uploads/banner/add/b7314301-6613-4089-b099-f8b7eedd9a18-WhatsApp%20Image%202024-05-09%20at%2017.01.04.jpeg",
    "https://nitjsr.ac.in/backend/uploads/banner/add/fcd1010c-a490-4c9a-840b-ad8de6608ec7-1696333434394-min.jpg",
    "https://nitjsr.ac.in/backend/uploads/banner/add/5276f1d7-95d6-4782-81fa-b25ba86bd912-July%2015th%202023.jpeg",
    "https://nitjsr.ac.in/backend/uploads/banner/add/ecb12f68-a5cb-4cec-aa33-c0ac7d622791-1.jpg"
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center bg-zinc-900">
        <div className="w-full lg:w-1/2 p-6 lg:pl-20 pt-40 max-w-3xl">
          <Carousel autoSlide={true} autoSlideInterval={6000}>
            {slides.map((s, index) => (
              <img key={index} src={s} alt={`slide-${index}`} />
            ))}
          </Carousel>
        </div>
        <div className="w-full lg:w-1/2 pt-10 lg:pt-40 mt-2">
          <div className="bg-zinc-900 text-center lg:text-left">
            <h1 className="font-black text-xl lg:text-3xl text-amber-600">Notices and Announcements</h1>
          </div>
          <VerticalScrollingLinks />
          <button className="btn glass bg-orange-800 mt-2 ml-5">Show More</button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-around items-center bg-zinc-900 max-w-full">
        <div className="m-5 lg:m-10">
          <img src='https://www.nitjsr.ac.in/static/media/LOGO_IAC.a1efbd8d.png' alt='logo1' className="max-w-full" />
        </div>
        <div className="m-5 lg:m-10">
          <img src='https://www.nitjsr.ac.in/static/media/nirf2023_banner.2acae972.jpg' alt='logo2' className="max-w-full" />
        </div>
        <div className="m-5 lg:m-10">
          <img src='https://www.nitjsr.ac.in/static/media/img3.526381f0.jpeg' alt='logo3' className="max-w-full" />
        </div>
      </div>

      <div className="bg-zinc-900 p-4 lg:pl-60 text-amber-600">
        <div className="flex flex-col lg:flex-row items-center lg:ml-20">
          <h1>Rolling Advertisement for Recruitment of Assistant Professor Post : </h1>
          <a className="link link-accent ml-2" href='https://online.nitjsr.ac.in/faculty2024'>Link</a>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:ml-40 mt-2">
          <h1>PhD admissions for the Academic Year 2024-25 : </h1>
          <a className="link link-success ml-2" href='http://202.168.87.80/backend/uploads/recents/INFORMATION%20BROCHURE%20FOR%20PhD%20ADMISSIONS%20IN%20NIT%20JAMSHEDPUR%20FOR%20THE%20AUTUMN%20SEMESTER%20OF%20AY%202024-2025.pdf'>Link</a>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:ml-40 mt-2">
          <h1>NIRF submitted data : </h1>
          <a className="link link-warning ml-2" href='https://www.nitjsr.ac.in/Institute/Ranking_and_Recognition'>Link</a>
          <h1 className='ml-10'>List of events 2024: </h1>
          <a className="link link-info ml-2" href='https://www.nitjsr.ac.in/events'>Link</a>
        </div>
      </div>

      <div className='App grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-full'>
        {contents.map(content => (
          <Cards 
            key={content.id}
            image={content.image}
            name={content.name}
            productType={content.productType}
            Link={content.Link}
          />
        ))}
      </div>

      <div className='flex flex-col lg:flex-row bg-base-100 p-4'>
        <div className='lg:w-1/2 p-4'>
          <h1 className='font-black font-serif text-xl lg:text-3xl text-black bg-amber-300 p-2 lg:ml-20'>Director's Corner</h1>
          <div className='flex bg-white p-4'>
            <div>
              <img src='https://www.nitjsr.ac.in/static/media/director.5dd2bd73.jpg' alt='Director' />
            </div>
            <div className='ml-4'>
              <p className='text-amber-700'>
                It is a privilege and honour for me to have led the NIT Jamshedpur as a Director of the Institution. 
                NIT Jamshedpur has a rich legacy of more than sixty dedicated years of service to the nation and its pride of Jharkhand. 
              </p>
            </div>
          </div>
          <div className='bg-white text-amber-700 p-4'>
            <p>
              NIT Jamshedpur takes extreme pride in the fact that it has been occupying a unique position in imparting technological education to Indian youth. 
              Since its inception, the institute has had a vision to provide quality technical education and to facilitate scientific and technological 
              research, coupled with a mission to develop human potential to its zenith with excellence in teaching and high quality research.
            </p>
          </div>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-5 bg-indigo-800 ml-4">Read More</button>
        </div>
        <div className='lg:w-1/2 p-4'>
          <h1 className='font-black font-serif text-xl lg:text-3xl text-black bg-blue-800 p-2 lg:ml-20'>Our Vision</h1>
          <div className='bg-white p-4'>
            <p className='text-yellow-600'>
              To be one of the premier technical institutions for its academic excellence and innovative research 
              to meet the future needs of the society. 
            </p>
          </div>
          <h1 className='font-black font-serif text-xl lg:text-3xl text-black bg-green-900 p-2 lg:ml-20 mt-10'>Our Mission</h1>
          <div className='bg-white p-4'>
            <p className='text-red-800'>
              1. To build conducive environment for learning and creativity.<br />
              2. To train students to become technically competent professionals and socially responsible citizens.<br />
              3. To develop innovative products and technologies for the betterment of the society.
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row justify-around mt-5 p-4'>
        <div className='w-full lg:w-1/2 bg-yellow-50 h-96 p-4'>
          <h1 className='font-serif text-xl lg:text-3xl font-black text-yellow-800 bg-slate-900 p-2'>Research and Publications </h1>
          <VerticalScroller links={links} speed={200} className='mt-4' />
        </div>
        <div className='w-full lg:w-1/2 bg-white h-auto p-4 mt-4 lg:mt-0'>
          <h1 className='font-serif text-xl lg:text-3xl font-black text-red-700 bg-black p-2'>Our Achievers (Batch 2019-23)</h1>
          <StudentCarousel />
          <button className="btn glass bg-red-600 text-black mt-5 w-full">Show More</button>
        </div>
      </div> 

      <div className='bg-white w-full max-h-screen mx-auto mt-5 rounded-md p-4'>
        <h1 className='font-serif text-xl lg:text-3xl font-black mx-auto text-center bg-black text-amber-700 p-2'>Testimonial</h1>
        <TestimonialCarousel className="mx-auto mt-4" />
      </div> 

      <div className='m-auto mt-5 bg-slate-950 p-4'>
        <h1 className='text-center text-green-500 font-extrabold text-xl lg:text-2xl'>Latest News and Events</h1>
        <NewsCarousel />
      </div>

      <div className='flex justify-around items-center mt-5 p-4'>
        <button className="btn btn-outline btn-info w-1/2 lg:w-auto">Archive events</button>
        <button className="btn btn-outline btn-success w-1/2 lg:w-auto">Events</button>
      </div>

      <div className='bg-slate-200 p-4'>
        <Slider />
      </div>
    </>
  );
}

export default LandingPage;
