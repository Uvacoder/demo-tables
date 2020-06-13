import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const FormItem = (props) => {
  return (
    <div>
      <div>
          <div>
            <h1 className="h2">Form Inputs</h1>
          </div>
      </div>
      <Form className="container formTop">
        <FormGroup>
          <Label for="exampleDate">Date</Label>
          <Input
            type="date"
            name="date"
            required
            id="exampleDate"
            placeholder="Input date here"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleName">Item name</Label>
          <Input
            type="text"
            required
            name="name"
            id="exampleName"
            placeholder="Input item name here"
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleNumber">Opening stock</Label>
          <Input
            type="number"
            name="number"
            required
            id="exampleNumber"
            placeholder="Input opening stock here"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleNumber">Daily production</Label>
          <Input
            type="number"
            name="number"
            required
            id="exampleNumber"
            placeholder="Input Daily production here"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleNumber">Closing stock</Label>
          <Input
            type="number"
            name="number"
            required
            id="exampleNumber"
            placeholder="Input closing stock here"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleNumber">Price</Label>
          <Input
            type="number"
            name="number"
            required
            id="exampleNumber"
            placeholder="Input Price here"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleNumber">Your name</Label>
          <Input
            type="number"
            name="number"
            required
            id="exampleNumber"
            placeholder="Input Your name here"
          />
        </FormGroup>
        <FormGroup check>
          <Input type="checkbox" name="check" id="exampleCheck" />
          <Label for="exampleCheck" check required>
            Admin Verified
          </Label>
        </FormGroup>
        <Button color="success" block>
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default FormItem;
