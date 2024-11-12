import "../global.css";
import axiosAdapter from "./infra/axios-adapter";
import Home from "./presentation/pages/task";

function App() {
  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center">
      <Home httpClient={axiosAdapter} />
    </div>
  );
}

export default App;
