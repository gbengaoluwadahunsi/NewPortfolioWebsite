import Homepage from "./Components/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="text-2xl max-w-[1600px] mx-auto">
      <div className=" h-full">
        <Router>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
