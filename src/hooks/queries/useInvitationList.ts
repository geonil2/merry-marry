import { useQuery } from '@tanstack/react-query';

import { getInvitationList } from '@/apis/merryServer';
import { INVITATIONS_GET_INVITATION_LIST } from '@/query/keys';

const useInvitationList = () => {
  return useQuery({
    queryKey: [INVITATIONS_GET_INVITATION_LIST],
    queryFn: getInvitationList,
  });
};

export default useInvitationList;
