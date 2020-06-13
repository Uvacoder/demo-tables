import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

const FormItem = (props) => {
  return (
    <div xs="6" className="container">
      <div>
        <main>
          <div>
            <h1 className="h2">Form Inputs</h1>
          </div>
        </main>
      </div>
      <Form>
        <Row form>
          <Col>
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
          <Col>
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
        </Row>{" "}
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
