import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Suspense, lazy } from "react";

const AboutPage = lazy(() => import("./components/About"));
const ContactPage = lazy(() => import("./components/Contact"));
const WorkPage = lazy(() => import("./components/Works"));

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/Work"
            element={
              <Suspense
                fallback={
                  <div className="flex items-center justify-center min-h-screen">
                    <div className="text-gray-700">Loading...</div>
                  </div>
                }
              >
                <WorkPage />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense
                fallback={
                  <div className="flex items-center justify-center min-h-screen">
                    <div className="text-gray-700">Loading...</div>
                  </div>
                }
              >
                <AboutPage />
              </Suspense>
            }
          />
          <Route
            path="/Contact"
            element={
              <Suspense
                fallback={
                  <div className="flex items-center justify-center min-h-screen">
                    <div className="text-gray-700">Loading...</div>
                  </div>
                }
              >
                <ContactPage />
              </Suspense>
            }
          />
        </Routes>
        <Footer></Footer>
        
      </div>
    </>
  );
}

export default App;
