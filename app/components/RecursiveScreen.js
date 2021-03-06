import React, {PropTypes} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import NavButton from './NavButton'

const RecursiveScreen = React.createClass({
	PropTypes: {
		routeUUID: PropTypes.string,
		onButtonPress: PropTypes.func.isRequired,
		onLoad: PropTypes.func.isRequired,
		recursiveLookupTable: PropTypes.object
	},

	render() {
		console.log(`render:                    ${this.id}`)
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Recursive Screen</Text>
				<Text style={[]}>{this.props.recursiveLookupTable}</Text>
				<NavButton destLabel="Recursive" buttonHandler={this.props.onButtonPress} />
			</View>
		)
	},
	getInitialState() {
		this.id = `RecursiveScreen%${this.props.routeUUID}`
		return null
	},
	componentWillMount() {
		console.log(`componentWillMount:        ${this.id}`)
		const [key, routeUUID] = this.id.split('%')
		this.props.onLoad(routeUUID)
	},
	componentWillReceiveProps({recursiveLookupTable}) {
		console.log(`componentWillReceiveProps: ${this.id}`)
		// console.log('recursiveLookupTable: ', this.props.recursiveLookupTable.toJS())
	},
	componentWillUpdate()       {
		console.log(`componentWillUpdate:       ${this.id}`)
		// console.log('recursiveLookupTable: ', this.props.recursiveLookupTable.toJS())
	},
	componentWillUnmount()      { console.log(`componentWillUnmount:      ${this.id}`)},
})

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F44336',
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

export default RecursiveScreen
