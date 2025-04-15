import type { SVGProps } from 'react';
const SvgDropDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path stroke="currentColor" strokeLinecap="round" strokeWidth={1.1} d="m5 9 6.525 6.525L18.05 9" />
  </svg>
);
export default SvgDropDown;
