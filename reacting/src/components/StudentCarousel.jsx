import Card from "./StudentCard";
import placementData from "./PlacementContent";
import Carousel from "./Carousel";

function StudentCarousel() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <Carousel autoSlide={true} autoSlideInterval={6000}>
          {placementData.map((s) => (
            <Card key={s.id} name={s.name} img1={s.img1} img2={s.img2} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default StudentCarousel;
