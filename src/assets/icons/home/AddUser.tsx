import type { SVGProps } from 'react';
const SvgAddUser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      stroke="#000"
      strokeWidth={1.1}
      d="M5.775 17.44c0-1.231 1.09-2.284 2.793-3.062 1.658-.758 3.657-1.136 4.965-1.136s3.307.378 4.965 1.136c1.703.778 2.793 1.83 2.793 3.061v3.011H5.775z"
    />
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.1} d="M7.302 10.12H2.16M4.73 12.692V7.55" />
    <circle cx={13.533} cy={7.154} r={3.604} stroke="#000" strokeWidth={1.1} />
  </svg>
);
export default SvgAddUser;
