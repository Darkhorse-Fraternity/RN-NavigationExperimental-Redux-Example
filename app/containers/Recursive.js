import { connect } from 'react-redux'

import RecursiveScreen from '../components/RecursiveScreen'
import { navigatePush } from '../actions'


const mapStateToProps = (state) => {
	return {	
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onButtonPress: () => {
			dispatch(navigatePush('Recursive'))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RecursiveScreen)
