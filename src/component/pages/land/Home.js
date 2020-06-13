import React from "react";
import FormItem from "../../layout/forms/FormItem";
import TableItem from "../../layout/table/TableItem";
import NavbarItem from "../../navigations/navbar/NavbarItem";
import { Row, Col, Container } from "reactstrap";
const Home = () => {
  return (
    <div>
      <NavbarItem />
      <div>
        <Container>
          <Row>
            <Col xs="6">
              <FormItem />
            </Col>
            <Col xs="6">
              <TableItem />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
