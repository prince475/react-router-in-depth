import { createBrowserRouter, Route, NavLink, createRoutesFromElements, RouterProvider }  from "react-router-dom";

// pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import Contact from "./pages/help/Contact";
import Faq from "./pages/help/Faq";
import NotFound from "./pages/NotFound";
import Careers, {careersLoader} from "./pages/careers/Careers";
import { CareerDetails } from "./pages/careers/CareerDetails";

// Layout
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";


// Loader



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayout />} >
          <Route path="faq" element={<Faq/>}/>
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="careers" element={<CareersLayout />} >
          <Route
          index
          element={<Careers />}
          loader={ careersLoader }
          />
          <Route
            path=":id"
            element={<CareerDetails />}
          />
        </Route>


        <Route path="*" element={<NotFound />} />
    </Route>
  )

)

function App() {
  return (
      <RouterProvider router={router} />

  );
}

export default App
