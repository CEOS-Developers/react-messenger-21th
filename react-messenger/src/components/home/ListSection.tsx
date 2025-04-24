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
      [key]: !(prev[key] ?? true),
    }));
  };

  const sections = [
    {
      title: '새 친구',
      key: 'newFriends',
      items: data.newFriends,
      isGroup: false,
      isMine: false,
    },
    {
      title: '내 그룹',
      key: 'groups',
      items: data.groups,
      isGroup: true,
      isMine: false,
    },
    {
      title: '내 친구',
      key: 'friends',
      items: data.friends,
      isGroup: false,
      isMine: false,
    },
  ];

  return (
    <div className="flex flex-col">
      {sections.map((section) => {
        const isOpen = openSections[section.key] ?? true;
        const count = section.items.length;

        return (
          <div key={section.key}>
            <ListTitle title={section.title} count={count} isOpen={isOpen} onClick={() => toggleSection(section.key)} />
            {isOpen && (
              <div className="flex flex-col">
                {section.isGroup
                  ? (section.items as Group[]).map((group) => (
                      <UserItem
                        key={group.id}
                        name={group.groupName}
                        profileImg={group.profileImg}
                        count={group.memberCount}
                        onClick={() => navigate(`/profile/${group.id}?type=group`)}
                      />
                    ))
                  : (section.items as User[]).map((user) => (
                      <UserItem
                        key={user.id}
                        name={user.name}
                        profileImg={user.profileImg}
                        onClick={() => navigate(`/profile/${user.id}?type=user`)}
                      />
                    ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ListSection;
