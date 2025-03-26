import UpArrow from '@/assets/svgs/home/UpArrow.svg';

type ListTitleProps = {
  title: string;
  count?: number | string;
  isOpen: boolean;
  onClick: () => void;
};

const ListTitle = ({ title, count, isOpen, onClick }: ListTitleProps) => {
  return (
    <div className="w-full flex items-center justify-between pb-1 p-4 cursor-pointer" onClick={onClick}>
      <div className="flex gap-2">
        <span className="text-body1 text-grey-900 font-semibold">{title}</span>
        {count !== undefined && <span className="text-body1 text-grey-400 font-semibold">{count}</span>}
      </div>
      <img src={UpArrow} alt="toggle" className={`w-[24px] h-[24px] ${!isOpen ? 'rotate-180' : ''}`} />
    </div>
  );
};

export default ListTitle;
