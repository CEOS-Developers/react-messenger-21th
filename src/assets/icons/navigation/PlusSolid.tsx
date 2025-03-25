import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPlusSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <circle cx={12} cy={12} r={9.5} fill="#000" />
    <circle cx={12} cy={16.956} r={1.239} fill="#fff" transform="rotate(-90 12 16.956)" />
    <path fill="#fff" d="M12 10.76a1.24 1.24 0 1 1 0 2.48 1.24 1.24 0 0 1 0-2.48" />
    <circle cx={12} cy={7.044} r={1.239} fill="#fff" transform="rotate(-90 12 7.044)" />
  </svg>
);
export default SvgPlusSolid;
