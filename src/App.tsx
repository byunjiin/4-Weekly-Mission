import "sharing/styles/reset.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SharedPage } from "pages/SharedPage";
import { FolderPage } from "pages/FolderPage";
import { MainPage } from "pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/shared" element={<SharedPage />} />
        <Route path="/folder" element={<FolderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
