import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

function FlatGrid({ data, numColumns, style, renderComponent }) {
	if (!data) return null;

	let id = 0;

	const grid = [];
	let rowData = [];

	data.forEach((value, index) => {
		rowData.push(value);

		if ((index + 1) % numColumns === 0) {
			grid.push(rowData);
			rowData = [];
		}
	});

	return (
		<View style={[styles.grid, style]}>
			{grid.map((rowData) => (
				<View key={id++} style={styles.row}>
					{rowData.map((item) => renderComponent(item))}
				</View>
			))}
		</View>
	);
}

FlatGrid.propTypes = {
	data: PropTypes.array,
	numColumns: PropTypes.number,
	style: PropTypes.object,
	renderComponent: PropTypes.func,
};

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default FlatGrid;
