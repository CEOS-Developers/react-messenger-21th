import type { SVGProps } from 'react';
const SvgVideo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 32 32" {...props}>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M4.962 7.33A1.96 1.96 0 0 0 3 9.29V22.71c0 1.083.878 1.961 1.962 1.961h13.22a1.96 1.96 0 0 0 1.96-1.961v-3.372l5.907 3.45c1.308.763 2.951-.18 2.951-1.694V10.907c0-1.514-1.643-2.457-2.95-1.694l-5.907 3.45V9.29A1.96 1.96 0 0 0 18.18 7.33z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgVideo;
