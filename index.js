"use strict";

/**
 * Sorts an array in ascending natural order using
 * merge sort.
 * @param {Array} items The array to sort.
 * @return {Array} The sorted array.
 */
var mergeSort = module.exports = function mergeSort(items){

    if (items.length < 2) {
        return items;
    }

    var middle = Math.floor(items.length / 2),
        left    = items.slice(0, middle),
        right   = items.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

/**
 * Merges to arrays in order based on their natural
 * relationship.
 * @param {Array} left The first array to merge.
 * @param {Array} right The second array to merge.
 * @return {Array} The merged array.
 */
function merge(left, right){
    var result  = [],
        iLeft   = 0,
        iRight  = 0;

    while (iLeft < left.length && iRight < right.length){
        if (left[iLeft] < right[iRight]){
            result.push(left[iLeft++]);
        } else {
            result.push(right[iRight++]);
        }
    }

    return result.concat(left.slice(iLeft)).concat(right.slice(iRight));
}