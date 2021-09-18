const width = 400;
const height = 400;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 5;
const r = centerY - strokeWidth / 2;

const eyeOffsetX = 90;
const eyeOffsetY = 25;
const eyeRadius = 40;

function App() {
  return (
    <svg width={width} height={height}>
      <circle
        cx={centerX}
        cy={centerY}
        fill='yellow'
        r={r}
        stroke='black'
        stroke-width={strokeWidth}
      ></circle>
      <circle cx={centerX - eyeOffsetX} cy={centerY - eyeOffsetY} r={eyeRadius} />
      <circle cx={centerX + eyeOffsetX} cy={centerY - eyeOffsetY} r={eyeRadius} />
    </svg>
  );
}

export default App;
