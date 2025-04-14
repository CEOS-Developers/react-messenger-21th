import type { SVGProps } from 'react';
const SvgProfile = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 36 36" {...props}>
    <circle cx={18} cy={18} r={18} fill="#C6ECE1" />
    <path
      stroke="#fff"
      strokeWidth={1.1}
      d="M10.242 23.44c0-1.231 1.09-2.284 2.793-3.062 1.658-.758 3.657-1.136 4.965-1.136s3.307.378 4.965 1.136c1.704.778 2.793 1.831 2.793 3.062v3.01H10.242z"
    />
    <circle cx={18} cy={13.154} r={3.604} stroke="#fff" strokeWidth={1.1} />
  </svg>
);
export default SvgProfile;
