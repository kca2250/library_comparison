import React from "react";
import { HeartOutlined, ShareAltOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";

const iconStyle: { fontSize: string } = {
  fontSize: "1.2rem",
};

const IconList: React.FC = () => {
  return (
    <Row>
      <Col>
        <HeartOutlined style={iconStyle} />
      </Col>
      <Col style={{ marginLeft: "8px" }}>
        <ShareAltOutlined style={iconStyle} />
      </Col>
    </Row>
  );
};

export default IconList;
