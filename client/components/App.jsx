import React from 'react'
import { connect } from 'react-redux'

import { getCoords } from '../actions/coords'
import { gimmePic, addPic } from '../actions/pic'
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
    this.refreshCoords = this.refreshCoords.bind(this)
  }

  componentDidMount () { this.tickTock(coordCount); this.initMap() }

  tickTock (count) {
    this.props.dispatch(getCoords())
    setTimeout(() => this.tickTock(count + 1), 2000)
  }

  componentDidUpdate () {
    // console.log('coord no. ', this.props.coords.length)
    this.renderLine()
  }

  renderLine () {
    const { coords } = this.props
    const { lat, lng } = coords[coords.length - 1]
    // const colour = coords.length % 3 === 0 ? coords.length % 2 === 0 ? 'green' : 'red' : 'yellow'
    // percent > 33 ? percent > 66 ? "is-success" : "is-warning" : "is-danger"
    if (this.iss) this.iss.setMap(null)
    this.iss = new google.maps.Marker({
      position: { lat, lng }
    })
    this.iss.setMap(this.map)

    const line = new google.maps.Polyline({
      path: coords,
      geodesic: true,
      strokeColor: 'red',
      strokeOpacity: 1.0,
      strokeWeight: 2
    })
    line.setMap(this.map)
  }

  initMap () {
    console.log('lol')
    if (!this.props.coords[0]) return setTimeout(this.initMap, 50)
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
      this.refreshPosition(14.692778, -17.446667)
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
        this.props.dispatch(gimmePic(timezone_id))
      } else {
        this.props.dispatch(addPic('/images/dopefish_lives.gif'))
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
        <div className="columns" style={buffer}></div>
        <div className="columns">
          <div className="column is-1"></div>
          <div className='map' ref='map' style={style}></div>
          <div className="column card">
            <button className="button" onClick={this.refreshCoords}>MORE INFO:</button>
            <ul className="has-text-left">
              <li><h2>Lat: {lat}</h2></li>
              <li><h2>Lng: {lng}</h2></li>
              <li><h3>{errMessage}</h3></li>
              <li><h3>{location}</h3></li>
            </ul>
            <img src={ this.props.pic } />
          </div>
          <div className="column is-1"></div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    coords: state.coords,
    pic: state.pic
  }
}

export default connect(mapStateToProps)(App)
