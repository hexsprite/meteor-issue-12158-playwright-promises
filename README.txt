Run repo in Node - WORKS!:

$ meteor node server/testPW.js

Run repo in Node with Meteor Promise implementation (no fibers) - WORKS!:

$ METEOR_PROMISE=1 meteor node server/testPW.js

Run repo in Node with Meteor Promise implementation with Fibers - BROKEN:

$ METEOR_PROMISE=1 METEOR_PROMISE_FIBERS=1 meteor node server/testPW.js

Run same code in Meteor - BROKEN:

$ meteor
