import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const valuesArray = props.dataPoints.map(dataPoint => dataPoint.value);
  // const totalMaximum = Math.max(...valuesArray);
  const totalMaximum = valuesArray.reduce((accumulator, value) => accumulator + (value), 0);

  console.log(totalMaximum);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
