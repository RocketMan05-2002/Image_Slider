import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Slider.css";

export default function Slider() {
  const [imageData, setImageData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=10"
      );
      const data = await response.json();
      if (data && data.length) {
        setImageData(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading.... please wait</div>;
  }
  if (errorMsg) {
    return <div>Error: {errorMsg}</div>;
  }

  function handlePrevious() {
    setCurrentSlide(
      currentSlide === 0 ? imageData.length - 1 : currentSlide - 1
    );
  }

  function handleNext() {
    setCurrentSlide(
      currentSlide === imageData.length - 1 ? 0 : currentSlide + 1
    );
  }

  return (
    <div className="main-container">
      <div className="container">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={handlePrevious}
        />
        {imageData && imageData.length
          ? imageData.map((val, index) => (
              <img
                key={index}
                alt={val.download_url}
                src={val.download_url}
                className={
                  currentSlide === index
                    ? "current-image"
                    : "current-image hide-current-image"
                }
              />
            ))
          : null}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={handleNext}
        />
        <span className="circle-indicators">
          {imageData && imageData.length
            ? imageData.map((_, index) => (
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
