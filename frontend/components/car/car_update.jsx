import React from 'react';

class CarUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.car;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  updateBox(field) {
    return e => {
      this.setState({
        [field]: e.target.checked
      });
    };
  }

  componentDidMount() {
    const carId = this.props.match.params.id;
    this.props.fetchCar(carId);
    window.scrollTo(0, 0);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editCar(this.state)
      .then(data => this.props.history.push(`/cars/${data.car.id}`));
  }

  render() {
    return (
      <>
        <div>
          <div className="create-header">
            <div className="create-header-container">
              <div className="create-form-align">
                <div className="header-text">Edit your car</div>
              </div>
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
                      <input
                        className="create-input-field"
                        type="text"
                        value={this.state.address}
                        placeholder="Address"
                        onChange={this.update("address")}
                      />
                    </label>

                    <br />

                    <label>
                      City
                      <br />
                      <input
                        className="create-input-field"
                        type="text"
                        value={this.state.city}
                        placeholder="City"
                        onChange={this.update("city")}
                      />
                    </label>

                    <br />

                    <label>
                      State
                      <br />
                      <input
                        className="create-input-field"
                        type="text"
                        value={this.state.state}
                        placeholder="State"
                        onChange={this.update("state")}
                      />
                    </label>

                    <br />

                    <label>
                      Zip Code
                      <br />
                      <input
                        className="create-input-field"
                        type="text"
                        value={this.state.zipcode}
                        placeholder="Zip Code"
                        onChange={this.update("zipcode")}
                      />
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
                      <input
                        className="create-input-field"
                        type="text"
                        value={this.state.year}
                        onChange={this.update("year")}
                        placeholder="Year"
                      />
                    </label>

                    <br />

                    <label>
                      Make
                      <br />
                      <input
                        className="create-input-field"
                        type="text"
                        value={this.state.make}
                        onChange={this.update("make")}
                        placeholder="Make"
                      />
                    </label>

                    <br />

                    <label>
                      Model
                      <br />
                      <input
                        className="create-input-field"
                        type="text"
                        value={this.state.model}
                        onChange={this.update("model")}
                        placeholder="Model"
                      />
                    </label>
                  </div>
                  <div className="location-flex">
                    <label>
                      MPG
                      <br />
                      <input
                        className="create-input-field"
                        type="text"
                        value={this.state.mpg}
                        onChange={this.update("mpg")}
                        placeholder="MPG"
                      />
                    </label>

                    <br />

                    <label>
                      Number of Doors
                      <br />
                      <input
                        className="create-input-field"
                        type="text"
                        value={this.state.numDoors}
                        onChange={this.update("numDoors")}
                        placeholder="Doors"
                      />
                    </label>

                    <br />

                    <label>
                      Number of Seats
                      <br />
                      <input
                        className="create-input-field"
                        type="text"
                        value={this.state.numSeats}
                        placeholder="Seats"
                        onChange={this.update("numSeats")}
                      />
                    </label>
                  </div>
                </div>

                <div className="flex-trans-fuel">
                  <div className="width-trans-fuel">
                    <label className="create-form-subheading">
                      <div>Fuel Type</div>
                      <div>
                        <input
                          className="fuel-input-field"
                          type="text"
                          value={this.state.fuelType}
                          onChange={this.update("fuelType")}
                          placeholder="Fuel Type"
                        />
                      </div>
                    </label>
                  </div>

                  <div className="width-trans-fuel">
                    <label className="create-form-subheading">
                      <div>Transmission</div>
                      <div className="transmission-flex">
                        <div>
                          <input
                            className="styled-radio"
                            type="radio"
                            name="automaticTrans"
                            checked={this.state.automaticTrans}
                            onChange={this.update("automaticTrans")}
                          />{" "}
                          Automatic
                        </div>
                        <div>
                          <input
                            className="styled-radio radio-margin-left"
                            type="radio"
                            name="automaticTrans"
                            checked={!this.state.automaticTrans}
                            onChange={this.update("automaticTrans")}
                          />{" "}
                          Manual
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="create-form-heading">Car Details</div>
                <div className="create-form-subheading">
                  <label>
                    Price
                    <br />
                    <input
                      className="price-input-field"
                      type="text"
                      value={this.state.price}
                      placeholder="Price"
                      onChange={this.update("price")}
                    />
                  </label>
                </div>
                <div>
                  <label className="create-form-subheading">
                    <div>Car description</div>
                    <textarea
                      className="create-textarea"
                      placeholder="A detailed description will get you more trips"
                      value={this.state.description}
                      onChange={this.update("description")}
                    />
                  </label>
                </div>

                <div>
                  <label className="create-form-subheading">
                    <div>Car features</div>
                    <div className="create-feature-wrap">
                      <div>
                        <input type="checkbox" className="dummy" />
                      </div>
                      <div className="feature-sizing">
                        <input
                          type="checkbox"
                          checked={this.state.bluetooth}
                          onChange={this.updateBox("bluetooth")}
                        />{" "}
                        Bluetooth
                      </div>
                      <div className="feature-sizing">
                        <input
                          type="checkbox"
                          checked={this.state.gps}
                          onChange={this.updateBox("gps")}
                        />{" "}
                        GPS
                      </div>
                      <div className="feature-sizing">
                        <input
                          type="checkbox"
                          checked={this.state.auxiliaryInput}
                          onChange={this.updateBox("auxiliaryInput")}
                        />{" "}
                        Auxiliary input
                      </div>
                      <div className="feature-sizing">
                        <input
                          type="checkbox"
                          checked={this.state.heatedSeats}
                          onChange={this.updateBox("heatedSeats")}
                        />{" "}
                        Heated seats
                      </div>
                      <div className="feature-sizing">
                        <input
                          type="checkbox"
                          checked={this.state.usbPorts}
                          onChange={this.updateBox("usbPorts")}
                        />{" "}
                        USB ports
                      </div>
                      <div className="feature-sizing">
                        <input
                          type="checkbox"
                          checked={this.state.backupCamera}
                          onChange={this.updateBox("backupCamera")}
                        />{" "}
                        Backup camera
                      </div>
                    </div>
                  </label>
                </div>

                <div>
                  <label className="create-form-subheading">
                    <div>Car modifications</div>
                    <textarea
                      className="create-textarea"
                      placeholder="The more mods you have the more fun it'll be"
                      value={this.state.mods}
                      onChange={this.update("mods")}
                    />
                  </label>
                </div>

                <br />

                <input
                  type="file"
                  onChange={e => this.setState({ photos: e.target.files })}
                  multiple
                />

                <br />

                <input className="button-purple" type="submit" value="Finish" />
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CarUpdate;