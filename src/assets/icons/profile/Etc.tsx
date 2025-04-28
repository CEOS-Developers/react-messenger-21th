import type { SVGProps } from 'react';
const SvgEtc = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      stroke="currentColor"
      strokeWidth={1.1}
      d="M12 17.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 10.95a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 4.55a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1Z"
    />
  </svg>
);
export default SvgEtc;
