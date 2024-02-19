import React, { useState } from 'react';
import { NavListProps, NavProps } from '@/config/navbar';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import ArrowLeftIcon from '@/assets/images/common/arrow-left.svg';
import ArrowBottomIcon from '@/assets/images/common/arrow-bottom.svg';

interface NavListRootProps {
  data: NavListProps;
  depth: number;
  hasChildren: boolean;
  isCollapse?: boolean;
}

const NavSection: React.FC<NavProps> = ({ navConfig, isCollapse }) => {
  return (
    <ul className={`relative m-0 ${isCollapse ? `p-0` : `py-0 px-2`}`}>
      {navConfig.map(({ subheader, items }) => (
        <li
          className="sticky top-0 z-[1] rounded-lg text-sm font-bold leading-normal	text-gray_950"
          key={subheader}
        >
          <p
            className={`transition-all pt-6 pb-2 pl-4 
              ${isCollapse ? `opacity-0` : `opacity-100`}
            `}
          >
            {subheader}
          </p>

          {items.map((list) => (
            <NavList
              key={list.title + list.path}
              data={list}
              depth={1}
              hasChildren={!!list.children}
              isCollapse={isCollapse}
            />
          ))}
        </li>
      ))}
    </ul>
  );
};

function getActive(path: string, pathname: string) {
  const checkPath = path.startsWith(`#`);

  return !checkPath && pathname.includes(path);
}

const NavList: React.FC<NavListRootProps> = ({
  data,
  depth,
  hasChildren,
  isCollapse = false,
}) => {
  const pathname = usePathname();
  const { push } = useRouter();

  const active = getActive(data.path, pathname);
  const [open, setOpen] = useState(active);

  const handleClickItem = () => {
    if (!hasChildren) {
      push(data.path);
    }
    setOpen(!open);
  };

  return (
    <>
      <Link href={data.path}>
        <div
          style={{ paddingLeft: depth && depth > 2 ? `${8 * depth}px` : `` }}
          className={`flex items-center font-semibold rounded-lg transition-all mb-1 cursor-pointer hover:bg-gray_50 
            ${isCollapse ? `justify-center p-0` : `justify-start py-2 px-3`} 
            ${active ? `text-main` : `text-gray_950`}
            ${depth === 1 ? `h-12` : `h-10`}
            `}
          onClick={handleClickItem}
        >
          {depth !== 1 && (
            <div className="flex justify-center items-center w-8 h-8">
              <span
                className={`w-1 h-1 rounded-[50%] bg-gray_950 transition-all 
                  ${active && `scale-[2] bg-main`}
                `}
              />
            </div>
          )}

          {data.icon && (
            <div className="relative w-5 h-5">
              <Image src={data.icon} alt="Nav icon" fill />
            </div>
          )}

          <div
            className={`transition-all ${isCollapse ? `w-0 ml-0` : `ml-2.5`}`}
          >
            <p
              className={`flex-[1_1_auto] transition-all 
                ${isCollapse ? `opacity-0` : `opacity-100`}
              `}
            >
              {data.title}
            </p>
          </div>

          {/* NOTE: sub page accordion nav 추가 개발 예정 */}
          {hasChildren && (
            <div className="relative w-4 h-4 ml-2">
              <Image
                src={open ? ArrowLeftIcon : ArrowBottomIcon}
                alt="Accordion nav arrow icon"
                fill
              />
            </div>
          )}
        </div>
      </Link>

      {/* NOTE: sub page accordion nav 추가 개발 예정 */}
      {!isCollapse && hasChildren && (
        // <Collapse in={open}>
        <NavSubList data={data.children} depth={depth} />
        // </Collapse>
      )}
    </>
  );
};

interface NavListSubProps {
  data: NavListProps[];
  depth: number;
}

const NavSubList: React.FC<NavListSubProps> = ({ data, depth }) => {
  return (
    <>
      {data.map((list) => (
        <NavList
          key={list.title + list.path}
          data={list}
          depth={depth + 1}
          hasChildren={!!list.children}
        />
      ))}
    </>
  );
};

export default NavSection;
