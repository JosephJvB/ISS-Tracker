import React from 'react'
import { connect } from 'react-redux'

import { addCoords } from '../actions/coords'
import { getLatLng, getPosition } from '../apiClient.js'

// import coordList from '../../server/coordLog/rekt.json'

const style = { height: '300px', width: '40%' }

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      lat: null,
      lng: null,
      data: null,
      location: null,
      mapUrl: null,
      errMessage: null
    }
    this.initMap = this.initMap.bind(this)
  }

  // componentDidMount () { console.log(coordList) }

  refreshCoords () {
    getLatLng((err, data) => {
      if (!err) {
        this.setState({
          lat: data.latitude,
          lng: data.longitude,
          data
        })
      }
      this.initMap(data.latitude, data.longitude)
      this.props.dispatch(addCoords(data.latitude, data.longitude))
      this.refreshPosition(data.latitude, data.longitude)
    })
  }
  refreshPosition (lat, lng) {
    getPosition(lat, lng, (err, data) => {
      if (!err) {
        const { timezone_id, mapUrl } = data
        this.setState({
          location: timezone_id,
          mapUrl,
          errMessage: null
        })
      } else {
        this.setState({ errMessage: err.response.body.error })
      }
    })
  }

  initMap (lat, lng) {
    this.map = new window.google.maps.Map(this.refs.map, {
      center: { lat, lng },
      zoom: 2,
      fullscreenControl: false
    })
    const iss = new google.maps.Marker({
      position: { lat, lng },
      map: this.map
    })
  }

  render () {
    const { lat, lng, location, errMessage, mapUrl } = this.state
    return (
      <div>
        <h1>International Space Station</h1>
        <h1>{errMessage}</h1>
        <button onClick={this.refreshCoords.bind(this)}>WHERE IS THE SATELITE</button>
        <h2>Lat: {lat} Lng: {lng}</h2>
        <h3>{location}</h3>
        <a href={mapUrl}>Show me the map</a>
        <div className='map' ref='map' style={style}></div>
      </div>
    )
  }
}

// wont need this till polyline, only writing code to store coords not use them yet

// const mapStateToProps = (state) => {
//   return {
//     coords: state.coords
//   }
// }

// but i do want to connect so I can use dispatch ;)
export default connect()(App)
