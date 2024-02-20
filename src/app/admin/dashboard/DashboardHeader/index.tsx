import React from 'react';

type Props = {
  isCollapse: boolean;
};

const DashboardHeader = (isCollapse: Props) => {
  return (
    <header
      className={`fixed z-10 top-0 right-0 flex justify-between items-center h-80px bg-white bg-opacity-90 transition-all p-5 
        ${isCollapse ? `w-[calc(100%-88px]` : `w-[calc(100%-280px]`}
      `}
    >
      header
    </header>
  );
};

export default DashboardHeader;
