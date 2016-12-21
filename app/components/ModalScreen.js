import React, {PropTypes} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import NavButton from './NavButton'

const id = 'ModalScreen'

const ModalScreen = React.createClass({
	PropTypes: {
		onButtonPress: PropTypes.func.isRequired
	},

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>This is a Modal Screen</Text>

				<NavButton destLabel="(POP) Second" buttonHandler={this.props.onButtonPress} />
			</View>
		)
	},

	componentWillMount()        { console.log(`componentWillMount:        ${id}`)},
	componentWillReceiveProps() { console.log(`componentWillReceiveProps: ${id}`)},
	componentWillUpdate()       { console.log(`componentWillUpdate:       ${id}`)},
	componentWillUnmount()      { console.log(`componentWillUnmount:      ${id}`)},
})

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#cea76a',
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

export default ModalScreen
