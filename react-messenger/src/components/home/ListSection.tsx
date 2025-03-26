import { useState } from 'react';
import ListTitle from './ListTitle';
import UserItem from './UserItem';
import data from '@/data/users.json';

const ListSection = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

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
                        key={`${group.groupName}-${group.memberCount}`}
                        name={group.groupName}
                        profileImg={group.profileImg}
                        count={group.memberCount}
                      />
                    ))
                  : section.users?.map((user) => (
                      <UserItem key={`${user.name}-${user.profileImg}`} name={user.name} profileImg={user.profileImg} />
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
