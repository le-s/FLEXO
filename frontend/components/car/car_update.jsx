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

  componentDidMount() {
    const carId = this.props.match.params.id;
    this.props.fetchCar(carId);
    window.scrollTo(0, 0);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .editCar(car)
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
        <div/>
      </>
    );
  }
}

export default CarUpdate;