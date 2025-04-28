import type { SVGProps } from 'react';
const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.1} d="M10.94 21h10.59" />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.1}
      d="M17.172 3.872a3.53 3.53 0 0 0-4.947.298s-6.378 7.133-8.59 9.61c-2.214 2.474-.59 5.892-.59 5.892S6.7 20.818 8.88 18.38l8.592-9.608a3.447 3.447 0 0 0-.301-4.899"
      clipRule="evenodd"
    />
    <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.1} d="m10.264 6.486 4.834 4.221" />
  </svg>
);
export default SvgEdit;
