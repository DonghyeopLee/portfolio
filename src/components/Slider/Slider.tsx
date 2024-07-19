import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { images } from "./image";
import { useState } from "react";

interface Image {
    id: number;
    name: string;
    image: string;
  }
export function Slider() {
    const [selectedId, setSelectdId] = useState<number>(1);
  const prevImage = () => {
    setSelectdId((prev) => (prev <= 1 ? images.length : prev - 1));
  };
  const nextImage = () => {
    setSelectdId((prev) => (prev >= images.length ? 1 : prev + 1));
  };
  return (
    <Container id="about">

    <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
      <div className="image">
        <div className="image_slider">
          <div className="images">
            {images
              .filter((image) => image.id === selectedId)
              .map((image) => {
                return <img key={image.id} src = {image.image} alt={image.name} />;
              })}
          </div>

          <div className="thumbnails">
            {images.map((image: Image) => {
              return (
                <img
                  key={image.id}
                  alt={image.name}
                  src={image.image}
                  onClick={() => setSelectdId(image.id)}
                />
              );
            })}
          </div>
          <button className="button_prev" onClick={prevImage}>
            {" "}
            Prev{" "}
          </button>
          <button className="button_next" onClick={nextImage}>
            {" "}
            Next{" "}
          </button>
        </div>
      </div>
      </ScrollAnimation>
      <div>
            <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
            <h2>MY CAT: Mochi</h2>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
            <h3>Emjoy with my cutie cat</h3>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
            <p>ENjoy </p>
            </ScrollAnimation>
    </div>
    </Container>
  )
}
