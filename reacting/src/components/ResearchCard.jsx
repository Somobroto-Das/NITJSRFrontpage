/* eslint-disable react/no-unescaped-entities */
function ResearchCard() {
  return (
    <div className='relative m-1 rounded-md flex-grow flex-shrink-0 basis-full md:basis-1/2 lg:basis-1/3 max-w-full md:max-w-1/2 lg:max-w-1/3 max-h-[50rem] transition duration-200 hover:-translate-y-2 hover:custom-shadow bg-blue-200 shadow-md p-4'>
      <div className="mt-5">
        <h1 className='text-black font-black font-serif'>
          Optimization of process variables in drilling of carbon fiber reinforced plastics using various multi criteria decision making approaches
        </h1>
        <a className="link link-accent mt-2 block" href="#">
          I'm a simple link
        </a>
      </div>
    </div>
  )
}

export default ResearchCard
