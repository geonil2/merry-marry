'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { useCollapseDrawer, useMediaQuery } from '@/hooks/common';
import navbar from '@/config/navbar';
// import Favicon from '@/assets/images/common/favicon.svg';

import CollapseButton from './CollapseButton';
import NavbarAccount from './NavbarAccount';
import NavSection from './NavSection';

interface Props {
  isOpenSidebar: boolean;
  onCloseSidebar: VoidFunction;
}

const Navbar: React.FC<Props> = ({ isOpenSidebar, onCloseSidebar }) => {
  const pathname = usePathname();
  const isDesktop = useMediaQuery(`desktop`);
  const {
    isCollapse,
    collapseClick,
    onToggleCollapse,
    onHoverEnter,
    onHoverLeave,
  } = useCollapseDrawer();

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
  }, [isOpenSidebar, onCloseSidebar, pathname]);

  return (
    <div
      className={`flex flex-col min-h-screen overflow-y-auto bg-gray_50 bg-opacity-80 backdrop-blur border-r-[1px] border-dashed border-gray_200 duration-300 transition-all pt-6 pb-4 px-5 ${
        collapseClick && `absolute z-10`
      } ${isCollapse ? `w-[88px]` : `w-[280px]`}`}
      onMouseEnter={onHoverEnter}
      onMouseLeave={onHoverLeave}
    >
      <div
        className={`flex items-center ${
          isCollapse ? `justify-center` : `justify-between`
        }`}
      >
        <div className="relative w-[44.25px] h-[30.75px]">
          {/* TODO : 디자인 작업 후 추가 */}
          {/* <Image src={Favicon} alt="Merry-Merry logo" fill /> */}
          Merry-Logo
        </div>

        {isDesktop && !isCollapse && (
          <CollapseButton
            onToggleCollapse={onToggleCollapse}
            collapseClick={collapseClick}
          />
        )}
      </div>

      <NavbarAccount isCollapse={isCollapse} />

      <NavSection navConfig={navbar} isCollapse={isCollapse} />
    </div>
  );
};

export default Navbar;
