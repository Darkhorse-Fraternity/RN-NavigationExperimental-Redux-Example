import { connect } from 'react-redux'

import RecursiveScreen from '../components/RecursiveScreen'
import { navigatePush, addToRecursiveLookupTable } from '../actions'
import uuid from 'react-native-uuid'


const mapStateToProps = (state) => {
	console.log('mapStateToProps', state)
	return {
		recursiveLookupTable: state.recursiveState.recursiveLookupTable
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onButtonPress: () => {
			dispatch(navigatePush(`Recursive%${uuid.v4()}`))
		},
		onLoad: (id) => {
			dispatch(addToRecursiveLookupTable(id))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RecursiveScreen)
