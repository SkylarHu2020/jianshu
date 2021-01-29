import axios from 'axios'
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

// pure action
const changeHomeData = (data) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: data.topicList,
  articleList: data.articleList,
  writerList: data.writerList,
  recommendList: data.recommendList
})

// action return a function
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const data = res.data.data
      dispatch(changeHomeData(data))
    })
  }
}

const getMoreListData = (data) => ({
  type: actionTypes.GET_MORE_LIST_DATA,
  articleList: fromJS(data)
})

export const getMoreList = () => {
  return (dispatch) => {
    axios.get('/api/homeList.json').then((res) => {
      const data = res.data.data
      dispatch(getMoreListData(data))
    })
  }
}