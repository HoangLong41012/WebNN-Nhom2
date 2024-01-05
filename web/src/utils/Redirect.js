export const _handleDirect = ({ router, destination, query }) => {
  if (destination) {
    router.push({
      pathname: destination,
      query,
    });
  }
};

export const handleDirectToSmartDevice = (router) => {
  _handleDirect({
    router,
    destination: '/smartDevice',
  });
};

export const handleDirectToCpu = (router, query) => {
  _handleDirect({
    router,
    destination: '/cpu',
    query,
  });
};