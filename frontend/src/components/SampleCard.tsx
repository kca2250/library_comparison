import React from "react"
import { Avatar, Card, Col, Row, Tag, Typography } from "antd"
import {
  HeartOutlined,
  ShareAltOutlined,
  DownOutlined,
} from "@ant-design/icons"

const { Text, Paragraph } = Typography

const iconStyle: { fontSize: string } = {
  fontSize: "1.2rem",
}

const SampleCard: React.FC = () => {
  return (
    <Card>
      <Row style={{ marginBottom: "8px" }} align="middle">
        <Col>
          <Avatar size="large" />
        </Col>
        <Col style={{ marginLeft: "8px" }}>
          <Text strong>
            name:<span style={{ color: "#686868" }}>username</span>
          </Text>
          <br />
          <Tag>email</Tag>
          <Tag>phone</Tag>
        </Col>
      </Row>

      <Paragraph>
        <Text style={{ marginBottom: "4px" }} strong>
          company.name
        </Text>
        <br />
        <Text>company.catchPhrase</Text>
        <br />
        <Text>company.bs</Text>
        <br />
      </Paragraph>

      <Row>
        <Col span={1}>
          <HeartOutlined style={iconStyle} />
        </Col>
        <Col span={22}>
          <ShareAltOutlined style={iconStyle} />
        </Col>
        <Col span={1}>
          <DownOutlined style={iconStyle} />
        </Col>
      </Row>
    </Card>
  )
}

export default SampleCard
