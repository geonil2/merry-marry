import fetch from 'return-fetch';

const isServer = typeof window === `undefined`;

export const MerryInstance = fetch({
  baseUrl: `http://localhost:3000`,
  headers: {
    Accept: `application/json`,
    'Content-Type': `application/json`,
  },
  interceptors: {
    request: async (arg) => {
      if (isServer) {
        console.log(`isServer`);
      } else {
        console.log(`isClient`);
      }

      return arg;
    },
  },
});
