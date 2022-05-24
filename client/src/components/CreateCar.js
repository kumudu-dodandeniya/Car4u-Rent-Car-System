import React, { Component } from "react";
import axios from "axios";
import { Button, InputGroup, Form, Row, Col } from "react-bootstrap";

export default class CreateCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      transmission: "",
      type: "",
      image: "",
      capacity: "",
      rateper: "",
      fuelType: "",
      rateweek: "",
      validations: {},
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });

    console.log(this.state);
  };

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.checkValidations();

    if (Object.keys(errors).length > 0) {
      // We got errors!
      this.setState({ ...this.state, validations: errors });
      return;
    }

    this.setState({ ...this.state, validations: {} });

    const {
      name,
      transmission,
      type,
      image,
      capacity,
      rateper,
      fuelType,
      rateweek,
    } = this.state;

    const data = {
      name: name,
      transmission: transmission,
      type: type,
      image: image,
      capacity: capacity,
      rateper: rateper,
      fuelType: fuelType,
      rateweek: rateweek,
    };

    axios.post("/car/save", data).then((res) => {
      if (res.data.success) {
        alert("New Vehicle Added Successfull");
        this.setState({
          name: "",
          transmission: "",
          type: "",
          image: "",
          capacity: "",
          rateper: "",
          fuelType: "",
          rateweek: "",
        });
      }
    });
  };

  checkValidations = () => {
   // const name = this.state.name;

    const {
      name,
      transmission,
      type,
      image,
      capacity,
      rateper,
      fuelType,
      rateweek,
    } = this.state;

    const errors = {};

    if (name === null || name === "") errors.name = "Please enter vehicle name";
    else if ( name.length > 20 ) errors.name = 'name is too long!'

    if (transmission === null || transmission === "") errors.transmission = "Please select vehicle transmission";

    if (type === null || type === "") errors.type = "Please enter vehicle type";

    if (image === null || image === "") errors.image = "Please enter vehicle image url";

    if ( capacity === null ||  capacity > 8 || capacity < 1) errors. capacity = "Please enter vehicle  capacity between 1 and 8";

    if (rateper === null || rateper === "") errors.rateper = "Please enter vehicle rate per day";
   // else if ( rateper.length="[0-9]*" ) errors.rateper = "Please enter numbers only"
    

    if (fuelType === null || fuelType === "") errors.fuelType = "Please select vehicle fuelType";

    if (rateweek === null || rateweek === "") errors.rateweek = "Please enter vehicle rate per week";

    return errors;
  };

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Add New Vehicle</h1>

      {/*  <Form>
          <Row>
            <Col style={{ marginBottom: "15px" }}>
              <Form.Group>
                <Form.Label style={{ marginBottom: "5px" }}>
                  Vehicle Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter Vehicle Name"
                  required
                  onChange={this.handleInputChange}
                  pattern="[a-z]{1,15}"
                  isInvalid={!!this.state.validations.name}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.validations.name}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Button type="submit" onClick={this.onSubmit}>
            Submit form
          </Button>
        </Form>*/}



        <Form className="form">
        <Row>
            <Col style={{ marginBottom: "15px" }}>
              <Form.Group>
                <Form.Label style={{ marginBottom: "5px" }}>
                  Vehicle Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter Vehicle Name"
                  required
                  onChange={this.handleInputChange}
                  pattern="[a-z]{1,15}"
                  isInvalid={!!this.state.validations.name}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.validations.name}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>


            
            <Col style={{ marginBottom: "15px" }}>
              <Form.Group>
                <Form.Label style={{ marginBottom: "5px" }}>
                Transmission
                </Form.Label>
                <Form.Control
                  as='select'
                  type="text"
                  name="transmission"
                  placeholder="Enter Transmission"
                  required
                  onChange={this.handleInputChange}
                  pattern="[a-z]"
                  isInvalid={!!this.state.validations.transmission}
                >
                  <option value=''>Select Transmission</option>
                  <option value='Auto'>Auto</option>
                  <option value='Manual'>Manual</option>

                  </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {this.state.validations.transmission}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
      </Row>


      <Row>
            <Col style={{ marginBottom: "15px" }}>
              <Form.Group>
                <Form.Label style={{ marginBottom: "5px" }}>
                Vehicle Type
                </Form.Label>
                <Form.Control
                  type="text"
                  name="type"
                  placeholder="Enter Vehicle Type"
                  required
                  onChange={this.handleInputChange}
                  pattern="[a-z]"
                  isInvalid={!!this.state.validations.type}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.validations.type}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>


            
            <Col style={{ marginBottom: "15px" }}>
              <Form.Group>
                <Form.Label style={{ marginBottom: "5px" }}>
                Image URL
                </Form.Label>
                <Form.Control
                  type="text"
                  name="image"
                  placeholder="Enter Image URL"
                  required
                  onChange={this.handleInputChange}
                  
                  isInvalid={!!this.state.validations.image}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.validations.image}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
      </Row>
           
