const processOverrides = require('./processOverrides')

describe('processOverrides function', () => {
    let o1, o2, result

    beforeEach(()=> {
         o1 = {'1': 2, 'a': {'3': 4}, 'patchable': ['a.3']}
         o2 = {'a': {3: 100}}
         result = {'1': 2, 'a': {'3': 100}}
    })

        test('should return obj as result', () => {
            expect(processOverrides(o1, o2)).toStrictEqual(result)
        })
        test('should result be without patchable property', () => {
            expect(processOverrides(o1, o2)).not.toHaveProperty('patchable')
        })
    }
)

