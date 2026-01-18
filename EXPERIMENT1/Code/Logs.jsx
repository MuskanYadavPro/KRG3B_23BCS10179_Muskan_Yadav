import { logs } from "../data/logs";

const Logs = () => {
  // Filter high carbon logs with carbon >= 4 and carbon != 0 (actually all >= 4 can't be 0)
  const highCarbonLogs = logs.filter(log => log.carbon >= 4 && log.carbon !== 0);

  // Filter low carbon logs with carbon < 4 but exclude zero carbon logs
  const lowCarbonLogs = logs.filter(log => log.carbon < 4 && log.carbon !== 0);

  const highCarbonTotal = highCarbonLogs.reduce((sum, log) => sum + log.carbon, 0);
  const lowCarbonTotal = lowCarbonLogs.reduce((sum, log) => sum + log.carbon, 0);

  return (
    <div>
      <h2>Daily Logs</h2>

      {highCarbonTotal > 0 && (
        <section>
          <h3 style={{ color: "red" }}>High Carbon Activities</h3>
          <ul>
            {highCarbonLogs.map(log => (
              <li key={log.id} style={{ color: "red" }}>
                {log.activity} = {log.carbon} Kg
              </li>
            ))}
          </ul>
        </section>
      )}

      {lowCarbonTotal !== 0 && (  // allow negatives in low carbon total
        <section>
          <h3 style={{ color: "green" }}>Low Carbon Activities</h3>
          <ul>
            {lowCarbonLogs.map(log => (
              <li key={log.id} style={{ color: "green" }}>
                {log.activity} = {log.carbon} Kg
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default Logs;
