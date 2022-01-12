import React from "react";
import { Avatar, Card, Col, Collapse, Row, Tag, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import IconList from "./IconList";
import { USER } from "./CardList";

const { Text, Paragraph } = Typography;
const { Panel } = Collapse;

const SampleCard: React.FC<USER> = (props) => {
  const { name, username, email, phone, website, company, address } = props;
  return (
    <Card>
      <Row style={{ marginBottom: "8px" }} align="middle">
        <Col>
          <Avatar icon={<UserOutlined />} alt={username} size="large" />
        </Col>
        <Col style={{ marginLeft: "8px" }}>
          <Text strong>
            {name}:<span style={{ color: "#686868" }}>{username}</span>
          </Text>
          <br />
          <Tag>{email}</Tag>
          <Tag>{phone}</Tag>
          <Tag>{website}</Tag>
        </Col>
      </Row>

      <Paragraph>
        <Text style={{ marginBottom: "4px" }} strong>
          {company.name}
        </Text>
        <br />
        <Text>{company.catchPhrase}</Text>
        <br />
        <Text>{company.bs}</Text>
        <br />
      </Paragraph>

      <Collapse
        ghost
        style={{ backgroundColor: "white" }}
        expandIconPosition={"right"}
      >
        <Panel
          style={{ backgroundColor: "white" }}
          key={""}
          header={<IconList />}
        >
          <Paragraph>
            <Text strong>ADDRESS</Text>
            <br />
            <Tag>{address.zipcode}</Tag>
            <br />
            <Text>
              {address.city} {address.street} {address.suite}
            </Text>
            <br />
            <Text>
              {address.geo.lat}: {address.geo.lng}
            </Text>
          </Paragraph>
        </Panel>
      </Collapse>
    </Card>
  );
};

export default SampleCard;
