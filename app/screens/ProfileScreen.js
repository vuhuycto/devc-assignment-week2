import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';

import colors from '../config/colors';
import Screen from './Screen';
import TextButton from '../components/TextButton';
import IconButton from '../components/IconButton';
import FlatGrid from '../components/FlatGrid';
import convert from './../utils/millionUnitShorcut';
import profile from './../config/fakeData';

function ProfileScreen() {
	return (
		<Screen>
			<View style={styles.navigation}>
				<IconButton
					name='chevron-left'
					size={25}
					backgroundColor='white'
					color='black'
					externalStyle={styles.navigationBtn}
				/>
				<IconButton
					name='grid'
					size={25}
					backgroundColor='white'
					color='black'
					externalStyle={styles.navigationBtn}
				/>
			</View>
			<ScrollView>
				<View style={styles.header}>
					<Image
						source={require('./../assets/avatar.jpg')}
						style={styles.avatar}
						resizeMode='cover'
					/>
					<View style={styles.about}>
						<View>
							<Text style={styles.extraBoldText}>{profile.name}</Text>
							<Text style={styles.greyText}>{profile.job}</Text>
						</View>
						<View style={styles.cta}>
							<TextButton title='Follow' />
							<IconButton name='send' backgroundColor='tertiary' />
						</View>
					</View>
				</View>
				<FlatGrid
					data={profile.statistics}
					style={styles.statistics}
					numColumns={3}
					renderComponent={(data) => (
						<View key={data.name} style={styles.data}>
							<Text style={styles.boldText}>{convert(data.value)}</Text>
							<Text style={styles.greyText}>{data.name}</Text>
						</View>
					)}
				/>
				<FlatGrid
					data={profile.images}
					numColumns={2}
					renderComponent={(image) => (
						<Image key={image.id} source={image.url} style={styles.image} />
					)}
				/>
			</ScrollView>
		</Screen>
	);
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		paddingTop: 20,
	},
	navigation: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	navigationBtn: {
		paddingVertical: 15,
		paddingHorizontal: 15,
	},
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 50,
	},
	about: {
		justifyContent: 'space-between',
		alignItems: 'flex-start',
	},
	cta: {
		flexDirection: 'row',
		marginTop: 15,
	},
	extraBoldText: {
		fontSize: 24,
		fontWeight: '700',
	},
	boldText: {
		fontSize: 24,
		fontWeight: '500',
	},
	greyText: {
		color: colors.grey,
	},
	statistics: {
		marginVertical: 35,
	},
	data: {
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 20,
	},
	image: {
		borderRadius: 25,
		width: 150,
		height: 150,
		marginHorizontal: 10,
		marginBottom: 10,
	},
});

export default ProfileScreen;
