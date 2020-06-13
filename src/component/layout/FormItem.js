import React from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

const FormItem = (props) => {
  return (
    <div>
      <div>
        <main>
          <div>
            <h1 className="h2">Form Inputs</h1>
          </div>
        </main>
      </div>
      <Form>
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
        <Button color="success">Submit</Button>
      </Form>
    </div>
  );
};
export default FormItem;
