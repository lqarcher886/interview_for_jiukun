import React, { useState } from 'react';
import { Space, Table, Tag, Col, Row, Modal } from 'antd';
import './App.css';

function App() {
  const [detail, setDetail] = useState();
  const [open, setOpen] = useState(false);
  const onTimeClick = (text, record, index) => {
    console.log(text, record, index);
    setDetail(record);
    document.getElementById("bigscreen").classList.add("fade-out");
    setTimeout(()=> {
      setOpen(true);
    }, 2000);
    
    // document.getElementById("detailPage").classList.add("slide-in");
  }
  const columns = [
    {
      title: '计划',
      dataIndex: 'plan',
      key: 'plan',
      render: (text, record, index) => <a onClick={()=>onTimeClick(text, record, index)}>{text}</a>,
    },
    {
      title: '航班号',
      dataIndex: 'flightNo',
      key: 'flightNo',
    },
    {
      title: '前站/经停',
      dataIndex: 'stop',
      key: 'stop',
    },
    {
      title: ' 预计',
      dataIndex: 'Eta',
      key: 'Eta',
      render: (text, record, index) => <a onClick={()=>onTimeClick(text, record, index)}>{text}</a>,
    },
    {
      title: '状态',
      key: 'tags',
      dataIndex: 'tags',
      render: (text) => {
            let color;
            if (text === "到达") {
              color = "#108ee9"
            } else if(text === "延误"){
              color = "#f50"
            } else {
              color = "default"
            }
            return(
              <Tag color={color}>
              {text}
              </Tag>
            ) 
      },
    },
    
  ];
  const data = [
    {
      key: '1',
      plan: '15:00',
      flightNo: "8434 3U",
      stop:"绵阳",
      Eta: '15:57',
      tags: '延误',
    },
    {
      key: '2',
      plan: '15:23',
      flightNo: "HU6031",
      stop:"海口",
      Eta: '16:49',
      tags: '前方起飞',
    },
    {
      key: '3',
      plan: '15:40',
      flightNo: "GS6598",
      stop:"厦门",
      Eta: '16:48',
      tags: '到达',
    },
    {
      key: '4',
      plan: '15:00',
      flightNo: "8434 3U",
      stop:"绵阳",
      Eta: '15:57',
      tags: '延误',
    },
    {
      key: '5',
      plan: '15:23',
      flightNo: "HU6031",
      stop:"海口",
      Eta: '16:49',
      tags: '前方起飞',
    },
    {
      key: '6',
      plan: '15:40',
      flightNo: "GS6598",
      stop:"厦门",
      Eta: '16:48',
      tags: '到达',
    },
    {
      key: '7',
      plan: '15:00',
      flightNo: "8434 3U",
      stop:"绵阳",
      Eta: '15:57',
      tags: '延误',
    },
    {
      key: '8',
      plan: '15:23',
      flightNo: "HU6031",
      stop:"海口",
      Eta: '16:49',
      tags: '前方起飞',
    },
    {
      key: '9',
      plan: '15:40',
      flightNo: "GS6598",
      stop:"厦门",
      Eta: '16:48',
      tags: '到达',
    },
    {
      key: '10',
      plan: '15:00',
      flightNo: "8434 3U",
      stop:"绵阳",
      Eta: '15:57',
      tags: '延误',
    },
    {
      key: '11',
      plan: '15:23',
      flightNo: "HU6031",
      stop:"海口",
      Eta: '16:49',
      tags: '前方起飞',
    },
    {
      key: '12',
      plan: '15:40',
      flightNo: "GS6598",
      stop:"厦门",
      Eta: '16:48',
      tags: '到达',
    },
    {
      key: '13',
      plan: '15:00',
      flightNo: "8434 3U",
      stop:"绵阳",
      Eta: '15:57',
      tags: '延误',
    },
    {
      key: '14',
      plan: '15:23',
      flightNo: "HU6031",
      stop:"海口",
      Eta: '16:49',
      tags: '前方起飞',
    },
    {
      key: '15',
      plan: '15:40',
      flightNo: "GS6598",
      stop:"厦门",
      Eta: '16:48',
      tags: '到达',
    }
  ];

  return (
    <div className="App">
      <Row id="bigscreen">
        <Col span={8}>
          <Table columns={columns} dataSource={data} pagination={false} />
        </Col>
        <Col span={8}>
          <Table columns={columns} dataSource={data} pagination={false}/>
        </Col>
        <Col span={8}>
          <Table columns={columns} dataSource={data} pagination={false}/>
        </Col>
      </Row>
      <Modal
        className="detaiModal"
        title="详情页"
        centered
        open={open}
        onOk={() => {
          setOpen(false);
          document.getElementById("bigscreen").classList.remove("fade-out");
        }}
        onCancel={() => {
          setOpen(false);
          document.getElementById("bigscreen").classList.remove("fade-out");
        }}
        width={"100vw"}
      >
        <h1> 我是这个详情页 </h1>
        <h4>{JSON.stringify(detail)}</h4>
      </Modal>
      {/* <div id="detailPage" className="detailPage">
        <h1> 我是这个详情页 </h1>
        <h4>{JSON.stringify(detail)}</h4>
      </div> */}
    </div>
  );
}

export default App;
