import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import CssAdultSwimBumpsCopy from "./pages/cssAdultSwimBumpsCopy";
import CssCursorFollow from "./pages/cssCursorFollow";
import CssMotionBar from "./pages/cssMotionBar";
import Index from "./pages/index";
import NoPage from "./pages/noPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="practices" element={<Index />} ></Route>
          <Route path="practices/cssCursorFollow" 
                 element={<CssCursorFollow />} ></Route>
          <Route path="practices/cssMotionBar" 
                 element={<CssMotionBar />} ></Route>
          <Route path="practices/cssAdultSwimBumpsCopy" 
                 element={<CssAdultSwimBumpsCopy />} ></Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
