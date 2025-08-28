import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import Layout from "../layout/Layout";
import StoriesPage from "../pages/StoriesPage";
import ScrollToTop from "../components/utils/ScrollToTop";

export default function RountingSystems() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/stories" element={<StoriesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
