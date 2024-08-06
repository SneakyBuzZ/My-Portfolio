import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

import { useState } from "react";
import Particles from "@/components/magicui/particles";

function App() {
  const [color] = useState("#A6A6A6");
  return (
    <div className="w-full m1-plus app main">
      <div className="w-full z-10">
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </div>
      <Particles
        className="absolute inset-0 -z-10"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}

export default App;
