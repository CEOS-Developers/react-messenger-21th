import { useState } from 'react';
import ListTitle from './ListTitle';
import UserItem from './UserItem';
import data from '@/data/users.json';
import { useNavigate } from 'react-router-dom';
import { User, Group } from '@/type/user';

const ListSection = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const sections: {
    title: string;
    key: string;
    items: (User | Group)[];
    isGroup: boolean;
  }[] = [
    { title: '새 친구', key: 'newFriends', items: data.newFriends, isGroup: false },
    { title: '내 그룹', key: 'groups', items: data.groups, isGroup: true },
    { title: '내 친구', key: 'friends', items: data.friends, isGroup: false },
  ];

  return (
    <div className="flex flex-col">
      {sections.map(({ title, key, items }) => {
        const isOpen = openSections[key] ?? true;

        return (
          <div key={key}>
            <ListTitle title={title} count={items.length} isOpen={isOpen} onClick={() => toggleSection(key)} />
            {isOpen && (
              <div className="flex flex-col">
                {items.map((item) => {
                  const id = 'groupName' in item ? item.id : item.id;
                  const name = 'groupName' in item ? item.groupName : item.name;
                  const profileImg = item.profileImg;
                  const count = 'members' in item ? (item.members?.length ?? 0) : undefined;
                  const chatType = 'groupName' in item ? 'group' : 'user';

                  return (
                    <UserItem
                      key={id}
                      name={name}
                      profileImg={profileImg}
                      count={count}
                      onClick={() => navigate(`/profile/${id}?chatType=${chatType}`)}
                    />
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ListSection;
