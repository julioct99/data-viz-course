import { arc } from 'd3';

// Face
const width = 400;
const height = 400;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 5;
const r = centerY - strokeWidth / 2;

// Eyes
const eyeOffsetX = 90;
const eyeOffsetY = 75;
const eyeRadius = 40;
const innerEyeRadius = 35;
const corneaRadius = 21;
const pupilRadius = 11;
const eyeColor = 'lightgreen';

// Mouth
const mouthWidth = 20;
const mouthRadius = 125;
const mouthArc = arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius + mouthWidth)
  .startAngle(Math.PI / 2)
  .endAngle((Math.PI * 3) / 2);

function App() {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        <circle fill='yellow' r={r} stroke='black' stroke-width={strokeWidth}></circle>

        <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
        <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={innerEyeRadius} fill='white' />
        <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={corneaRadius} fill={eyeColor} />
        <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={pupilRadius} />

        <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
        <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={innerEyeRadius} fill='white' />
        <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={corneaRadius} fill={eyeColor} />
        <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={pupilRadius} />

        <path d={mouthArc()} />
      </g>
    </svg>
  );
}

export default App;
