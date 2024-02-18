import { PATH_DASHBOARD } from '@/routes/paths';
import DashboardImage from '@/assets/images/dashboard/dashboard.svg';
import InvitationImage from '@/assets/images/dashboard/invitation.svg';
import AdminImage from '@/assets/images/dashboard/admin.svg';

export type NavListProps = {
  title: string;
  path: string;
  icon?: string; // NOTE: 확인 필요
  disabled?: boolean;
  children?: any;
};

export interface NavProps {
  isCollapse: boolean;
  navConfig: {
    subheader: string;
    items: NavListProps[];
  }[];
}

const ICONS = {
  dashboard: DashboardImage,
  invitation: InvitationImage,
  admin: AdminImage,
};

const navbar = [
  {
    subheader: `general`,
    items: [
      { title: `dashboard`, path: PATH_DASHBOARD.app, icon: ICONS.dashboard },
      {
        title: `invitation`,
        path: PATH_DASHBOARD.company,
        icon: ICONS.invitation,
      },
      {
        title: `admin`,
        path: PATH_DASHBOARD.developer,
        icon: ICONS.admin,
      },
    ],
  },
];

export default navbar;
