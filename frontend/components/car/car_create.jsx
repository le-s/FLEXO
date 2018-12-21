import React from 'react';
import {Link} from 'react-router-dom';

class CarCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.formFields;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value,
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    
    formData.append('car[ownerId]', this.state.ownerId);
    formData.append('car[make]', this.state.make);
    formData.append('car[model]', this.state.model);
    formData.append('car[year]', this.state.year);
    formData.append('car[price]', this.state.price);
    formData.append('car[description]', this.state.description);
    formData.append('car[mpg]', this.state.mpg);
    formData.append('car[fuelType]', this.state.fuelType);
    formData.append('car[numDoors]', this.state.numDoors);
    formData.append('car[numSeats]', this.state.numSeats);
    formData.append('car[bluetooth]', this.state.bluetooth);
    formData.append('car[auxiliaryInput]', this.state.auxiliaryInput);
    formData.append('car[heatedSeats]', this.state.heatedSeats);
    formData.append('car[gps]', this.state.gps);
    formData.append('car[automaticTrans]', this.state.automaticTrans);
    formData.append('car[usbPorts]', this.state.usbPorts);
    formData.append('car[backupCamera]', this.state.backupCamera);
    formData.append('car[mods]', this.state.mods);
    formData.append('car[address]', this.state.address);
    formData.append('car[city]', this.state.city);
    formData.append('car[state]', this.state.state);
    formData.append('car[zipcode]', this.state.zipcode);
    formData.append('car[longitude]', this.state.longitude);
    formData.append('car[latitude]', this.state.latitude);

    for (let i = 0; i < this.state.photos.length; i++) {
      formData.append('car[photos][]', this.state.photos[i]);
    }

    this.props.createCar(formData).then(() => this.props.history.push(`/cars`));
  }

  render() {
    console.log(this.state);
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

                  <div className="flex-trans-fuel">
                    <div className="width-trans-fuel">
                      <label className="create-form-subheading">
                        <div>Fuel Type</div>
                        <div>
                          <input className="fuel-input-field" type="text" value={this.state.fuelType} onChange={this.update("fuelType")} placeholder="Fuel Type"/>
                        </div>
                      </label>
                    </div>

                    <div className="width-trans-fuel">
                      <label className="create-form-subheading">
                        <div>Transmission</div>
                        <div className="transmission-flex">
                          <div>
                            <input className="styled-radio" type="radio" name="automaticTrans" value="true" onChange={this.update("automaticTrans")} /> Automatic
                          </div>
                          <div>
                            <input className="styled-radio radio-margin-left" type="radio" name="automaticTrans" value="false" onChange={this.update("automaticTrans")}/> Manual
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
                      <input className="price-input-field" type="text" value={this.state.price} placeholder="Price" onChange={this.update("price")} />
                    </label>
                  </div>
                  <div>
                    <label className="create-form-subheading">
                      <div>Car description</div>
                      <textarea className="create-textarea" placeholder="A detailed description will get you more trips" value={this.state.description} onChange={this.update("description")}/>
                    </label>
                  </div>

                  <div>
                    <label className="create-form-subheading">
                      <div>Car features</div>
                      <div className="create-feature-wrap">
                        <div>
                          <input type="checkbox" className="dummy"/>
                        </div>
                        <div className="feature-sizing">
                          <input type="checkbox" value="true" onChange={this.update("bluetooth")}/> Bluetooth
                        </div>
                        <div className="feature-sizing">
                          <input type="checkbox" value="true" onChange={this.update("gps")}/> GPS
                        </div>
                        <div className="feature-sizing">
                          <input type="checkbox" value="true" onChange={this.update("auxiliaryInput")}/> Auxiliary input
                        </div>
                        <div className="feature-sizing">
                          <input type="checkbox" value="true" onChange={this.update("heatedSeats")}/> Heated seats
                        </div>
                        <div className="feature-sizing">
                          <input type="checkbox" value="true" onChange={this.update("usbPorts")}/> USB ports
                        </div>
                        <div className="feature-sizing">
                          <input type="checkbox" value="true" onChange={this.update("backupCamera")}/> Backup camera
                        </div>
                      </div>
                    </label>
                  </div>

                  <div>
                    <label className="create-form-subheading">
                      <div>Car modifications</div>
                      <textarea className="create-textarea" placeholder="The more mods you have the more fun it'll be" value={this.props.mods} onChange={this.update("mods")}/>
                    </label>
                  </div>

                  <br/>

                  <input type="file" onChange={e => this.setState({ photos: e.target.files })} multiple/>

                  <br/>

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