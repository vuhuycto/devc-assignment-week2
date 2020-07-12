import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import colors from '../config/colors';
import PropTypes from 'prop-types';

function IconButton({
	name,
	externalStyle,
	backgroundColor = 'primary',
	color = 'white',
	size = 17,
}) {
	return (
		<TouchableOpacity
			style={[
				styles.button,
				{ backgroundColor: colors[backgroundColor] },
				externalStyle,
			]}
		>
			<Feather
				name={name}
				style={[styles.icon, { color: colors[color] }]}
				size={size}
			/>
		</TouchableOpacity>
	);
}

IconButton.propTypes = {
	backgroundColor: PropTypes.oneOf([
		'primary',
		'secondary',
		'tertiary',
		'grey',
		'white',
		'black',
	]),
	color: PropTypes.oneOf([
		'primary',
		'secondary',
		'tertiary',
		'grey',
		'white',
		'black',
	]),
	externalStyle: PropTypes.object,
	size: PropTypes.number,
};

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
