import React from 'react';

class CarCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.formFields;
  
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const car = Object.assign({}, this.state);
    this.props.createCar(car);
  }

  render() {
    return (
      <>
        <div>
          <div className="create-header">
            <div className="create-header-container">
              <div className="create-form-align">
                <div className="header-text">List your car</div>
              </div>
            </div>
          </div>
          <div className="create-form-container">
            <div className="create-form-align">
              <div className="create-form-parent-style">
                <form onSubmit={this.handleSubmit}>
                  <div className="create-form-heading">Your Car</div>
                  <div className="create-form-subheading">
                    Where is the car located?
                    <br />
                    <div className="location-flex">
                      <label>
                        Address
                        <br />
                        <input className="create-input-field" type="text" value={this.state.address} placeholder="Address" onChange={this.update("address")} />
                      </label>

                      <br />

                      <label>
                        City
                        <br />
                        <input className="create-input-field" type="text" value={this.state.city} placeholder="City" onChange={this.update("city")} />
                      </label>

                      <br />

                      <label>
                        State
                        <br />
                        <input className="create-input-field" type="text" value={this.state.state} placeholder="State" onChange={this.update("state")} />
                      </label>

                      <br />

                      <label>
                        Zip Code
                        <br />
                        <input className="create-input-field" type="text" value={this.state.zipcode} placeholder="Zip Code" onChange={this.update("zipcode")} />
                      </label>
                    </div>
                  </div>

                  <div className="create-form-subheading">
                    What car do you have?
                    <br />
                    <div className="location-flex">
                      <label>
                        Year
                        <br />
                        <input className="create-input-field" type="text" value={this.state.year} placeholder="Year" onChange={this.update("year")} />
                      </label>

                      <br />

                      <label>
                        Make
                        <br />
                        <input className="create-input-field" type="text" value={this.state.make} placeholder="Make" onChange={this.update("make")} />
                      </label>

                      <br />

                      <label>
                        Model
                        <br />
                        <input className="create-input-field" type="text" value={this.state.model} placeholder="Model" onChange={this.update("model")} />
                      </label>
                    </div>

                    <div className="location-flex">
                      <label>
                        MPG
                        <br />
                        <input className="create-input-field" type="text" value={this.state.mpg} placeholder="MPG" onChange={this.update("mpg")} />
                      </label>

                      <br />

                      <label>
                        Number of Doors
                        <br />
                        <input className="create-input-field" type="text" value={this.state.numDoors} placeholder="Doors" onChange={this.update("numDoors")} />
                      </label>

                      <br />

                      <label>
                        Number of Seats
                        <br />
                        <input className="create-input-field" type="text" value={this.state.numSeats} placeholder="Seats" onChange={this.update("numSeats")} />
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="create-form-subheading">
                      <div>Transmission</div>
                      <div className="transmission-flex">
                        <div>
                          <input className="styled-radio" type="radio" name="transmission"/> Automatic
                        </div>
                        <div>
                          <input className="styled-radio radio-margin-left" type="radio" name="transmission"/> Manual
                        </div>
                      </div>
                    </label>
                  </div>

                  <div className="create-form-heading">
                    Car Details
                  </div>
                  <div className="create-form-subheading">
                    <label>
                      Price
                      <br />
                      <input className="price-input-field" type="text" value={this.state.price} placeholder="Price" onChange={this.update("price")} />
                    </label>
                  </div>
                  <div>
                    <label className="create-form-subheading">
                      <div>Car description</div>
                      <input className="create-textarea" type="textarea" placeholder="A detailed description will get you more trips"/>
                    </label>
                  </div>

                  <div>
                    <label className="create-form-subheading">
                      <div>Car features</div>
                      <div className="create-feature-wrap">
                        <div className="feature-sizing">
                          <input type="checkbox"/> Bluetooth
                        </div>
                        <div className="feature-sizing">
                          <input type="checkbox"/> GPS
                        </div>
                        <div className="feature-sizing">
                          <input type="checkbox"/> Auxiliary input
                        </div>
                        <div className="feature-sizing">
                          <input type="checkbox"/> Heated seats
                        </div>
                        <div className="feature-sizing">
                          <input type="checkbox"/> USB ports
                        </div>
                        <div className="feature-sizing">
                          <input type="checkbox"/> Backup camera
                        </div>
                      </div>
                    </label>
                  </div>

                  <div>
                    <label className="create-form-subheading">
                      <div>Car modifications</div>
                      <input className="create-textarea" type="textarea" placeholder="The more mods you have the more fun it'll be" />
                    </label>
                  </div>

                  <input className="button-purple" type="submit" value="Finish" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CarCreate;