import Card from "./StudentCard";
import placementData from "./PlacementContent";
import Carousel from "./Carousel";

function StudentCarousel() {
  return (
    <div className='max-w-2xl'>
        <Carousel autoSlide={true} autoSlideInterval={6000}>
        {
          placementData.map((s)=>(
            <Card
            key={s.id}
            name={s.name}
            img1={s.img1}
            img2={s.img2}
            />
          ))
        }
        </Carousel>
    </div>
  )
}

export default StudentCarousel