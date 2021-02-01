import React, { useEffect } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import Topic from './components/Topic'
import List from './components/List'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import { actionCreators } from './store'
import { useSelector, useDispatch } from 'react-redux'


const Home = () => {
  const showScroll = useSelector((state) => state.getIn(['home', 'showScroll']))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actionCreators.getHomeInfo())
  }, [dispatch])

  useEffect(() => {
    window.addEventListener('scroll', changeScrollTopShow)
    return () => {
      window.removeEventListener('scroll', changeScrollTopShow)
    }
  })

  const handleScrollTop = () => {
    window.scrollTo(0, 0)
  }

  const changeScrollTopShow = () => {
    if (document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.changeShowScroll(true))
    } else {
      dispatch(actionCreators.changeShowScroll(false))
    }
  }

  return (
    <HomeWrapper>
      <HomeLeft>
        <img className="banner-img" alt="banner"
        src="https://scontent.fhkg3-1.fna.fbcdn.net/v/t1.0-9/89554166_854647864948579_6986055187899088896_o.jpg?_nc_cat=100&ccb=2&_nc_sid=dd9801&_nc_ohc=eWYDS-d3SK4AX-uezpj&_nc_ht=scontent.fhkg3-1.fna&oh=9922ad702122bede52084f3cde1062b1&oe=6037B02F" />
        <Topic />
        <List />
      </HomeLeft>
      <HomeRight>
        <Recommend />
        <Writer />
      </HomeRight>
      {
        showScroll ? <BackTop onClick={handleScrollTop}>顶部</BackTop> : null
      }
    </HomeWrapper>
  )
}

export default Home