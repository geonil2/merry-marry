'use client';

import { useState } from 'react';

import { useCollapseDrawer } from '@/hooks/common';
import DashboardHeader from '@/app/admin/dashboard/DashboardHeader';
import Navbar from '@/app/admin/dashboard/Navbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isCollapse, collapseClick } = useCollapseDrawer();
  const [open, setOpen] = useState(false);

  const onCloseSidebar = () => setOpen(false);

  return (
    <div className="flex">
      <DashboardHeader isCollapse={isCollapse} />
      <Navbar isOpenSidebar={open} onCloseSidebar={onCloseSidebar} />

      <div
        className={`grow lg:transition-all lg:px-4 py-[88px] lg:w-[calc(100%-280px)] lg:py-[106px] ${
          isCollapse ? `lg:ml-[88px]` : ``
        }`}
      >
        {children}
      </div>
    </div>
  );
}
