import React, { Component } from 'react'
import { WriterWrapper } from '../style'
import { connect } from 'react-redux'

class Writer extends Component {
  render() {
    const { list } = this.props
    return (
      <div>
        {
          list.map((item) => (
            <WriterWrapper key={item.get('id')}>
              <img className="avator" src={item.get('avator')} alt="" />
              <div className="info">
                <div className="writer-name">{item.get('name')}</div>
                <div className="writer-des">{item.get('content')}</div>
              </div>
              <div className="subscribe">+关注</div>
            </WriterWrapper>
          ))
        }
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'writerList'])
})

export default connect(mapState, null)(Writer);