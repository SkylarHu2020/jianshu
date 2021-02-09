import React from 'react'
import { HeaderWrapper, Logo, Nav, NavItem,
  NavSearch, Addition, Button, SearchWrapper,
  SearchInfo, SearchInfoTitle, SearchInfoSwitch,
  SearchInfoItem, SearchInfoList } from './style'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'

const Header = () => {
  const focused = useSelector((state) => state.getIn(['header', 'focused']))
  const list = useSelector((state) => state.getIn(['header', 'list']))
  const page = useSelector((state) => state.getIn(['header', 'page']))
  const totalPage = useSelector((state) => state.getIn(['header', 'totalPage']))
  const mouseIn = useSelector((state) => state.getIn(['header', 'mouseIn']))
  const login = useSelector((state) => state.getIn(['login', 'login']))
  const dispatch = useDispatch()

  const handleInputFocused = () => {
    if (list.size === 0) {
      dispatch(actionCreators.getList())
    }
    dispatch(actionCreators.searchFocus())
  }

  const handleInputBlur = () => {
    dispatch(actionCreators.searchBlur())
  }

  const handleMouseEnter = () => {
    dispatch(actionCreators.mouseEnter())
  }

  const handleMouseLeave = () => {
    dispatch(actionCreators.mouseLeave())
  }

  const handleChangePage = (page, totalPage, spin) => {
    let orginAngel = spin.style.transform.replace(/[^0-9]/ig, '')
    if (orginAngel) {
      orginAngel = parseInt(orginAngel)
    } else {
      orginAngel = 0
    }

    spin.style.transform = 'rotate(' + (orginAngel + 360) + 'deg)'
    if (page < totalPage) {
      dispatch(actionCreators.changePage(page + 1))
    } else {
      dispatch(actionCreators.changePage(1))
    }
  }

  const logout = () => {
    dispatch(loginActionCreators.logout())
  }

  const getListArea = () => {
    const jsList = list.toJS()
    const pageList = []
    const indexEnd = Math.min(page * 10, jsList.length - 1)
    if (jsList.length) {
      for (let i = (page - 1) * 10; i < indexEnd; i++) {
        pageList.push(<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>)
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  return (
    <HeaderWrapper>
      <Link to='/'>
        <Logo/>
      </Link>
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        {
          login ?
            <NavItem className='right' onClick={logout}>退出</NavItem> :
            <NavItem className='right'><Link to='/login'>登录</Link></NavItem>
        }
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
              onFocus={() => handleInputFocused(list)}
              onBlur={handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe62d;</i>
          {getListArea()}
        </SearchWrapper>
      </Nav>
      <Addition>
        <Link to='/write'>
          <Button className='writting'>
            <i className="iconfont">&#xe6e5;</i>
            写文章
          </Button>
        </Link>
        <Button className='reg'>注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}


export default Header