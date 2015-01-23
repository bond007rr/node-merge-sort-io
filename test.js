"use strict";

var mergeSort = require('./index.js');

var test = module.exports = {};

test['sorting [11,7,5,2,4,6,1,3] ascending should result in [1,2,3,4,5,6,7,11]'] = function (test) {
    test.expect(1);
    test.deepEqual(mergeSort([11,7,5,2,4,6,1,3]), [1,2,3,4,5,6,7,11]);
    test.done();
};