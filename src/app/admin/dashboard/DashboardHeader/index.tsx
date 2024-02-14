import React from 'react';
import { HEADER, NAVBAR } from '@/config/constant';

type Props = {
  isCollapse: boolean;
};

const DashboardHeader = (isCollapse: Props) => {
  return (
    <header
      className={`fixed z-10 top-0 right-0 flex justify-between items-center bg-white bg-opacity-90 transition-all p-5 ${
        isCollapse
          ? `w-[calc(100% - ${NAVBAR.DASHBOARD_COLLAPSE_WIDTH})]`
          : `w-[calc(100% - ${NAVBAR.DASHBOARD_WIDTH})]`
      } h-${HEADER.MAIN_DESKTOP_HEIGHT}px`}
    >
      header
    </header>
  );
};

export default DashboardHeader;
