import React, {PropTypes} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import NavButton from './NavButton'

const ThirdScreen = React.createClass({
	PropTypes: {
		onButtonPress: PropTypes.func.isRequired
	},

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Third Screen</Text>

				<NavButton destLabel="Home" buttonHandler={this.props.onButtonPress} />
			</View>
		)
	}
})

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#79BD8F',
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		fontSize: 24,
		fontWeight: '500',
		color: '#ffffff',
		marginBottom: 30
	}
})

export default ThirdScreen
