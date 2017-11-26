import React from 'react'
import { connect } from 'react-redux'

import { addCoords, getCoords } from '../actions/coords'
import { getLatLng, getPosition } from '../apiClient.js'

const style = { height: '400px', width: '60%' }
const coordCount = 1

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      lat: null,
      lng: null,
      data: null,
      location: null,
      errMessage: null
    }
    this.initMap = this.initMap.bind(this)
    this.tickTock = this.tickTock.bind(this)
    this.renderLine = this.renderLine.bind(this)
    this.zoomIn = this.zoomIn.bind(this)
  }

  componentDidMount () { this.tickTock(coordCount); setTimeout(this.initMap, 500) }

  tickTock (count) {
    this.props.dispatch(getCoords())
    setTimeout(() => this.tickTock(count + 1), 2000)
  }

  componentDidUpdate () {
    console.log('coord no. ', this.props.coords.length)
    this.renderLine()
  }

  renderLine () {
    const { coords } = this.props
    const { lat, lng } = coords[coords.length - 1]
    if (this.iss) this.iss.setMap(null)
    this.iss = new google.maps.Marker({
      position: { lat, lng }
    })
    this.iss.setMap(this.map)

    const line = new google.maps.Polyline({
      path: coords,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 1.5
    })
    line.setMap(this.map)
  }

  initMap () {
    const { lat, lng } = this.props.coords[0]
    this.map = new window.google.maps.Map(this.refs.map, {
      center: { lat, lng },
      zoom: 2,
      fullscreenControl: false
    })
  }

  zoomIn () {
    this.map.setZoom(7)
    this.map.setCenter(this.iss.getPosition())
  }

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
        const { timezone_id } = data
        this.setState({
          location: timezone_id,
          errMessage: null
        })
      } else {
        this.setState({ errMessage: 'Location not specified. (only coordinates on land are supported)' })
      }
    })
  }

  render () {
    const { lat, lng, location, errMessage } = this.state
    const buffer = { height: '40px' }
    return (
      <section className="section has-text-centered">
        <h1 className="title is-1">ISS Tracker</h1>
        <hr />
        <button className="button" onClick={this.refreshCoords.bind(this)}>WHERE IS THE SATELITE</button>
        <h2>Lat: {lat} Lng: {lng}</h2>
        <h3>{errMessage}</h3>
        <h3>{location}</h3>
        <div className ="columns" style={buffer}></div>
        <div className="columns">
          <div className="column"></div>
          <div className='map' ref='map' style={style}></div>
          <div className="column"></div>
        </div>
      </section>
    )
  }
}

// wont need this till polyline, only writing code to store coords not use them yet

const mapStateToProps = (state) => {
  return {
    coords: state.coords
  }
}

// but i do want to connect so I can use dispatch ;)
export default connect(mapStateToProps)(App)
