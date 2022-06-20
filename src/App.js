import {BrowserRouter as Router, Route, Link, Routes, BrowserRouter, Switch} from "react-router-dom";
import Main from "./Page/main";
import MealsDescription from "./Page/mealsDescription";
import Meals from "./Page/meals";
import Searched from "./Page/Searched";



function App() {
  return (
      <div className="App">




          <Router>
              <Routes>

                  <Route exact path="meals" element={<Meals />} />
                  <Route exact path="/" element={<Meals />} />
                  <Route exact path="/searched/:name" element={<Searched />} />
                  <Route exact path="/description/:name" element={<MealsDescription />} />



              </Routes>

          </Router>
      </div>
  );
}




export default App;
