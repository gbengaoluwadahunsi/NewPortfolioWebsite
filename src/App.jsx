import Homepage from "./Components/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./Components/DarkModeprovider";

const App = () => {
  return (
    <DarkModeProvider>
      <div className="text-2xl ">
        <div className=" h-full">
          <Router>
            <Routes>
              <Route exact path="/" element={<Homepage />} />
            </Routes>
          </Router>
        </div>
      </div>
    </DarkModeProvider>
  );
};

export default App;
