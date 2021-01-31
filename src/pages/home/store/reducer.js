import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  articlePage: 1,
  recommendList: [],
  writerList: [],
  showScroll: false
})

const homeReducer = (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList)
      })
    case actionTypes.GET_MORE_LIST_DATA:
      return state.merge({
        articleList: state.get('articleList').concat(action.articleList),
        articlePage: action.nextPage
      })
    case actionTypes.CHANGE_SHOW_SCROLL:
      return state.set('showScroll', action.show)
    default:
      return state
  }
}

export default homeReducer