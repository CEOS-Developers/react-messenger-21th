import type { SVGProps } from 'react';
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 25" {...props}>
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.1}
      d="M10.692 18.385a7.192 7.192 0 1 0 0-14.385 7.192 7.192 0 0 0 0 14.385M20.5 21l-4.577-4.577"
    />
  </svg>
);
export default SvgSearch;
