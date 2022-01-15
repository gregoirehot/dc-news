import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/nav/Footer";
import Header from "./components/nav/Header";
import News from "./pages/News";
import Timeline from "./pages/Timeline";
import { useDataApi } from "./services/newsApi";

function App() {
  const dataApiNews = useDataApi();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path={process.env.PUBLIC_URL + "/"}
          element={<Timeline dataApiNews={dataApiNews} />}
        />
        <Route
          path={process.env.PUBLIC_URL + "/news/:id"}
          element={<News dataApiNews={dataApiNews} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
