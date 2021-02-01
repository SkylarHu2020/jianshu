import React from 'react'
import { ListItem, ListInfo, LoadMore } from '../style'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const List = () => {
  const list = useSelector(state => state.getIn(['home', 'articleList']))
  const page = useSelector(state => state.getIn(['home', 'articlePage']))
  const dispatch = useDispatch()

  const getMoreList = (page) => {
    dispatch(actionCreators.getMoreList(page))
  }

  return (
    <div>
      {
        list.map((item) => (
            <Link key={item.get('id')} to={'/detail/' + item.get('id')}>
              <ListItem >
                <img className="list-pic" src={item.get('imgUrl')} alt="icon" />
                  <ListInfo>
                    <h3 className="title">{item.get('title')}</h3>
                    <p className="dsc">{item.get('des')}</p>
                  </ListInfo>
              </ListItem>
            </Link>
          )
        )
      }
      <LoadMore onClick={() => getMoreList(page)}>更多内容</LoadMore>
    </div>
  )
}

export default List