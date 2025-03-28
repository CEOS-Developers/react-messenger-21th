type UserItemProps = {
  name: string;
  profileImg: string;
  count?: number;
  onClick?: () => void;
};

const UserItem = ({ name, profileImg, count, onClick }: UserItemProps) => {
  return (
    <div className="flex items-center px-4 py-2 gap-[1px] bg-grey-50 cursor-pointer" onClick={onClick}>
      <img src={profileImg} className="w-[48px] h-[48px] rounded-full object-cover" alt={name} />
      <div className="flex px-4">
        <span className="text-label1 font-semibold">{name}</span>
        {count && <span className="text-label1 font-semibold text-grey-600">&nbsp; ({count})</span>}
      </div>
    </div>
  );
};

export default UserItem;
