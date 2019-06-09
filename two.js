/*
	Since all we need to do is find one occurence of a subarray with 0 sum, we don't need to store all occurences and we
	can break out once we find the first occurence.

	The best way to think about this problem is to visualize a graph where the y value is the sum of all preceeding items.

	For instance: [2, -1, 3, -2, 1]
	Will yield:

								#
								#		#
						#		#	#	#
						#	#	#	#	#
						__________
	x-val			1	2	3	4	5
	Looking at the graph we can see that the delta (change in value) of 0 is given using the elements [-1, 3, -2].

	In other words: starting at x value 1 where the sum (y value) is 2, if we add -1, 3, and -2, we will get the sum
	(y value) of 2 again. So the sub array [-1, 3, -2] produces the net change of 0 (zero sum).
*/

function findZeroSum(items)
{
	let sum = 0	// running sum of all seen items through traversal
	let graph = new Map()	// graph that keeps track of sums and their index - key is y axis (sum) and value is x axis
	graph[0] = -1	// graph starts at a sum of 0 with and index of -1 (not in array of items)

	/*
		Iterates through all values of array.
		Keeps a total of all the sums.
		Notes the sum and the index that gave the sum in graph variable.
		If a key was already put into the graph, then we know that sum was seen before and we found our zero sum.
	*/
	for (let ind = 0; ind < items.length; ind++)
	{
		let item = items[ind]
		if (item === 0)	return [0]
		sum += item

		if (!(sum in graph))	graph[sum] = ind
		else 	return items.slice(graph[sum] + 1, ind + 1)
	}

	return []
}

let items = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2]
zeroSum = findZeroSum(items)
console.log(zeroSum)