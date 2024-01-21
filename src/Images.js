import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.images) {
    return (
      <div className="imageSection">
        <div className="imageGrid">
          {props.images.map(function (image, index) {
            return (
              <div key={index}>
                <a href={image.src.original} target="_blank" rel="noreferrer">
                  <img src={image.src.landscape} alt="sunset" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
