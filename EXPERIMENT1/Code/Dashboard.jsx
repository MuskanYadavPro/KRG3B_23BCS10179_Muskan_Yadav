/*
import{logs} from "../data/log"

const total = logs
  .filter(log => log.carbon > 0)
  .reduce((acc, curr) => acc + curr.carbon, 0);

console.log(total); */
import { logs } from "../data/logs";

const Dashboard = () => {
  const totalCarbon = logs.reduce(
    (sum, log) => sum + log.carbon,
    0
  );

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Carbon Footprint: {totalCarbon} Kgs</p>

      <ul>
        {logs.map((log) => (
          <li key={log.id}>
            {log.activity} = {log.carbon} Kg
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;


