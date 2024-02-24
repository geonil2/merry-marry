import { MerryInstance } from '@/apis/instance';

export const getInvitationList = () =>
  MerryInstance(`/api/v1/invitations`, {
    method: `GET`,
    cache: `no-cache`,
  }).then((res) => res.json());
