import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeLayout } from "./layouts/HomeLayout";
import { Home } from "./pages/Home/Home";

import "./App.css";
import { DetailProduct } from "./pages/DetailProduct/DetailProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            caseSensitive={true}
            element={
              <HomeLayout>
                <Home />
              </HomeLayout>
            }
          />
          <Route
            path="/product/:id"
            caseSensitive={true}
            element={
              <HomeLayout>
                <DetailProduct />
              </HomeLayout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
