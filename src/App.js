import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import CssCursorFollow from "./pages/cssCursorFollow";
import CssMotionBar from "./pages/cssMotionBar";
import Index from "./pages/index";

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
        </Routes>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
