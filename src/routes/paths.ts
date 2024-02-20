function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_ADMIN = `/admin`;
const ROOTS_DASHBOARD = `/dashboard`;

export const PATH_ADMIN = {
  root: ROOTS_ADMIN,
  dashboard: path(ROOTS_ADMIN, `/dashboard`),
  invitation: path(ROOTS_ADMIN, `/invitation`),
  admin: path(ROOTS_ADMIN, `/admin`),
};
//
// export const PATH_DASHBOARD = {
//   root: ROOTS_DASHBOARD,
//   invitation: path(ROOTS_DASHBOARD, `/invitation`),
//   admin: path(ROOTS_DASHBOARD, `/admin`),
// };
