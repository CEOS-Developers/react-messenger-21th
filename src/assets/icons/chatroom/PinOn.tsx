import type { SVGProps } from 'react';
const SvgPinOn = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="#6DE67B"
      stroke="#000"
      strokeWidth={1.1}
      d="M15.637 1.934a.45.45 0 0 1 .597.036l5.797 5.797a.45.45 0 0 1 .035.596l-7.822 9.933a.45.45 0 0 1-.672.04l-7.908-7.908a.45.45 0 0 1 .04-.672z"
    />
    <path fill="#000" d="M4.09 19.132a.55.55 0 1 0 .778.778zm5.146-5.146L4.09 19.132l.778.778 5.146-5.146z" />
  </svg>
);
export default SvgPinOn;
