import { Routes, Route } from "react-router-dom";

import { Forms } from "./pages/Forms"
import { Card } from "./pages/Card"
import { Index } from "../src/index"

export function App() {
  return (
    <div>
      <Routes>
        <Route>
          <Route exact path="/" element={<Forms />}>
          </Route>
          <Route path=":slug" element={<Card />} />
        </Route>
      </Routes>
    </div>

  );
}
