import { useState } from "react";
import people from "./data";
import "./index.css";

import {
  FaQuoteRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const prevPerson = () => {
    console.log(index);

    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;

      if (newIndex === people.length) return 0;

      return newIndex;
    });
  };

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;

      if (newIndex < 0) return people.length - 1;

      return newIndex;
    });
  };

  const randomPerson = () => {
    setIndex(() => {
      let randomNumber = Math.floor(Math.random() * people.length);

      if (randomNumber === index) randomNumber = index + 1;

      return randomNumber;
    });
  };

  return (
    <main>
      <div className="review">
        <div className="img-container">
          <img src={image} className="person-img" alt={`Image of ${name}`} />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>

        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
          
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
            Surprise me
          </button>
      </div>
    </main>
  );
};
export default App;
