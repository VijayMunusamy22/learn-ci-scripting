import './App.css';
import ConditionalRendering from "./components/ConditionalRendering";
import FormsComponent from "./components/Forms";
import { Routes, Route } from "react-router-dom";

const AppComponent = () => {
  return (
    <div className="app-component-container">
      <Routes>
        <Route path="/" element={<ConditionalRendering />} />
        <Route path="showInfo" element={<FormsComponent />} />
        <Route element={<p>No page exists</p>} />
      </Routes>
    </div>
  );
}

export default AppComponent;
