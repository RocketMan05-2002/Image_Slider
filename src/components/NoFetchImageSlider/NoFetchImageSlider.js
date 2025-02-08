import { useState } from "react";
import planetImages from "./Images";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./NoFetchImageSlider.css";

export default function NoFetchSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handlePrevious() {
    setCurrentSlide(
      currentSlide === 0 ? planetImages.length - 1 : currentSlide - 1
    );
  }

  function handleNext() {
    setCurrentSlide(
      currentSlide === planetImages.length - 1 ? 0 : currentSlide + 1
    );
  }

  return (
    <div className="main-container">
      <div className="container">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={handlePrevious}
        />
        {planetImages.map((val, index) => (
          <img
            key={index}
            src={val}
            alt={`planet-${index}`}
            className={
              currentSlide === index
                ? "current-image"
                : "current-image hide-current-image"
            }
          />
        ))}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={handleNext}
        />
        <span className="circle-indicators">
          {planetImages && planetImages.length
            ? planetImages.map((_, index) => (
                <button
                  className={
                    currentSlide === index
                      ? "current-indicator"
                      : "current-indicator inactive-indicator"
                  }
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))
            : null}
        </span>
      </div>
    </div>
  );
}
