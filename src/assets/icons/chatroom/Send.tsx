import type { SVGProps } from 'react';
const SvgSend = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <circle cx={12} cy={12} r={10} fill="#6DE67B" />
    <path
      fill="#fff"
      d="M11.4 16.737a.6.6 0 1 0 1.2 0zm1.024-9.898a.6.6 0 0 0-.848 0l-3.819 3.818a.6.6 0 0 0 .849.849L12 8.112l3.394 3.394a.6.6 0 1 0 .849-.849zm.176 9.898V7.263h-1.2v9.474z"
    />
  </svg>
);
export default SvgSend;
