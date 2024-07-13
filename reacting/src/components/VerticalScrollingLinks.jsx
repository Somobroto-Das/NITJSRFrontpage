// src/components/VerticalScrollingLinks.jsx
import { useEffect, useRef } from 'react';

const links = [
  { id: 1, name: 'Walk-in-Interview for Junior Research Fellow (JRF) Position', href: '#' },
  { id: 2, name: 'Advertisement for Walk-In Interview for guest faculty ', href: '#' },
  { id: 3, name: 'Final updated list of Eligible Candidates', href: '#' },
  { id: 4, name: 'Interview for the post of Assistant Registrar', href: '#' },
  { id: 5, name: 'TENTATIVE SCHEDULE OF WRITTEN TEST & INTERVIEW FOR THE POST OF ASSISTANT PROFESSOR (Level 10, Level 11 & Level 12)', href: '#' },
  { id: 6, name: 'Provisional list of Eligible & Ineligible Candidates for Assistant Professor', href: '#' },
  { id: 7, name: 'Circular-Print media advertisement', href: '#' },
  { id: 8, name: 'Final updated list of Eligible Candidates for written test/interview', href: '#' },
  { id: 9, name: 'Walk-in-Interview for Junior Research Fellow (JRF) Position', href: '#' },
];

const VerticalScrollingLinks = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const scrollHeight = container.scrollHeight;
    const clientHeight = container.clientHeight;

    let scrollTop = 0;
    const scrollStep = 1;
    const delay = 40; // ms

    const scroll = () => {
      scrollTop += scrollStep;
      if (scrollTop >= scrollHeight - clientHeight) {
        scrollTop = 0;
      }
      container.scrollTop = scrollTop;
    };

    const intervalId = setInterval(scroll, delay);

    return () => clearInterval(intervalId);
  }, []);


  return (
    <div className="h-64 overflow-hidden relative">
      <div ref={scrollContainerRef} className="h-full overflow-auto scroll-container">
        <ul className="space-y-4">
          {links.map(link => (
            <li key={link.id}>
              <a href={link.href} className="block p-2 bg-black text-white rounded hover:bg-blue-700">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VerticalScrollingLinks;
