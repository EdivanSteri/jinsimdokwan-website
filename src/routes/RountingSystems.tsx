import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import Layout from "../layout/Layout";

export default function RountingSystems() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
