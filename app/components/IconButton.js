import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import colors from '../config/colors';

function IconButton({ name, color = 'primary' }) {
	return (
		<TouchableOpacity
			style={[styles.button, { backgroundColor: colors[color] }]}
		>
			<Feather name={name} style={styles.icon} size={17} />
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
	icon: {
		color: colors.white,
	},
});

export default IconButton;
