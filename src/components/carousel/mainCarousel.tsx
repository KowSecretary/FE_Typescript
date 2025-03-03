import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

export default function MainCarousel() {
  const autoplay = useRef(Autoplay({ delay: 4000 }));

  const slides = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/736x/cf/c7/fb/cfc7fb1007ac6a55d46e50e861c353dd.jpg",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/736x/ac/e0/35/ace035e4f9673e91570ab75761188703.jpg",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/736x/82/e3/90/82e3905cb619a2921be4862c7f0bed18.jpg",
    },
  ];

  return (
    <div className="overflow-hidden rounded-2xl">
      <Carousel
        withIndicators
        height={300}
        loop
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop} // Dừng khi hover vào
        onMouseLeave={autoplay.current.reset} // Tiếp tục khi rời chuột khỏi
      >
        {slides.map((slide) => (
          <Carousel.Slide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}
