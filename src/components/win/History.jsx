import React from "react";
import "../../index.css"; // Corrected import path

const History = ({ array }) => {
  if(array.length != 0){
    return (
        <>
          <div className="history-container">
            <h2>Color Number History:</h2>
            <ul>
              {array.map((item, index) => (
                <li key={index}>
                  Number: {item.number}, Color: {item.color}
                </li>
              ))}
            </ul>
          </div>
        </>
      );
  }
};

export default History;
