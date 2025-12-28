import React, { useState } from "react";

const testimonials = [

  {
    name: "Manjunath",
    title: "Backend dev",
    content:
      "Truly impressed with the work! Every detail was taken care of. Communication was seamless and the end product exceeded expectations.",
    img: "/manju.png",
  },
  {
    name: "Thanmay",
    title: "BCA Student - Researcher",
    content:
      "Working with Mani Bharadwaj was a game-changer. The solutions provided were innovative and very well executed. Highly recommended!",
    img: "/thanu.png",
  },
    {
    name: "Pavan Kumar",
    title: "Frontend dev",
    content:
      "Working with Mani Bharadwaj was a great experience. His professionalism, dedication, and passion for development made the project a success, making him the perfect partner for elevating your website and brand.",
    img: "/pavan.jpeg",
  },
];

const TestimonialScroller = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-10">
      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Kind Words from Clients and Friends
      </h1>

      <div className="relative w-full bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Carousel Wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* Testimonial Item */}
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`${
                index === currentIndex ? "block" : "hidden"
              } duration-700 ease-in-out`}
            >
              <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 px-4 md:px-0">
                <p className="text-center text-sm md:text-base line-clamp-3">{t.content}</p>
                <div className="flex items-center justify-center mt-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-16 h-16 rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-semibold">{t.name}</h4>
                    <p className="text-sm">{t.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-blue-500" : "bg-gray-400"}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Slider Controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white hover:bg-gray-600 dark:bg-gray-400 dark:text-black dark:hover:bg-gray-300 transition duration-300">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white hover:bg-gray-600 dark:bg-gray-400 dark:text-black dark:hover:bg-gray-300 transition duration-300">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default TestimonialScroller;
