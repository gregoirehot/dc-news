import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/nav/Footer";
import Navbar from "./components/nav/Navbar";
import News from "./pages/news/News";
import Timeline from "./pages/timeline/Timeline";
import { useDataApi } from "./services/newsApi";

function App() {
  const [{ articles, isLoading, error }, setCountry] = useDataApi();

  return (
    <div className="App">
      <Navbar setCountry={setCountry} />
      <div className="app-body">
        <Routes>
          <Route
            path={process.env.PUBLIC_URL + "/"}
            element={
              <Timeline
                articles={articles}
                isLoading={isLoading}
                error={error}
              />
            }
          />
          <Route
            path={process.env.PUBLIC_URL + "/news/:id"}
            element={
              <News articles={articles} isLoading={isLoading} error={error} />
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
