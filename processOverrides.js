/** We have a global configuration object with nested values with unknown structure.
 *  Also, we have a patch object with unknown structure.
 *  Write a function processOverrides(o1, o2) which takes
 *  two objects and returns new object equal to o1 patched
 *  with o2 but only for keys or key sequences given in
 *  the o1[`patchable`]. Result should not include
 *  `patchable` key/value pair itself.
 *  Cover this function with comprehensive tests.
 *  Example:
 *  processOverrides({'1': 2, 'a': {'3': 4}, 'patchable': ['a.3']}, {'a': {3: 100}})
 *  should return {'1': 2, 'a': {'3': 100}}
 */

function processOverrides(o1, o2) {
    o1.patchable
        .forEach(key => {
                key.split('.').reduce((prevVal, currVal, currIndex, array) => {
                    if (array.length - 1 === currIndex) {
                        prevVal[currVal] = key.split('.').reduce((prevValO2, currValO2) => prevValO2[currValO2], o2)
                    }
                    return prevVal[currVal]
                }, o1)
            }
        );
    delete o1.patchable
    return o1
}

module.exports = processOverrides
