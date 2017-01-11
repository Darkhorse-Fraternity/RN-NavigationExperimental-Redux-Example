'use strict'

import React, {PropTypes} from 'react'
import {
	NavigationExperimental,
	TouchableOpacity,
	Text,
	View,
	StyleSheet
} from 'react-native'
import { connect } from 'react-redux'

import Router from '../router'
import { navigatePop, navigateJumpToIndex } from '../actions'

const {
	CardStack: NavigationCardStack,
	Card: NavigationCard,
	Header: NavigationHeader
} = NavigationExperimental


class AppContainerWithCardStack extends React.Component {
	render() {
		let { navigationState, backAction, switchTab } = this.props

		const {tabs} = navigationState
		const tabKey = tabs.routes[tabs.index].key

		var scenes = this.props.navigationState[tabKey]

		return (

			// Redux is handling the reduction of our state for us. We grab the navigationState
			// we have in our Redux store and pass it directly to the <NavigationCardStack />.
			<View style={{ flex: 1 }}>
				<NavigationCardStack
					navigationState={scenes}
					onNavigateBack={backAction}
					style={styles.container}
					renderHeader={props => (
						<NavigationHeader
							{...props}
							onNavigateBack={backAction}
							renderTitleComponent={props => {
								const title = props.scene.route.title
								return <NavigationHeader.Title>{title}</NavigationHeader.Title>
							}}
							// When dealing with modals you may also want to override renderLeftComponent...
						/>
					)}
					renderScene={this._renderScene}
				/>
			<View style={ styles.tabBar }>
					<TouchableOpacity
						onPress={() => switchTab(0)}
						style={styles.tabBarButton}>
						<Text>Tab 1</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => switchTab(1)}
						style={styles.tabBarButton}>
						<Text>Tab 2</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}

	_renderScene({scene}) {
		return Router(scene)
	}

}

AppContainerWithCardStack.propTypes = {
	navigationState: PropTypes.object,
	backAction: PropTypes.func.isRequired,
	switchTab: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	tabBar: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	tabBarButton: {
		padding: 20
	}
})

export default connect(
	state => ({
		navigationState: state.navigationState.toJS()
	}),
	dispatch => ({
		backAction: () => {
			dispatch(navigatePop())
		},
		switchTab: (index) => {
			dispatch(navigateJumpToIndex(index))
		}
	})
)(AppContainerWithCardStack)
