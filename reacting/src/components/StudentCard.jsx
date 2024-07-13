function Card(props) {
  return (
    <div className='relative m-1 p-5 rounded-md flex-grow flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 max-w-full sm:max-w-1/2 md:max-w-1/3 lg:max-w-1/4 max-h-[40rem] transition duration-200 hover:-translate-y-2 hover:custom-shadow bg-white'>
      <img src={props.img1} className='rounded-full w-full max-w-[150px] mx-auto'/>
      <div className="mt-5 mb-5 text-center">
        <h1 className='text-black text-xl font-black'>{props.name}</h1>
      </div>
      <img src={props.img2} className='rounded-md w-full'/>
    </div>
  )
}

export default Card;
