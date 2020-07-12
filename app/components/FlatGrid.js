import React from 'react';
import { View, StyleSheet } from 'react-native';

function FlatGrid({ data, numColumns, style, renderComponent }) {
	let id = 0;

	const grid = [];
	let itemsInGrid = [];

	data.forEach((value, index) => {
		itemsInGrid.push(value);

		if ((index + 1) % numColumns === 0) {
			grid.push(itemsInGrid);
			itemsInGrid = [];
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

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default FlatGrid;
