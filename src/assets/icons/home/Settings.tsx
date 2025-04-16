import type { SVGProps } from 'react';
const SvgSettings = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 25 24" {...props}>
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.1}
      d="M12.01 14.494a2.5 2.5 0 0 0 2.504-2.499c0-1.38-1.121-2.5-2.504-2.5a2.5 2.5 0 0 0-2.505 2.5c0 1.38 1.121 2.5 2.505 2.5"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.1}
      d="M20.313 8.368 19.31 6.637a1.5 1.5 0 0 0-2.057-.545l-.497.282a1.502 1.502 0 0 1-2.251-1.303v-.573A1.5 1.5 0 0 0 13.004 3h-2.008a1.5 1.5 0 0 0-1.5 1.498v.573a1.502 1.502 0 0 1-2.252 1.303l-.497-.282a1.51 1.51 0 0 0-2.056.545l-1.004 1.73c-.42.72-.166 1.635.546 2.053l.497.282a1.496 1.496 0 0 1 0 2.596l-.497.282a1.495 1.495 0 0 0-.546 2.052l1.004 1.731c.419.72 1.335.963 2.056.545l.497-.282a1.502 1.502 0 0 1 2.252 1.303v.573a1.5 1.5 0 0 0 1.5 1.498h2.008a1.5 1.5 0 0 0 1.5-1.498v-.573a1.502 1.502 0 0 1 2.252-1.303l.497.282a1.51 1.51 0 0 0 2.057-.545l1.003-1.73a1.504 1.504 0 0 0-.545-2.053l-.497-.282a1.496 1.496 0 0 1 0-2.596l.497-.282a1.5 1.5 0 0 0 .545-2.052"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSettings;
