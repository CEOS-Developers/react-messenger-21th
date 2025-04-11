import type { SVGProps } from 'react';
const SvgBatteryBlack = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 25 12" {...props}>
    <rect
      width={20.93}
      height={10.465}
      x={1.207}
      y={0.622}
      stroke="#000"
      strokeWidth={0.872}
      opacity={0.4}
      rx={3.052}
    />
    <path fill="#000" d="M23.445 4.11V7.6a1.892 1.892 0 0 0 0-3.489" opacity={0.5} />
    <rect width={14.826} height={7.849} x={2.515} y={1.93} fill="#000" rx={1.744} />
  </svg>
);
export default SvgBatteryBlack;
