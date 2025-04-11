import type { SVGProps } from 'react';
const SvgLinkGray = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      stroke="#BEBEBE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.1}
      d="m6.97 10.03-2.432 2.432a4.845 4.845 0 0 0 .05 6.905 4.85 4.85 0 0 0 3.464 1.47c1.328.01 2.534-.482 3.442-1.39l2.431-2.431m3.105-3.046 2.432-2.431a4.82 4.82 0 0 0 1.42-3.442 4.84 4.84 0 0 0-1.471-3.463 4.94 4.94 0 0 0-3.463-1.442 4.8 4.8 0 0 0-3.442 1.391l-2.431 2.431m-1.762 8.608 7.294-7.294"
    />
  </svg>
);
export default SvgLinkGray;
