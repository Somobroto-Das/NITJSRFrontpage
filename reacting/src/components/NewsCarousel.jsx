import React, { useEffect, useRef } from 'react';

const NewsCarousel = () => {
  const news = [
    {
      id: 1,
      title: "National Workshop on Limit State Design of Steel Structures (LSDSS-2024) 17 - 21 May 2024",
      image: "https://nitjsr.ac.in/backend/uploads/institute_event/9491a9ac-3451-40ee-b28e-127f49d1435b-Screenshot%202024-04-30%20104058.png"
    },
    {
      id: 2,
      title: "Short term course SMI 2024 to be held during 27-31 May, 2024",
      image: "https://nitjsr.ac.in/backend/uploads/institute_event/0f8c445e-72d7-462b-b7b9-dfaabf283ad9-Screenshot%202024-05-27%20123444.png"
    },
    {
      id: 3,
      title: "Workshop on Indian Knowledge System",
      image: "https://nitjsr.ac.in/backend/uploads/institute_event/3a4fc998-a1c4-4d6e-ae77-cbcc8f5711ed-POSTER_page-0001.jpg"
    },
    {
      id: 4,
      title: ' Online STC on "Introduction to Number Theory and Cryptography" during August 05-09, 2024',
      image: "https://nitjsr.ac.in/backend/uploads/institute_event/360f42b6-162c-466d-9307-384bf1282d73-Screenshot%202024-07-05%20154700.png"
    },
    {
      id: 5,
      title: 'Online STC on "Machine Learning and its Applications in IoT, Computer Vision and Cloud Computing (MICC-2024)" during May 27-31, 2024',
      image: "https://nitjsr.ac.in/backend/uploads/institute_event/d7cf0239-63d6-4ed8-97a1-2c879dce2fb3-Screenshot%202024-05-08%20124221.png"
    },
    {
      id: 6,
      title: 'Seminar on Criminal Law Reforms 2023',
      image: "https://nitjsr.ac.in/backend/uploads/institute_event/3662b325-84b8-423e-95a9-905ea7148155-April%2023,%202024%20-%20Seminar_pages-to-jpg-0002.jpg"
    },
    {
      id: 7,
      title: "IPRoMM",
      image: "https://nitjsr.ac.in/backend/uploads/institute_event/08eb1e4f-bc9f-4d40-9914-76674b96c064-Screenshot%202024-03-26%20104951.png"
    }
  ];

  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const firstChild = carouselRef.current.children[0];
        carouselRef.current.appendChild(firstChild);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden p-4 ">
      <div
        ref={carouselRef}
        className="flex space-x-4 transition-transform duration-1000 ease-in-out"
      >
        {news.map(item => (
          <div key={item.id} className="flex-shrink-0 w-auto h-auto items-center">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-md shadow-md"
            />
            <h3 className="text-white mt-2 text-center">{item.title}</h3>
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-black bg-amber-600">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCarousel;
