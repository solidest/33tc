import React, { Component } from 'react';
import { Table, Button } from 'antd';


const dataSource = [
  {
    key: '1',
    name: '项目1',
    age: "",
    address: '',
    address1: '',
    address2: '',
    address3: '',
  },
  {
    key: '2',
    name: '项目2',
    age: "",
    address: '',
    address1: '',
    address2: '',
    address3: '',
  },
  {
    key: '3',
    name: '项目3',
    age: "",
    address: '',
    address1: '',
    address2: '',
    address3: '',
  },
];

const columns = [
  {
    title: '项目名称',
    dataIndex: 'name',
  },
  {
    title: '项目代号',
    dataIndex: 'age',
  },
  {
    title: '例会说明',
    dataIndex: 'address',
  },
  {
    title: '项目阶段',
    dataIndex: 'address1',
  },
  {
    title: '参见人',
    dataIndex: 'address2',
  },
  {
    title: '通报质量活动结果',
    dataIndex: 'address3',
  },
];


export default class meeting extends Component {
  state = {
    selectedRowKeys: [],
  };
  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      <div>
        <p style={{ textAlign: "center", margin: "10px 0" }}>例会记录单</p>
        <Table
          rowSelection={rowSelection}
          dataSource={dataSource}
          columns={columns}
          pagination={false}
        />
        <div style={{ textAlign: "right", marginTop: "20px" }}>
          <Button>通报质量保证活动的结果</Button>
        </div>
      </div>
    )
  }
}
