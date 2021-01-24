import React from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'

// 无状态组件
const Header = (props) => {
  const { focused, handleInputBlur, handleInputFocused } = props
  return (
    <HeaderWrapper>
      <Logo href='/'/>
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'>
          <i className="iconfont">&#xe636;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition
            timeout={200}
            in={focused}
            classNames="slide"
          >
            <NavSearch
              className={focused ? 'focused' : ''}
              onFocus={handleInputFocused}
              onBlur={handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe62d;</i>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className='writting'>
          <i className="iconfont">&#xe6e5;</i>
          写文章
        </Button>
        <Button className='reg'>注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}

// state: store 中的 state
const mapStateToProps = (state) => {
  return {
    // immutable 对象不能用.来调用数据，使用get('name')
    focused: state.header.get('focused')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocused () {
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur () {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)