function Card(props) {
  return (
    <div className='relative m:1 p-5 rounded-md flex-grow flex-shrink-0 basis-[25rem] max-w-[25rem] max-h-[40rem] transition duration-200 hover:-translate-y-2 hover:custom-shadow bg-white'>
        <img src={props.img1} className='rounded-full max-w-xs'/>
        <div className="ml-20 mt-5 mb-5"><h1 className='text-black text-xl font-black ml-30'>{props.name}</h1></div>
        <img src={props.img2} className='rounded-md max-w-xs'/>
    </div>
  )
}

export default Card