import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { images } from "./image";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Image {
    id: number;
    name: string;
    image: string;
    title: string;
    subtitle: string;
   description: string;
  }

interface SlideData {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

export function Slider() {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
  
  // Convert the imported images to SlideData format
  const slides: SlideData[] = images.map((img: Image) => ({
    id: img.id,
    image: img.image,
    title: img.title,
    subtitle: img.subtitle,
    description: img.description
  }));

  const prevImage = () => {
    setCurrentSlide((prev) => (prev <= 0 ? slides.length - 1 : prev - 1));
  };
  const nextImage = () => {
    setCurrentSlide((prev) => (prev >= slides.length - 1 ? 0 : prev + 1));
  };
  return (
    <Container id="about">
      <h2></h2>
      <div className="content-wrapper">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <div className="image">
            <div className="image_slider">
              <div className="images">
                <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
              </div>

              <button 
                className="slide-button prev" 
                onClick={prevImage}
                aria-label="Previous image"
              >
                <FiChevronLeft size={24} />
              </button>

              <button 
                className="slide-button next" 
                onClick={nextImage}
                aria-label="Next image"
              >
                <FiChevronRight size={24} />
              </button>

              <div className="thumbnails">
                {images.map((image: Image) => (
                  <img
                    key={image.id}
                    alt={image.name}
                    src={image.image}
                    onClick={() => setCurrentSlide(image.id - 1)}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <div className="description">
          <ScrollAnimation animateIn="fadeInRight" delay={0.10 * 1000}>
            <h1>{slides[currentSlide].title}</h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" delay={0.30 * 1000}>
            <p>{slides[currentSlide].description}</p>
          </ScrollAnimation>
        </div>
      </div>
    </Container>
  )
}
