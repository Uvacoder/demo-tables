import React from "react";
import ja from "./ja21.png";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

const FormItem = (props) => {
  return (
    <div>
      <div
        role="main"
        className="col-md-9 ml-sm-auto col-lg-10 px-md-4"
        style={{ marginTop: "110px" }}
      >
        <img
          className=" col-sm-12 col-md-6 offset-md-5"
          src={ja}
          alt="Logo"
          style={{ maxHeight: "200px", maxWidth: "200px" }}
        />
        <main>
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Form Inputs</h1>
          </div>
        </main>
      </div>
      <Form className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleDate">Date</Label>
              <Input
                type="date"
                name="date"
                required
                placeholder="Input date here"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleName">Item name</Label>
              <Input
                type="text"
                required
                name="name"
                placeholder="Input item name here"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleNumber">Opening stock</Label>
          <Input
            type="number"
            name="number"
            required
            placeholder="Input opening stock here"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleNumber">Daily production</Label>
          <Input
            type="number"
            name="number"
            required
            placeholder="Input Daily production here"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleNumber">Closing stock</Label>
          <Input
            type="number"
            name="number"
            required
            placeholder="Input closing stock here"
          />
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleNumber">Price</Label>
              <Input
                type="number"
                name="number"
                required
                placeholder="Input Price here"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleNumber">Your name</Label>
              <Input
                type="number"
                name="number"
                required
                placeholder="Input Your name here"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup check>
          <Input type="checkbox" name="check" id="exampleCheck" />
          <Label for="exampleCheck" check required>
            Admin Verified
          </Label>
        </FormGroup>
        <Button
          color="success"
          style={{ marginTop: "20px", marginBottom: "20px" }}
          block
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default FormItem;
