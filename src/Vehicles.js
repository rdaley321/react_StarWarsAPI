import React, {Component} from 'react';
import './Vehicles.css'

export default class Vehicles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vehicles: []
    }
  }
  componentWillMount() {
    console.log("componentWillMount")
  }
  componentDidMount() {
    console.log("componentDidMount")
    fetch("http://swapi.co/api/vehicles/").then(r => r.json()).then(json => {
      this.setState({vehicles: json.results})
    })
  }
  componentWillUnmount() {
    console.log("componentWillUnmount")

  }

  render() {
    return (
      <div className="main">
        <div className="vehicle-main">
          {this.state.vehicles.map((vehicle) => {
            return <div className="vehicle" key={vehicle.url}>
              <div className="vehicle-title">
                <h3>Vehicle: {vehicle.name}</h3>
                <h4 className="model">Model: {vehicle.model}</h4>
                <div className="vehicle-content">
                  <h3 className="specs">Specs</h3>
                  <hr></hr>
                  <h4>Manufacturer: {vehicle.manufacturer}</h4>
                  <hr></hr>
                  <h4>Class: {vehicle.vehicle_class}</h4>
                  <hr></hr>
                  <h4>Passengers: {vehicle.passengers}</h4>
                  <hr></hr>
                  <h4>Crew: {vehicle.crew}</h4>
                  <hr></hr>
                  <h4>Length: {vehicle.length}</h4>
                  <hr></hr>
                  <h4>Max Speed: {vehicle.max_atmosphering_speed}</h4>
                  <hr></hr>
                  <h4>Cargo Capacity: {vehicle.cargo_capacity}</h4>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    )
  }
}
