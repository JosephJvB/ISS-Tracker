import React from 'react'

import {getLatLng, getPosition} from '../apiClient.js'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      lat: null,
      lng: null,
      data: null,
      location: null,
      map_url: null,
      errMessage: null
    }
  }

  refreshCoords () {
    getLatLng((err, data) => {
      if (!err) this.setState({lat: data.latitude, lng: data.longitude, data})
      this.refreshPosition(data.latitude, data.longitude)
    })
  }
  refreshPosition (lat, lng) {
    // const {lat, lng} = this.state
    getPosition(lat, lng, (err, data) => {
      if (!err) {
        const {timezone_id, map_url} = data
        this.setState({location: timezone_id, map_url, errMessage: null})
      } else {
        this.setState({ errMessage: err.response.body.error })
      }
    })
  }
  render () {
    const {lat, lng, location, errMessage, map_url} = this.state
    return (
      <div>
        <h1>International Space Station</h1>
        <h1>{errMessage}</h1>
        <button onClick={this.refreshCoords.bind(this)}>WHERE IS THE SATELITE</button>
        <h2>Lat: {lat} Lng: {lng}</h2>
        <h3>{location}</h3>
        <a href={map_url}>Show me the map</a>
      </div>
    )
  }
}
