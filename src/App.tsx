import { Route, Routes } from "react-router-dom";
import {
  AboutPage,
  BioPage,
  ConnectPage,
  HomePage,
  ProjectPage,
  StatsPage,
} from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/bio" element={<BioPage />}>
          <Route index path="/bio/about" element={<AboutPage />} />
          <Route path="/bio/stats" element={<StatsPage />} />
          <Route path="/bio/connect" element={<ConnectPage />} />
          <Route path="/bio/projects" element={<ProjectPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
