/* eslint-disable react/no-unescaped-entities */
import Carousel from './Carousel'
import VerticalScrollingLinks from './VerticalScrollingLinks'
import { Cards } from './Card'
import contents from './Content'
import StudentCarousel from './StudentCarousel'
import ResearchCard from './ResearchCard';
import VerticalScroller from './VerticalScroller'
import TestimonialCarousel from './TestimonialCarousel'
import NewsCarousel from './NewsCarousel'
import Slider from './LogoSlider'
const links = Array.from({ length: 13 }, (_, i) => ({ id: i + 1, name: <ResearchCard /> }));
function LandingPage() {
  const slides=[
    "https://nitjsr.ac.in/backend/uploads/banner/add/676e345a-c030-464f-aac9-59077b6445ca-placement%20(1).jpg",
    "https://nitjsr.ac.in/backend/uploads/banner/add/0fb4786f-215e-4071-bd8f-5fc554d59ac8-IMG-20240622-WA0004.jpg",
    "https://nitjsr.ac.in/backend/uploads/banner/add/b7314301-6613-4089-b099-f8b7eedd9a18-WhatsApp%20Image%202024-05-09%20at%2017.01.04.jpeg",
    "https://nitjsr.ac.in/backend/uploads/banner/add/fcd1010c-a490-4c9a-840b-ad8de6608ec7-1696333434394-min.jpg",
    "https://nitjsr.ac.in/backend/uploads/banner/add/5276f1d7-95d6-4782-81fa-b25ba86bd912-July%2015th%202023.jpeg",
    "https://nitjsr.ac.in/backend/uploads/banner/add/ecb12f68-a5cb-4cec-aa33-c0ac7d622791-1.jpg"
  ]
  return (
    <>
    <div className='flex justify-between items-center bg-zinc-900'>
    <div className='pl-20 pt-40 max-w-3xl'>
        <Carousel autoSlide={true} autoSlideInterval={6000}>
        {
          slides.map((s)=>(
            <img src={s}/>
          ))
        }
        </Carousel>
    </div>
    <div className='pt-40 mt-2'>
    <div className='bg-zinc-900'>
    <div className='pl-40 font-black text-3xl text-amber-600'><h1>Notices and Announcements</h1></div>
    </div>
    <VerticalScrollingLinks />
    <button className="btn glass bg-orange-800 mt-2 ml-5">Show More</button>
    </div>
  </div>
  <div className='flex justify-around items-center bg-zinc-900 max-w-fit'>
    <div className='m-10'>
    <img src='https://www.nitjsr.ac.in/static/media/LOGO_IAC.a1efbd8d.png' alt='image'></img>
    </div>
    <div className='m-10'>
    <img src='https://www.nitjsr.ac.in/static/media/nirf2023_banner.2acae972.jpg' alt='img'></img>
    </div>
    <div className='m-10'>
      <img src='https://www.nitjsr.ac.in/static/media/img3.526381f0.jpeg' alt='image'></img>
    </div>
  </div>
  <div className='bg-zinc-900 pl-60 text-amber-600'>
    <div className='flex items-center ml-20'><h1>Rolling Advertisement for Recruitment of Assistant Professor Post : </h1><a className="link link-accent" href='https://online.nitjsr.ac.in/faculty2024'>Link</a></div>
    <div className='flex items-center ml-40'><h1>PhD admissions for the Academic Year 2024-25 : </h1><a className="link link-success" href='http://202.168.87.80/backend/uploads/recents/INFORMATION%20BROCHURE%20FOR%20PhD%20ADMISSIONS%20IN%20NIT%20JAMSHEDPUR%20FOR%20THE%20AUTUMN%20SEMESTER%20OF%20AY%202024-2025.pdf'>Link</a></div>
    <div className='flex items-center ml-40'><h1>NIRF submitted data : </h1><a className="link link-warning" href='https://www.nitjsr.ac.in/Institute/Ranking_and_Recognition'>Link</a>
    <h1 className='ml-10'>List of events 2024: </h1><a className="link link-info" href='https://www.nitjsr.ac.in/events'>Link</a>
    </div>
  </div>
  <div className='App grid grid-cols-3 justify-center gap-4 max-w-fit'>
                {contents.map(contents => (
                    <Cards 
                        key={contents.id}
                        image={contents.image}
                        name={contents.name}
                        productType={contents.productType}
                        Link={contents.Link}
                    />
                ))}
            </div>
  <div className='flex bg-base-100'>
                <div className='max-w-xl'>
                  <div className='bg-amber-300 mt-10 ml-20'><h1 className='font-black font-serif text-3xl text-black'>Director's Corner</h1></div>
                  <div className='flex ml-20 bg-white'>
                        <div>
                          <img src='https://www.nitjsr.ac.in/static/media/director.5dd2bd73.jpg'></img>
                        </div>
                        <div>
                          <p className='text-amber-700'>
                          It is a privilege and honour for me to have led the NIT Jamshedpur as a Director of the Institution. 
                          NIT Jamshedpur has a rich legacy of more than sixty dedicated years of service to the nation and its pride of Jharkhand. 
                          </p>
                        </div>
                  </div>
                  <div className='ml-20 bg-white text-amber-700'>
                    <p>
                    NIT Jamshedpur takes extreme pride in the fact that it has been occupying a unique position in imparting technological education to Indian youth. 
                    Since its inception, the institute has had a vision to provide quality technical education and to facilitate scientific and technological 
                    research, coupled with a mission to develop human potential to its zenith with excellence in teaching and high quality research.
                    </p>
                  </div>
                  <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ml-20 mt-5 bg-indigo-800">Read More</button>
                </div>
                <div className='max-w-xl ml-20'>
                <div className='bg-blue-800 mt-10 ml-20'><h1 className='font-black font-serif text-3xl text-black'>Our Vision</h1></div>
                <div className='flex ml-20 bg-white'>
                <div>
                          <p className='text-yellow-600'>
                          To be one of the premier technical institutions for its academic excellence and innovative research 
                          to meet the future needs of the society. 
                          </p>
                </div>
                </div>
                <div className='bg-green-900 mt-10 ml-20'><h1 className='font-black font-serif text-3xl text-black'>Our Mission</h1></div>
                <div className='flex ml-20 bg-white'>
                <div>
                          <p className='text-red-800'>
                          1. To build conducive environment for learning and creativity.<br></br>
                          2. To train students to become technically competent professionals and socially responsible citizens.<br></br>
                          3. To develop innovative products and technologies for the betterment of the society.
                          </p>
                </div>
                </div>
                </div>
  </div>
  <div className='flex justify-around mt-5'>
    <div className='max-w-lg ml-20 bg-yellow-50 h-96'>
    <h1 className='font-serif text-3xl font-black text-yellow-800 bg-slate-900 '>Research and Publications </h1>
        <VerticalScroller links={links} speed={200} className='ml-10'/>    
    </div>
    <div>
    <div className='max-w-3xl h-auto bg-white mr-20'>
    <h1 className='font-serif text-3xl font-black text-red-700 bg-black'>Our Achievers (Batch 2019-23)</h1>
    <StudentCarousel/>
    </div>
    <button className="btn glass bg-red-600 text-black mt-5">Show More</button>
    </div>
  </div> 
  <div className='bg-white w-auto max-h-screen mx-auto mt-5 rounded-md'>
  <h1 className='font-serif text-3xl font-black mx-auto text-center bg-black text-amber-700'>Testimonial</h1>
  <TestimonialCarousel className="mx-auto"/>
    </div> 
  <div className='m-auto mt-5 bg-slate-950'>
    <h1 className='text-center text-green-500 font-extrabold text-2xl'>Latest News and Events</h1>
    <NewsCarousel/>
  </div>
  <div className='flex justify-around items-center'>
  <button className="btn btn-outline btn-info">Archive events</button>
<button className="btn btn-outline btn-success">Events</button>
  </div>
  <div className='bg-slate-200'>
    <Slider/>
  </div>
  </>
  )
}

export default LandingPage