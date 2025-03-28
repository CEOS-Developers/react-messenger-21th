import { useState } from 'react';
import ListTitle from './ListTitle';
import UserItem from './UserItem';
import data from '@/data/users.json';
import { useNavigate } from 'react-router-dom';

const ListSection = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();

  const toggleSection = (group: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [group]: !(prev[group] ?? true),
    }));
  };

  return (
    <div className="flex flex-col">
      {data.map((section, idx) => {
        const isGroup = section.group === '내 그룹';
        const items = isGroup ? section.groups : section.users;
        const isOpen = openSections[section.group] ?? true;

        if (!items) return null;
        const count = items.length;

        return (
          <div key={idx}>
            <ListTitle
              title={section.group}
              count={count}
              isOpen={isOpen}
              onClick={() => toggleSection(section.group)}
            />
            {isOpen && (
              <div className="flex flex-col">
                {isGroup
                  ? section.groups?.map((group) => (
                      <UserItem
                        key={group.id}
                        name={group.groupName}
                        profileImg={group.profileImg}
                        count={group.memberCount}
                        onClick={() =>
                          navigate('/profile', {
                            state: {
                              username: group.groupName,
                              profileImg: group.profileImg,
                              backgroundImg: group.backgroundImg,
                              comment: group.comment || '',
                              isMine: false,
                            },
                          })
                        }
                      />
                    ))
                  : section.users?.map((user) => (
                      <UserItem
                        key={user.id}
                        name={user.name}
                        profileImg={user.profileImg}
                        onClick={() =>
                          navigate('/profile', {
                            state: {
                              username: user.name,
                              profileImg: user.profileImg,
                              backgroundImg: user.backgroundImg,
                              comment: user.comment || '',
                              isMine: false,
                            },
                          })
                        }
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
