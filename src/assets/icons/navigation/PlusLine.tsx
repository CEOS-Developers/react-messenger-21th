import type { SVGProps } from 'react';
const SvgPlusLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <circle cx={12} cy={12} r={8.95} stroke="#000" strokeWidth={1.1} />
    <path
      stroke="#000"
      strokeWidth={1.1}
      d="M12 16.267a.69.69 0 1 1 0 1.379.69.69 0 0 1 0-1.379ZM12 11.31a.69.69 0 1 1 0 1.379.69.69 0 0 1 0-1.378ZM12 6.354a.69.69 0 1 1 0 1.379.69.69 0 0 1 0-1.379Z"
    />
  </svg>
);
export default SvgPlusLine;
