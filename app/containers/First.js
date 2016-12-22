import { connect } from 'react-redux'

import FirstScreen from '../components/FirstScreen'
import { navigatePush } from '../actions'
import uuid from 'react-native-uuid'


const mapStateToProps = (state) => {
	return {	
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onButtonPress: () => {
			dispatch(navigatePush('Second'))
		},
		onButtonPress2: () => {
			dispatch(navigatePush(`Recursive%${uuid.v4()}`))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FirstScreen)
