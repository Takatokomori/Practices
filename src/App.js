import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Index from "./pages/index";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="practices" element={<Index />} ></Route>
        </Routes>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
