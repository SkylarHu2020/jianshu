import axios from 'axios'
import { actionTypes } from '../store'


// pure action
const updateDetail = (data) => ({
  type: actionTypes.GET_DETAIL_DATA,
  content: data.content,
  title: data.title
})

export const getDetailData = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then((res) => {
      const data = res.data.data
      dispatch(updateDetail(data))
    }).catch(err => {
      console.log(err)
    })
  }
}