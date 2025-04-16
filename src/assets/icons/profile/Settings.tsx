import type { SVGProps } from 'react';
const SvgSettings = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 25 24" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.1}
      d="M12.036 14.494a2.5 2.5 0 0 0 2.505-2.499c0-1.38-1.122-2.5-2.505-2.5a2.5 2.5 0 0 0-2.505 2.5c0 1.38 1.122 2.5 2.505 2.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.1}
      d="m20.34 8.368-1.004-1.731a1.5 1.5 0 0 0-2.056-.545l-.498.282a1.502 1.502 0 0 1-2.25-1.303v-.573A1.5 1.5 0 0 0 13.03 3h-2.007a1.5 1.5 0 0 0-1.501 1.498v.573A1.502 1.502 0 0 1 7.27 6.374l-.497-.282a1.51 1.51 0 0 0-2.057.545l-1.004 1.73c-.419.72-.165 1.635.546 2.053l.497.282a1.496 1.496 0 0 1 0 2.596l-.497.282a1.495 1.495 0 0 0-.546 2.052l1.004 1.731c.42.72 1.335.963 2.057.545l.497-.282a1.502 1.502 0 0 1 2.25 1.303v.573A1.5 1.5 0 0 0 11.024 21h2.007a1.5 1.5 0 0 0 1.501-1.498v-.573a1.502 1.502 0 0 1 2.251-1.303l.498.282a1.51 1.51 0 0 0 2.056-.545l1.004-1.73c.419-.72.165-1.635-.546-2.053l-.497-.282a1.496 1.496 0 0 1 0-2.596l.497-.282a1.497 1.497 0 0 0 .546-2.052"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSettings;
