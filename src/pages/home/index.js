import React, { PureComponent } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import Topic from './components/Topic'
import List from './components/List'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Home extends PureComponent {
  render() {
    const { showScroll } = this.props
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
          showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null
        }
      </HomeWrapper>
    )
  }

  handleScrollTop () {
    window.scrollTo(0, 0)
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData () {
    dispatch(actionCreators.getHomeInfo())
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.changeShowScroll(true))
    } else {
      dispatch(actionCreators.changeShowScroll(false))
    }
  }
})

export default connect(mapState, mapDispatch)(Home);