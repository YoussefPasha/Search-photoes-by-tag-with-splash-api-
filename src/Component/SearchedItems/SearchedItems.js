import React from "react";
import SearchedItem from "./SearchedItem";
const SearchedItems = (props) => {
  return (
    <>
      {props.data.map((imgTitle) => (
        <SearchedItem key={Math.random()} imgTitle={imgTitle} />
      ))}
    </>
  );
};

export default SearchedItems;
