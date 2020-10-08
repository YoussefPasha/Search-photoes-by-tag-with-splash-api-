import React from "react";
const SearchedItem = (props) => {
  return (
    <>
      <div>
        <div className="card">
          <img
            src={props.imgTitle.urls.small}
            className="card-img-top"
            alt="imageCard"
          />
          <div className="card-body">
            <h5 className="card-title">{props.imgTitle.alt_description}</h5>
            <p className="card-text">{props.imgTitle.description}</p>
            <p className="card-text">
              <small className="text-muted">{props.imgTitle.updated_at}</small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchedItem;
