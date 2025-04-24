import UpArrow from '@/assets/svgs/home/UpArrow.svg?url';

type ListTitleProps = {
  title: string;
  count?: number | string;
  isOpen: boolean;
  onClick: () => void;
};

const ListTitle = ({ title, count, isOpen, onClick }: ListTitleProps) => {
  return (
    <div className="w-full flex items-center justify-between bg-grey-50 pb-1 p-4 cursor-pointer" onClick={onClick}>
      <div className="flex gap-2">
        <span className="body-1 text-grey-900">{title}</span>
        {count !== undefined && <span className="body-1 text-grey-400">{count}</span>}
      </div>
      <img src={UpArrow} alt="toggle" className={`w-[24px] h-[24px] ${!isOpen ? 'rotate-180' : ''}`} />
    </div>
  );
};

export default ListTitle;
