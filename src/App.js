import Dashboard from "./Screens/Dashboard/Dashboard";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
          <Dashboard />
      </BrowserRouter>
    </div>
  );
}

export default App;
