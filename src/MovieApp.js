import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function MovieApp() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 디테일의 useParams로 변수 값(id)를 넘겨줌 */}
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default MovieApp;
