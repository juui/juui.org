'use strict';

const config = {
  redis: {
    expiration: {
      authClient: 3600 * 12 * 2 // 1 day, (1000 * 60 * 60 * 24) * 30   // 30 days
    },
    hashContainers: {
      authClient: 'authSession:client',
      authAdmin: 'authSession:admin'
    }
  }
};

module.exports = config;
