import React, { Component, Fragment } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";

class AddCar extends Component {
  state = {
    open: false,
    name: "",
    mpg: "",
    cylinders: "",
    horsepower: "",
  };

  toggleDialog = () => this.setState({ open: !this.state.open });

  handleTextChange = (e) => {
    const newState = { ...this.state };
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...this.state };
    payload.id = this.props.carTotal + 1;
    delete payload.open;
    console.log("THE CAR", payload);
    this.props.addCar(payload);
    this.toggleDialog();
    // this.setState({ open: false });
    // add this.props.addCar function here
    // also add this.setState to close the dialog
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.open !== this.state.open) {
      this.setState({
        name: "",
        mpg: "",
        cylinders: "",
        horsepower: "",
      });
    }
  };

  render() {
    return (
      <Fragment>
        <div style={{ textAlign: "center" }}>
          <h1>Add Car:</h1>
          <Button
            variant="contained"
            className="add-car"
            onClick={this.toggleDialog}
          >
            Add Car
          </Button>
        </div>
        <div>
          <Dialog open={this.state.open} onClose={this.toggleDialog}>
            <DialogTitle>Add New Car</DialogTitle>
            <DialogContent>
              <form
                onSubmit={this.handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "350px",
                }}
              >
                <TextField
                  id="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="mpg"
                  placeholder="Miles per gallon"
                  value={this.state.mpg}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="cylinders"
                  placeholder="Cylinders"
                  value={this.state.cylinders}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="horsepower"
                  placeholder="Horsepower"
                  value={this.state.horsepower}
                  onChange={this.handleTextChange}
                  required
                />
                <br />
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </Fragment>
    );
  }
}

export default AddCar;
