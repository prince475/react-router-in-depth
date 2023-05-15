import { BrowserRouter, Routes, Route, NavLink }  from "react-router-dom";

//pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";


function App() {
  return (

    <BrowserRouter>
    <header>
      <nav>
        <h1>JobFix</h1>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="About">About</NavLink>
      </nav>
    </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App
