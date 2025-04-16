import type { SVGProps } from 'react';
const SvgBack = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.1} d="M12 3.316 3.316 12 12 20.684" />
  </svg>
);
export default SvgBack;
