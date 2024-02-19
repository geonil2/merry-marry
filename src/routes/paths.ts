function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_ADMIN = `/auth`;
const ROOTS_DASHBOARD = `/dashboard`;

export const PATH_ADMIN = {
  root: ROOTS_ADMIN,
  signin: path(ROOTS_ADMIN, `/signin`),
  signup: path(ROOTS_ADMIN, `/signup`),
  resetPassword: path(ROOTS_ADMIN, `/reset-password`),
  newPassword: path(ROOTS_ADMIN, `/new-password`),
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  invitation: path(ROOTS_DASHBOARD, `/invitation`),
  admin: path(ROOTS_DASHBOARD, `/admin`),
};
