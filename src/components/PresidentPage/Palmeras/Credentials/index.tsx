import React, { type JSX } from "react";
import Header from "./Header";
import List from "./List";

export default React.memo(function Credentials(): JSX.Element {
  return (
    <div aria-labelledby="credentials-heading" className="py-24">
      <Header />
      <List />
    </div>
  );
});
