'use strict';

// had enabled by egg
// exports.static = true;
module.exports = {
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
};
