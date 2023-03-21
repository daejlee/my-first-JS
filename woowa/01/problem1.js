/*
REQUIRED FEATURES
1. making random 2x2 index table for pobi crong
	index range 1 ~ 400 (1, 2 ~ 399, 400) and get max num for each pair and save
2. print output format as directed
*/

const problem1 = {
	pobi: {},
	crong: {},
	res: 0
}

function get_res(pobi, crong)
{
	const res = [];
	for (i = 0; i < 3; i++)
	{
		if (get_max(pobi[i][0]) > get_max(crong[i][0]))
			res.push(1);
		else if (get_max(pobi[i][0]) === get_max(crong[i][0]))
			res.push(0);
		else
			res.push(2);
	}
	return (res);
}

function get_max(idx)
{
	if (idx * 2 + 1 > idx * (idx + 1))
		return (idx * 2 + 1);
	else
		return (idx * (idx + 1));
}

function make_table()
{
	let idx;
	let max;
	const table = []; // doesn't work -> Object.freeze later.
	for (i = 0; i < 3; i++)
	{
		idx = Math.floor(Math.random() * 399);
		table.push([idx, idx + 1]);
	}
	return (table);
}

problem1.pobi = make_table();
problem1.crong = make_table();
problem1.res = get_res(problem1.pobi, problem1.crong);
console.log(problem1);