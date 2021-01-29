import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import Topic from './components/Topic'
import List from './components/List'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import { connect } from 'react-redux'
import { actionCreators } from './store'


class Home extends Component {
  render() {
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
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData()
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData () {
    dispatch(actionCreators.getHomeInfo())
  }
})

export default connect(null, mapDispatch)(Home);