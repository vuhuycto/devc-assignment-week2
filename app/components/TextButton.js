import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import colors from '../config/colors';

function TextButton({ title, color = 'primary' }) {
	return (
		<TouchableOpacity
			style={[styles.button, { backgroundColor: colors[color] }]}
		>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 25,
		paddingVertical: 5,
		marginRight: 10,
	},
	text: {
		color: colors.white,
		fontSize: 18,
		fontWeight: 'bold',
	},
});

export default TextButton;
