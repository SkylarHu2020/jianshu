import React from 'react'
import { TopicWrapper, TopicItem } from '../style'
import { useSelector } from 'react-redux'

const Topic = () => {

  const list = useSelector(state => state.getIn(['home', 'topicList']))

  return (
    <TopicWrapper>
      {
        list.map((item) => {
          return (
            <TopicItem key={item.get('id')}>
              <img className="topic-pic" src={item.get('imgUrl')} alt="icon"/>
              {item.get('title')}
            </TopicItem>
          )
        })
      }
    </TopicWrapper>
  )
}

export default Topic