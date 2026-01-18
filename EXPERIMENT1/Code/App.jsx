import Header from "./assets/component/Header";
import Dashboard from "./assets/pages/Dashboard";
import Logs from "./assets/pages/Logs";

const App = () => {
  return (
    <div>
      <Header title="Ecotrack-Experiment1" />
      <Dashboard />
      <Logs />
    </div>
  );
};

export default App;

