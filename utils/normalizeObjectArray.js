/**
 *  Given an array of objects, each with identical property names but different
 *  values, combines them into one object with each property name associated
 *  with an array of the given objects' values.
 * 
 *  ### Example:
 * 
 *  ```
 *  const data = [{ a: 1, b: 'a' }, { a: 2, b: 'b' }]
 *  console.log(normalizeObjectArray(data)) // { a: [1, 2], b: ['a', 'b'] }
 *  ```
 * 
 *  If passed an empty array, this will return an empty array. It's already
 *  squashed.
 * 
 *  @param {any[]} list The list of objects to normalize.
 * 
 *  @returns {any}
 */
export default list =>
	doesContainItems(list)
		? getSquashedItems(list)
		: getEmptyObject()

const doesContainItems = list => 1 <= list.length

const getSquashedItems = list =>
	getListPropertyNames(list)
		.map(toSquashedPropertyArrayObjects(list))
		.reduce(toSquashedObjects)

const getListPropertyNames = list => Object.keys(list[0])

const toSquashedPropertyArrayObjects = list => name => ({
	[name]: list
		.map(toPropertyValue(name))
		.reduce(toSquashedPropertyValues, [])
})

const toPropertyValue = name => item => item[name]

const toSquashedPropertyValues = (x, y) => x.concat([y])

const toSquashedObjects = (x, y) => Object.assign({}, x, y)

const getEmptyObject = () => ({})
