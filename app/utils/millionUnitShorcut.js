const convert = (amount) => {
	if (amount % 1000 === 0) return amount / 1000 + 'k';
	return amount;
};

export default convert;
