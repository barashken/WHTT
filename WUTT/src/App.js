import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Components1 from "./pages/Components1";
import Icons from "./pages/Icons";
import WUTTDays from "./pages/WUTTDays";
import WUTTSummery from "./pages/WUTTSummery";
import WUTTSignIn from "./pages/WUTTSignIn";
import WUTTChoose from "./pages/WUTTChoose";
import WUTTCostaRica from "./pages/WUTTCostaRica";
import WUTTMain from "./pages/WUTTMain";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/icons":
        title = "";
        metaDescription = "";
        break;
      case "/wutt-days":
        title = "";
        metaDescription = "";
        break;
      case "/wutt-summery":
        title = "";
        metaDescription = "";
        break;
      case "/wutt-signin":
        title = "";
        metaDescription = "";
        break;
      case "/wutt-choose":
        title = "";
        metaDescription = "";
        break;
      case "/wutt-costarica":
        title = "";
        metaDescription = "";
        break;
      case "/wutt-main":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    // <Routes>
    //   <Route path="/" element={<Components1 />} />
    //   <Route path="/icons" element={<Icons />} />
    //   <Route path="/wutt-days" element={<WUTTDays />} />
    //   <Route path="/wutt-summery" element={<WUTTSummery />} />
    //   <Route path="/wutt-signin" element={<WUTTSignIn />} />
    //   <Route path="/wutt-choose" element={<WUTTChoose />} />
    //   <Route path="/wutt-costarica" element={<WUTTCostaRica />} />
    //   <Route path="/wutt-main" element={<WUTTMain />} />
    // </Routes>
    <WUTTMain />
  );
}
export default App;
