import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import CssAdultSwimBumpsCopy from "./pages/cssAdultSwimBumpsCopy";
import CssCursorFollow from "./pages/cssCursorFollow";
import CssMotionBar from "./pages/cssMotionBar";
import Index from "./pages/index";
import NoPage from "./404";
import CssBallAnimation from "./pages/cssBallAnimation";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/practices" element={<Index />} ></Route>
          {/* cursor follow */}
          <Route exact path="/practices/cssCursorFollow" 
                 element={<CssCursorFollow />} ></Route>
          {/* motion bar */}
          <Route exact path="/practices/cssMotionBar" 
                 element={<CssMotionBar />} ></Route>
          {/* adult swim bump */}
          <Route exact path="/practices/cssAdultSwimBumpsCopy" 
                 element={<CssAdultSwimBumpsCopy />} ></Route>
          {/* ball animation */}
          <Route exact path="/practices/cssBallAnimation" 
                 element={<CssBallAnimation />} ></Route>
          
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