{/*
          <div className="row">
            <div className="col" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Vehicle Type</label>
              <input
                type="text"
                className="form-control"
                name="type"
                placeholder="Enter Vehicle Type"
                value={this.state.type}
                onChange={this.handleInputChange}
                required
              ></input>
            </div>

            <div className="col" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Image URL</label>
              <input
                type="text"
                className="form-control"
                name="image"
                placeholder="Enter Vehicle Image URL"
                value={this.state.image}
                onChange={this.handleInputChange}
                required
              ></input>
            </div>
          </div>
      */}

        <Row>
            <Col style={{ marginBottom: "15px" }}>
              <Form.Group>
                <Form.Label style={{ marginBottom: "5px" }}>
                Seatting Capacity
                </Form.Label>
                <Form.Control
                  type="number"
                  name="capacity"
                  placeholder="Enter Seat Capacity"
                  required
                  onChange={this.handleInputChange}
                  size="2"
                  min="1"
                  max="10"
                  isInvalid={!!this.state.validations.capacity}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.validations.capacity}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>


            
            <Col style={{ marginBottom: "15px" }}>
              <Form.Group>
                <Form.Label style={{ marginBottom: "5px" }}>
                Rate Per Day
                </Form.Label>
                <Form.Control
                  type="number"
                  name="rateper"
                  placeholder="Enter Rate Per Day"
                  required
                  onChange={this.handleInputChange}
                  
                  isInvalid={!!this.state.validations.rateper}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.validations.rateper}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
      </Row>


        {/*  <div className="row">
            <div className="col" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Seatting Capacity</label>
              <input
                type="number"
                className="form-control"
                name="capacity"
                placeholder="Enter Seat Capacity"
                value={this.state.capacity}
                onChange={this.handleInputChange}
                required
                size="2"
                min="1"
                max="10"
              ></input>
            </div>

            <div className="col" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Rate Per Day</label>
              <input
                type="text"
                className="form-control"
                name="rateper"
                placeholder="Enter Rate Per Day"
                value={this.state.rateper}
                onChange={this.handleInputChange}
                required
                pattern="\d*"
                title="Numbers only, please."
              ></input>
            </div>
          </div>
    */}

      <Row>
            <Col style={{ marginBottom: "15px" }}>
              <Form.Group>
                <Form.Label style={{ marginBottom: "5px" }}>
                Fuel Type
                </Form.Label>
                <Form.Control
                 // type="text"
                  as='select'
                  name="fuelType"
                  placeholder="Select Fuel Type"
                  required
                  onChange={this.handleInputChange}
                 
                  isInvalid={!!this.state.validations.fuelType}
                >
                  
                  <option value=''>Select Fuel Type</option>
                  <option value='Petrol'>Petrol</option>
                  <option value='Diesel'>Diesel</option>

            </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {this.state.validations.fuelType}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>


            
            <Col style={{ marginBottom: "15px" }}>
              <Form.Group>
                <Form.Label style={{ marginBottom: "5px" }}>
                Rate Per Week
                </Form.Label>
                <Form.Control
                  type="number"
                  name="rateweek"
                  placeholder="Enter Rate Per Week"
                  required
                  onChange={this.handleInputChange}
                  
                  isInvalid={!!this.state.validations.rateweek}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.validations.rateweek}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
      </Row>

{/*
          <div className="row">
            <div className="col" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Fuel Type</label>
              <input
                type="text"
                className="form-control"
                name="fuelType"
                placeholder="Enter Fuel Type"
                value={this.state.fuelType}
                onChange={this.handleInputChange}
                required
              ></input>
            </div>

            <div className="col" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Rate Per Week</label>
              <input
                type="text"
                className="form-control"
                name="rateweek"
                placeholder="Enter Rate Per Week"
                value={this.state.rateweek}
                onChange={this.handleInputChange}
                required
              ></input>
            </div>
  </div>*/}
          <Button
            variant="success"
            style={{
              marginTop: "15px",
              marginBottom: "20px",
              marginRight: "10px",
            }}
            title="Show All vehicles Details"
            onClick={() => this.props.history.push(`/`)}
          >
            <i class="fa fa-backward"></i>&nbsp; Back
          </Button>
          <button
            className="btn btn-success"
            type="submit"
            style={{
              marginTop: "15px",
              marginBottom: "20px",
              marginRight: "10px",
            }}
            title="Save New Vehicle"
            onClick={this.onSubmit}
          >
            <i className="fa fa-save"></i>&nbsp; Save
          </button>
        </Form>
      </div>
    );
  }
}
