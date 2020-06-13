import React from "react";
import FormItem from "../../layout/FormItem";
import TableItem from "../../layout/TableItem";
import NavbarItem from "../../navigations/navbar/NavbarItem";
import { Row, Col } from "reactstrap";
const Home = () => {
  return (
    <div>
      <NavbarItem />
      <div>
        <div className="container">
          <Row>
            <Col xs="6">
              <FormItem />
            </Col>
            <Col xs="6">
              <TableItem />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Home;
