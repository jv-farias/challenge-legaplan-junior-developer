import * as React from "react";
import { SVGProps } from "react";
const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="#0796D3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15 4.5-8.25 8.25L3 9"
    />
  </svg>
);
export default CheckIcon;
