import React, {useState} from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const FormItem = (props) => {

  const [items, setItems]=useState({    
    item: "",
    open:"",
    prod:"",
    closing:"",
    price:"",
    name:""
  })

  return (
    <div>
      <div>
        <div>
          <h1 className="h2">Form Inputs</h1>
        </div>
      </div>
      <Form className="container formTop">
        <FormGroup>
          <Label for="exampleName">Item name</Label>
          <Input
            type="text"
            required
            onChange={onChange}
            name="item"
            placeholder="Input item name here"
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleNumber">Opening stock</Label>
          <Input
            type="number"
            name="open"
            onChange={onChange}
            required
            placeholder="Input opening stock here"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleNumber">Daily production</Label>
          <Input
            type="number"
            name="prod"
            onChange={onChange}
            required
            placeholder="Input Daily production here"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleNumber">Closing stock</Label>
          <Input
            type="number"
            name="closing"
            onChange={onChange}
            required
            placeholder="Input closing stock here"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleNumber">Price</Label>
          <Input
            type="number"
            name="price"
            onChange={onChange}
            required
            placeholder="Input Price here"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleNumber">Your name</Label>
          <Input
            type="number"
            name="name"
            onChange={onChange}
            required
            placeholder="Input Your name here"
          />
        </FormGroup>
        <Button color="success" block>
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default FormItem;
