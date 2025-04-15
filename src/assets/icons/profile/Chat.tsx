import type { SVGProps } from 'react';
const SvgChat = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 32 32" {...props}>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M6.941 5a3.235 3.235 0 0 0-3.235 3.235v11.647a3.235 3.235 0 0 0 3.235 3.236h14.687l5.66 3.773a.647.647 0 0 0 1.006-.538V8.235A3.235 3.235 0 0 0 25.06 5z"
      clipRule="evenodd"
    />
    <path
      fill="#8D8D8D"
      fillRule="evenodd"
      d="M9.53 13.412a.647.647 0 1 0 0 1.294.647.647 0 0 0 0-1.294m-1.942.647a1.941 1.941 0 1 1 3.883 0 1.941 1.941 0 0 1-3.883 0M16 13.412a.647.647 0 1 0 0 1.294.647.647 0 0 0 0-1.294m-1.941.647a1.941 1.941 0 1 1 3.882 0 1.941 1.941 0 0 1-3.882 0M22.471 13.412a.647.647 0 1 0 0 1.294.647.647 0 0 0 0-1.294m-1.941.647a1.941 1.941 0 1 1 3.882 0 1.941 1.941 0 0 1-3.882 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChat;
