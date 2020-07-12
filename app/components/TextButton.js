import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import colors from '../config/colors';

function TextButton({
	title,
	externalStyle,
	backgroundColor = 'primary',
	color = 'white',
}) {
	return (
		<TouchableOpacity
			style={[
				styles.button,
				{ backgroundColor: colors[backgroundColor] },
				externalStyle,
			]}
		>
			<Text style={[styles.text, { color: colors[color] }]}>{title}</Text>
		</TouchableOpacity>
	);
}

TextButton.propTypes = {
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
	text: {
		color: colors.white,
		fontSize: 18,
		fontWeight: 'bold',
	},
});

export default TextButton;
