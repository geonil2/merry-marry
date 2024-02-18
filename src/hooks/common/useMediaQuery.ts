import React, { useEffect, useState, useSyncExternalStore } from 'react';

type Media = 'mobile' | 'tablet' | 'desktop';

const mediaQueries = {
  mobile: `@media not all and (min-width: 768px)`, // NOTE: max-md
  tablet: `@media (min-width: 768px)`, // NOTE: md
  desktop: `@media (min-width: 1024px)`, // NOTE: lg
};

const useMediaQuery = (media: Media): boolean => {
  const [supportMatchMedia, setSupportMatchMedia] = useState(false);
  const defaultMatches = false;
  const matchMedia = supportMatchMedia ? window.matchMedia : null;
  let query = mediaQueries[media] ?? ``;

  const getDefaultSnapshot = React.useCallback(
    () => defaultMatches,
    [defaultMatches],
  );

  query = query.replace(/^@media( ?)/m, ``);

  const getServerSnapshot = React.useMemo(() => {
    if (matchMedia) {
      return () => matchMedia!(query).matches;
    }

    return getDefaultSnapshot;
  }, [getDefaultSnapshot, query, matchMedia]);

  const [getSnapshot, subscribe] = React.useMemo(() => {
    if (matchMedia === null) {
      return [getDefaultSnapshot, () => () => {}];
    }

    const mediaQueryList = matchMedia(query);

    return [
      () => mediaQueryList.matches,
      (notify: () => void) => {
        // TODO: Use `addEventListener` once support for Safari < 14 is dropped
        mediaQueryList.addListener(notify);
        return () => {
          mediaQueryList.removeListener(notify);
        };
      },
    ];
  }, [getDefaultSnapshot, matchMedia, query]);

  const match = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // NOTE: Hydration issue
  useEffect(() => {
    setSupportMatchMedia(
      typeof window !== `undefined` && typeof window.matchMedia !== `undefined`,
    );
  }, []);

  return match;
};

export default useMediaQuery;
