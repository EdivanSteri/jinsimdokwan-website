import React, { type JSX } from "react";
import { credentials } from "./Data/credentialsData";
import Item from "./Item";

export default React.memo(function List(): JSX.Element {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-10"
    >
      {credentials.map((credential) => (
        <Item key={credential.id} credential={credential} />
      ))}
    </ul>
  );
});
