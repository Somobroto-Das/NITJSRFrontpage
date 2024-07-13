// src/VerticalScroller.js

import React, { useEffect, useRef } from 'react';

const VerticalScroller = ({ links, speed = 5 }) => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      scrollAmount += 1;
      if (scrollAmount >= scroller.scrollHeight / 2) {
        scrollAmount = 0;
      }
      scroller.scrollTop = scrollAmount;
    };

    const interval = setInterval(scroll, speed);

    return () => clearInterval(interval);
  }, [speed]);

  return (
    <div className="relative overflow-hidden h-72">
      <div
        className="absolute w-full"
        style={{ top: 0, animation: `marquee ${links.length * speed * 2}ms linear infinite` }}
      >
        <div ref={scrollerRef} className="overflow-hidden h-96">
          <div className="flex flex-col">
            {links.concat(links).map((link, index) => (
              <div key={index} className="p-2 border-b border-gray-200">
                {link.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalScroller;
