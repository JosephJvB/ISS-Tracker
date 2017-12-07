import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import { store } from '../../client/store'
import App from '../../client/components/App'

test('<App />', t => {
  const expected = 'ISS Tracker'
  const wrapper = mount(<Provider store={store} >
    <App />
  </Provider >)
  expect(wrapper.text().toBe(expected))
})
