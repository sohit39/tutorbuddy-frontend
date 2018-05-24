import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
class Leaderboard extends React.Component {
    render() {
      return (
        <div id="leaderboard">
        <h1 id="leaderTitle"><span class="buddy">Leader</span>board</h1>
          <div style={{ background: '#4D4A5D', padding: '30px' }}>
            <Row gutter={16}>
              <Col span={8}>
                  <Card title="Top Overall Tutor" bordered={false}>Card content</Card>
              </Col>
              <Col span={8}>
                <Card title="Top Math Tutor" bordered={false}>Card content</Card>
              </Col>
              <Col span={8}>
                <Card title="Top Science Tutor" bordered={false}>Card content</Card>
              </Col>
              <Col span={8}>
                <Card title="Top Social Studies Tutor" bordered={false}>Card content</Card>
              </Col>
              <Col span={8}>
                <Card title="Top English Tutor" bordered={false}>Card content</Card>
              </Col>
              <Col span={8}>
                <Card title="Top Language Tutor" bordered={false}>Card content</Card>
              </Col>
            </Row>
          </div>
        </div>
      );
    }
  }
  export default Leaderboard;