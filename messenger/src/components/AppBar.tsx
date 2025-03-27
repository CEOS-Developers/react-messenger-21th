import { ReactNode } from "react";

interface AppBarProps {
  title: string;
  type: "white" | "gradient";
  subtitle?: string;
  leftIcon?: any;
  rightIcon?: any;
  gradient?: boolean;
  onLeftClick?: () => void;
  onRightClick?: () => void;
  className?: string;
}

const AppBar = ({
  title,
  type,
  subtitle,
  leftIcon,
  rightIcon,
}: AppBarProps) => {
  //아래 보더 안 함
  return (
    <div //type에 따라서 폰트 색상 inherit 할 수 있도록 parent 요소에서 폰트 색상 지정
      className={`flex h-11 w-screen items-center border-b px-5 py-2.5 ${type === "white" ? "border-b-gray-100 bg-white text-black" : "text-white [background:var(--Green-gradient,linear-gradient(0deg,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.10)_100%),linear-gradient(90deg,#5AE587_0%,#16BBC5_100%))]"}`}
    >
      <div className="relative flex w-full items-center self-stretch">
        <div className="absolute top-1/2 left-0 -translate-x-0 -translate-y-1/2">
          {leftIcon}
        </div>

        <div
          className={`absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center`}
        >
          <span
            className={`text-center text-base leading-[140%] font-semibold`}
          >
            {title}
          </span>
          {subtitle && (
            <span className="-mt-1 text-xs font-normal tracking-[0.06px]">
              {subtitle}
            </span>
          )}
        </div>
        {rightIcon}
      </div>
    </div>
  );
};

export default AppBar;
