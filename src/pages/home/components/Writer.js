import React from 'react'
import { WriterWrapper } from '../style'
import { useSelector } from 'react-redux'

const Writer = () => {

  const list = useSelector(state => state.getIn(['home', 'writerList']))

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

export default Writer