import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import ItemsContext from "../../../context/items/ItemsContext";

const FormItem = (props) => {
  const itemsContext = useContext(ItemsContext);

  const { addItem } = itemsContext;

  const [items, setItems] = useState({
    item: "",
    open: "",
    prod: "",
    closing: "",
    price: "",
    name: "",
  });

  const onChange = (e) => {
    setItems({ ...items, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addItem(items);
  };

  return (
    <div>
      <div>
        <div>
          <h1 className="h2">Form Inputs</h1>
        </div>
      </div>
      <Form onSubmit={onSubmit}>
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
