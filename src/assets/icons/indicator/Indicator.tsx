import type { SVGProps } from 'react';
const SvgIndicator = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 138 5" {...props}>
    <rect width={138} height={5} fill="currentColor" rx={2.5} />
  </svg>
);
export default SvgIndicator;
