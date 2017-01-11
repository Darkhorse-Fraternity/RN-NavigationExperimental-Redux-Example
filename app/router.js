import React from 'react'
import First from './containers/First'
import Second from './containers/Second'
import Third from './containers/Third'
import Modal from './containers/Modal'
import Recursive from './containers/Recursive'

export default function Router(props) {
  const { route } = props
  const [key, routeUUID] = route.key.split('%')

  switch(key) {
    case 'First':
      return <First />
    case 'Second':
      return <Second />
    case 'Third':
      return <Third />
    case 'Modal':
      return <Modal />
    case 'Recursive':
      return <Recursive routeUUID={routeUUID} />
  }
}
