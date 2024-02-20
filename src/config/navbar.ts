import { PATH_ADMIN } from '@/routes/paths';
import DashboardImage from '@/assets/images/dashboard/dashboard.svg';
import InvitationImage from '@/assets/images/dashboard/invitation.svg';
import AdminImage from '@/assets/images/dashboard/admin.svg';

export type NavListProps = {
  title: string;
  path: string;
  icon?: string;
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
    subheader: `GENERAL`,
    items: [
      {
        title: `dashboard`,
        path: PATH_ADMIN.root,
        icon: ICONS.dashboard,
      },
      {
        title: `invitation`,
        path: PATH_ADMIN.invitation,
        icon: ICONS.invitation,
      },
      {
        title: `admin`,
        path: PATH_ADMIN.admin,
        icon: ICONS.admin,
      },
    ],
  },
];

export default navbar;
