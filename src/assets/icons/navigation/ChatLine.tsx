import type { SVGProps } from 'react';
const SvgChatLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="#000"
      d="m16.477 17.662.305-.458a.55.55 0 0 0-.305-.092zm4.502 3.002.305-.458zM2.771 5.824c0-1.118.906-2.024 2.023-2.024V2.7a3.124 3.124 0 0 0-3.123 3.124zm0 9.264V5.824h-1.1v9.264zm2.023 2.024a2.024 2.024 0 0 1-2.023-2.024h-1.1a3.124 3.124 0 0 0 3.123 3.124zm11.683 0H4.794v1.1h11.683zm4.807 3.094-4.502-3.002-.61.915 4.502 3.002zm-.036-.002a.04.04 0 0 1 .036.002l-.61.915c.327.218.747.238 1.093.053zm-.018.031q0-.021.018-.03l.52.969c.345-.185.561-.546.561-.939zm0-14.411v14.411h1.1V5.824zM19.206 3.8c1.118 0 2.024.906 2.024 2.024h1.1A3.123 3.123 0 0 0 19.206 2.7zm-14.412 0h14.412V2.7H4.794z"
    />
    <path
      fill="#000"
      fillRule="evenodd"
      d="M6.853 9.941a.515.515 0 1 0 0 1.03.515.515 0 0 0 0-1.03m-1.544.515a1.544 1.544 0 1 1 3.088 0 1.544 1.544 0 0 1-3.088 0M12 9.941a.515.515 0 1 0 0 1.03.515.515 0 0 0 0-1.03m-1.544.515a1.544 1.544 0 1 1 3.088 0 1.544 1.544 0 0 1-3.088 0M17.147 9.941a.515.515 0 1 0 0 1.03.515.515 0 0 0 0-1.03m-1.544.515a1.544 1.544 0 1 1 3.088 0 1.544 1.544 0 0 1-3.088 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChatLine;
