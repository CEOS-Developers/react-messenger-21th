interface AppBarProps {
  title: string;
  type: 'white' | 'gradient';
  subtitle?: string;
  leftIcon?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  rightIcon?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  onLeftClick?: () => void;
  onRightClick?: () => void;
  onTitleClick?: () => void;
  className?: string;
}

const AppBar = ({
  title,
  type,
  subtitle,
  leftIcon,
  rightIcon,
  onLeftClick,
  onRightClick,
  onTitleClick,
}: AppBarProps) => {
  return (
    <div
      className={`fixed top-0 flex h-11 w-screen items-center border-b px-5 py-2.5 ${
        type === 'white'
          ? 'border-b-gray-100 bg-white text-black'
          : 'text-white [background:var(--Green-gradient,linear-gradient(0deg,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.10)_100%),linear-gradient(90deg,#5AE587_0%,#16BBC5_100%))]'
      }`}
    >
      <div className="relative flex w-full items-center self-stretch">
        {/* 왼쪽 아이콘 */}
        <div
          className="absolute top-1/2 left-0 -translate-x-0 -translate-y-1/2"
          onClick={onLeftClick}
        >
          {leftIcon}
        </div>

        {/* 가운데 타이틀 */}
        <div
          onClick={onTitleClick}
          className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
        >
          <span className="cursor-pointer text-center text-base leading-[140%] font-semibold">
            {title}
          </span>
          {subtitle && (
            <span className="-mt-1 text-xs font-normal tracking-[0.06px]">
              {subtitle}
            </span>
          )}
        </div>

        {/* 오른쪽 아이콘 */}
        <div onClick={onRightClick}>{rightIcon}</div>
      </div>
    </div>
  );
};

export default AppBar;
