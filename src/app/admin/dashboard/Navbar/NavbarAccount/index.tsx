'use client';

import React from 'react';
import Image from 'next/image';

import { useAuth } from '@/hooks/queries';
import DefaultUserImage from '@/assets/images/auth/default_user.png';

interface Props {
  isCollapse: boolean | undefined;
}

const NavbarAccount: React.FC<Props> = ({ isCollapse }) => {
  const { user } = useAuth();

  return (
    <div
      className={`flex  items-center rounded-xl transition-all mt-6 p-4 ${
        isCollapse
          ? `justify-center bg-transparent px-0`
          : `justify-start bg-gray_100`
      }`}
    >
      <div className="relative w-10 h-10 rounded-[50%] overflow-hidden select-none">
        <Image src={DefaultUserImage} alt="Default user" fill />
      </div>

      <div
        className={`w-[calc(100%-56px)] transition-all ${
          isCollapse ? `w-0 ml-0` : `ml-4`
        }`}
      >
        <p className="text-sm	font-semibold leading-normal ellipsis">
          {user?.email}
        </p>
        <p className="text-sm leading-normal text-gray_500 ellipsis">
          {user?.name}
        </p>
      </div>
    </div>
  );
};

export default NavbarAccount;
