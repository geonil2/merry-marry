import { PATH_DASHBOARD } from '@/routes/paths';
import DashboardImage from '@/assets/images/dashboard/dashboard.svg';
import CompanyImage from '@/assets/images/dashboard/company.svg';
import DeveloperImage from '@/assets/images/dashboard/developer.svg';
import ProjectImage from '@/assets/images/dashboard/project.svg';

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
  company: CompanyImage,
  developer: DeveloperImage,
  project: ProjectImage,
};

const navbar = [
  {
    subheader: `general`,
    items: [
      { title: `dashboard`, path: PATH_DASHBOARD.app, icon: ICONS.dashboard },
      {
        title: `company`,
        path: PATH_DASHBOARD.company,
        icon: ICONS.company,
      },
      {
        title: `developer`,
        path: PATH_DASHBOARD.developer,
        icon: ICONS.developer,
      },
      {
        title: `project`,
        path: PATH_DASHBOARD.project,
        icon: ICONS.project,
      },
    ],
  },
];

export default navbar;
