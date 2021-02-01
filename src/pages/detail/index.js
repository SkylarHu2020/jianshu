import React, { useEffect } from 'react'
import { DetailWrapper, Header, Content } from './style'
import { shallowEqual } from 'react-redux'
import { actionCreators } from './store'
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'

const Detail = () => {
  const title = useSelector((state) => state.getIn(['detail', 'title']), shallowEqual)
  const content = useSelector((state) => state.getIn(['detail', 'content']), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actionCreators.getDetailData())
  }, [dispatch])

  return (
    <DetailWrapper>
      <Header>{title}</Header>
      <Content
        dangerouslySetInnerHTML={{__html: content}}
      />
    </DetailWrapper>
  )
}


export default withRouter(Detail)