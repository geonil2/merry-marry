export interface Invitation {
  id: string;
  weddingHouse: string;
  weddingHouseAddress: string;
  bus: string | null;
  subway: string | null;
  description: string;
  date: Date | string;
  groom: string;
  groomMother: string | null;
  groomFather: string | null;
  groomBank: string | null;
  groomMotherBank: string | null;
  groomFatherBank: string | null;
  groomAccount: string | null;
  groomMotherAccount: string | null;
  groomFatherAccount: string | null;
  bridge: string;
  bridgeMother: string | null;
  bridgeFather: string | null;
  bridgeBank: string | null;
  bridgeMotherBank: string | null;
  bridgeFatherBank: string | null;
  bridgeAccount: string | null;
  bridgeMotherAccount: string | null;
  bridgeFatherAccount: string | null;
  createdAt: Date | string;
}

export interface Meta {
  id: string;
  invitationId: string;
  title: string;
  ogUrl: string;
  ogTitle: string;
  ogImage: string;
  ogDescription: string;
}
