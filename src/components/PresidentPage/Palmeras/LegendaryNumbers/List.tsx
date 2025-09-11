import React, { type JSX } from "react";
import { legendaryNumbersData } from "./Data/egendaryNumbersData";
import Item from "./Item";

export default React.memo(function List(): JSX.Element {
  return (
    <ul role="list" className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {legendaryNumbersData.map((item) => (
        <Item key={item.id} legendaryNumber={item} />
      ))}
    </ul>
  );
});
