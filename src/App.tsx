import "../global.css";
import todoRepositorieFactory from "./di/repositories/todoRepositorie";
import Home from "./presentation/pages/task";

function App() {
  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center">
      <Home todoRepositorieFactory={todoRepositorieFactory} />
    </div>
  );
}

export default App;
