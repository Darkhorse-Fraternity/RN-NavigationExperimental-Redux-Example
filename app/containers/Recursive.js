import { connect } from 'react-redux'

import RecursiveScreen from '../components/RecursiveScreen'
import { navigatePush } from '../actions'
import uuid from 'react-native-uuid'


const mapStateToProps = (state) => {
	return {	
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onButtonPress: () => {
			dispatch(navigatePush(`Recursive%${uuid.v4()}`))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RecursiveScreen)
