import { Eyes } from './components/Eyes';
import { Face } from './components/Face';
import { Mouth } from './components/Mouth';

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

// Mouth
const mouthWidth = 20;
const mouthRadius = 125;

function App() {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        <Face fill='yellow' radius={r} stroke='black' strokeWidth={strokeWidth} />
        <Eyes offsetX={eyeOffsetX} offsetY={eyeOffsetY} radius={eyeRadius} />
        <Mouth width={mouthWidth} radius={mouthRadius} />
      </g>
    </svg>
  );
}

export default App;
