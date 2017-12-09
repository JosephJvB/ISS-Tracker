import React from 'react'
import { connect } from 'react-redux'

import { getCoords } from '../actions/coords'
import { gimmePic, addPic } from '../actions/pic'
import { getLatLng, getPosition } from '../apiClient.js'
import { transform } from '../utils'
// import bigCoords from '../../server/coordLog/rekt.json'

const style = { height: '400px', width: '60%' }
const coordCount = 1

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      lat: null,
      lng: null,
      location: null,
      errMessage: null,
      picExists: false,
      city: null
    }
    this.initMap = this.initMap.bind(this)
    this.tickTock = this.tickTock.bind(this)
    this.renderLine = this.renderLine.bind(this)
    this.getNewCoords = this.getNewCoords.bind(this)
  }

  componentDidMount () { this.tickTock(coordCount); this.initMap() }

  componentDidUpdate () { this.renderLine() }

  tickTock (count) {
    this.props.dispatch(getCoords())
    setTimeout(() => this.tickTock(count + 1), 3000)
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
    if (!this.props.coords.length) return setTimeout(this.initMap, 50)
    const { lat, lng } = this.props.coords[0]
    console.log(lat, lng)
    this.map = new window.google.maps.Map(this.refs.map, {
      center: { lat, lng },
      zoom: 2,
      fullscreenControl: false
    })
  }

  getNewCoords () {
    getLatLng((err, d) => {
      if (!err) {
        this.setState({
          lat: d.latitude,
          lng: d.longitude,
          picExists: false
        })
      }
      this.getLocInfo(d.latitude, d.longitude)
    })
  }
  getLocInfo (lat, lng) {
    getPosition(lat, lng, (err, data) => {
      if (!err) {
        const { timezone_id } = data
        const city = transform(timezone_id)
        this.setState({
          city,
          location: timezone_id,
          errMessage: null
        })
        this.props.dispatch(gimmePic(city))
        this.setState({picExists: true})
      } else {
        this.props.dispatch(addPic('/images/dopefish_lives.gif'))
        this.setState({
          errMessage: 'Location not specified. (only coordinates on land are supported)',
          location: null,
          picExists: false
        })
      }
    })
  }

  render () {
    let { lat, lng, location, errMessage, picExists, city } = this.state
    const buffer = { height: '40px' }
    return (
      <section className="section has-text-centered">
        <div className="columns">
          <img src="/images/sCarmenL.png" /><h1 className="title is-1 has-text-justified">ISS Tracker</h1><img src="/images/sCarmenR.png" />
        </div>
        <hr />
        <div className="columns" style={buffer}></div>
        <div className="columns">
          <div className="column is-1"></div>
          <div className='map' ref='map' style={style}></div>
          <div className="column card">
            <button className="button" onClick={this.getNewCoords}>MORE INFO:</button>
            <ul className="has-text-left">
              <li><h2 id="lat">Lat: {lat}</h2></li>
              <li><h2 id="lng">Lng: {lng}</h2></li>
              <li><h3 id="err">{errMessage}</h3></li>
              <li><h3 id="loc">{location}</h3></li>
            </ul>
            {picExists ? <a href={`https://en.wikipedia.org/wiki/${city}`}> <img id="wiki" className="pic" src={`https://${this.props.pic}`} /> </a> : <img id="fish" className="pic" src={this.props.pic} />}
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
