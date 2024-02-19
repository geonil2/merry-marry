import { PATH_DASHBOARD } from '@/routes/paths';
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
        path: PATH_DASHBOARD.root,
        icon: ICONS.dashboard,
      },
      {
        title: `invitation`,
        path: PATH_DASHBOARD.invitation,
        icon: ICONS.invitation,
      },
      {
        title: `admin`,
        path: PATH_DASHBOARD.admin,
        icon: ICONS.admin,
      },
    ],
  },
];

export default navbar;
