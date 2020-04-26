import React from 'react'
// import { Input,Button } from 'antd'

// const { TextArea } = Input;
export default class extends React.Component {
  render() {
    const Value  = this.props.data?this.props.data:'你好'
      return (
          <div>
              <input readOnly value={ Value } />
          </div>
      );
  }
}