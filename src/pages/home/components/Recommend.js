import React from 'react'
import { RecommendWrapper, RecommendItem } from '../style'
import { useSelector } from 'react-redux'

const Recommend = () => {

  const list = useSelector(state => state.getIn(['home', 'recommendList']))

  return (
    <RecommendWrapper>
      {
        list.map((item) => {
          return <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}></RecommendItem>
        })
      }
      
    </RecommendWrapper>
  )
}

export default Recommend