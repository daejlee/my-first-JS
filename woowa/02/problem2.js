/*
REQUIRED FEATURES
1. receive cryptogram and parse, if it violates the restrictions then return NULL.
2. delete duplicated characters reversely, and return
*/

function problem2(cryptogram)
{
	let i = 0;
	while (cryptogram[i])
	{
		if (cryptogram[i] > 'z' || cryptogram[i++] < 'a')
			return (null);
	}
	console.log(cryptogram);
}
