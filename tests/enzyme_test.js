import React from 'react'
import { shallow } from 'enzyme'

import App from '../client/components/App'

test('<App />', t => {
  const expected = 'ISS Tracker'
  const wrapper = shallow(<App />)
  t.equal(wrapper.text(), expected)
  t.end()
})
