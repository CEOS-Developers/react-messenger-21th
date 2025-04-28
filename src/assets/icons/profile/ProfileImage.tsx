import type { SVGProps } from 'react';
const SvgProfileImage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 22 22" {...props}>
    <circle cx={11} cy={11} r={11} fill="currentColor" />
    <path
      stroke="#fff"
      strokeWidth={0.512}
      d="M6.856 13.292c0-.783.644-1.42 1.585-1.88.926-.45 2.04-.675 2.77-.675.731 0 1.846.224 2.772.676.94.458 1.585 1.096 1.585 1.879v1.852H6.856z"
    />
    <circle cx={11.227} cy={7.483} r={1.727} stroke="#fff" strokeWidth={0.512} />
  </svg>
);
export default SvgProfileImage;
