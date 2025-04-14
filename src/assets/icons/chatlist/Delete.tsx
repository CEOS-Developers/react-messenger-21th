import type { SVGProps } from 'react';
const SvgDelete = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <circle cx={12} cy={12} r={9.5} fill="#BEBEBE" />
    <path stroke="#fff" strokeLinecap="round" strokeWidth={1.1} d="m15.5 8.5-7 7M15.5 15.5l-7-7" />
  </svg>
);
export default SvgDelete;
