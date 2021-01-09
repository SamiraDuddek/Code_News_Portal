import React, { useState } from "react";
import "./styles.scss";

const Like = ({ start }) => {
  const [count, setCount] = useState(start);

  return (
    <div className="like">
      <button className="like__btn" onClick={() => setCount(count + 1)}>
        <div className="like__count">
        {count} 
        </div>
        <div className="herz">
        {count === 0 && <img src="./assets/images/heart.svg" alt="Herz" />} 
        {count > 0 && <img src="./assets/images/heart_full.svg" alt="Herz" />} 
        </div>

      </button>
    </div>
  );
};

export default Like;

// used on start to convert start-prop to number
export const convert = (props) => {
  return { ...props, start: parseInt(props.start, 10) || 0 };
};
