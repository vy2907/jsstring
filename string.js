function move(array,from,to) {
	array.splice(to,0,array.splice(from,1)[0])
	return array;
}

console.log(move([10, 20, 30, 40, 50], 2, 4));




