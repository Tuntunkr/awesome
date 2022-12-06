import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Project from "./Components/Project/Project";
import Articles from "./Components/Articles/Articles";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Navbar/Header";
import Articlesdetails from "./Components/Articles/Articlesdetails";



function App() {
  return (
    <>
      <Header />
      <Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/project" element={ <Project/>} />
				<Route path="/articles" element={<Articles />} />
        <Route path="/articlesdetails" element={<Articlesdetails/>} />
			</Routes>
      <Footer />
    </>
  );
}

export default App;
