import { arc } from 'd3-shape';

export const Mouth = ({ radius, width }) => {
  const mouthArc = arc()
    .innerRadius(radius)
    .outerRadius(radius + width)
    .startAngle(Math.PI / 2)
    .endAngle((Math.PI * 3) / 2);

  return <path d={mouthArc()} />;
};
