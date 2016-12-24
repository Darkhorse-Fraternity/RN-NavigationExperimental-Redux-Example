import { connect } from 'react-redux'

import RecursiveScreen from '../components/RecursiveScreen'
import { navigatePush, addToRecursiveLookupTable } from '../actions'
import uuid from 'react-native-uuid'


const mapStateToProps = (state, ownProps) => {
	// console.log('mapStateToProps', state)
	// console.log('ownProps:', ownProps)
	return {
		recursiveLookupTable: state.recursiveState.getIn(['recursiveLookupTable', ownProps.routeUUID])
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
