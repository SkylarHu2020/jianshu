import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: 'txt',
    imgUrl: 'https://qph.fs.quoracdn.net/main-qimg-31e8785bd15773867ad4e4292c5c389c'
  },{
    id: 2,
    title: 'bts',
    imgUrl: 'https://qph.fs.quoracdn.net/main-qimg-31e8785bd15773867ad4e4292c5c389c'
  },{
    id: 3,
    title: 'txt',
    imgUrl: 'https://qph.fs.quoracdn.net/main-qimg-31e8785bd15773867ad4e4292c5c389c'
  },{
    id: 4,
    title: 'bts',
    imgUrl: 'https://qph.fs.quoracdn.net/main-qimg-31e8785bd15773867ad4e4292c5c389c'
  }],
  articleList: [{
    id: 1,
    title: 'TXT – what we know so far about the new boy band K-pop kings BTS’ label is debuting',
    des: 'Following BTS’ huge success, their label Big Hit Entertainment is unveiling its first new boy band in six years. TXT or Tomorrow X Together will have a different, lighter sound than BTS and already have a huge social media following',
    imgUrl: '//piccn.ihuaben.com/pic/book/202004/2115/1587452723953-91998iv846_778-1038.jpeg?x-oss-process=image/resize,w_210/format,webp'
  },{
    id: 2,
    title: 'TXT – what we know so far about the new boy band K-pop kings BTS’ label is debuting',
    des: 'Following BTS’ huge success, their label Big Hit Entertainment is unveiling its first new boy band in six years. TXT or Tomorrow X Together will have a different, lighter sound than BTS and already have a huge social media following',
    imgUrl: '//piccn.ihuaben.com/pic/book/202004/2115/1587452723953-91998iv846_778-1038.jpeg?x-oss-process=image/resize,w_210/format,webp'
  },{
    id: 3,
    title: 'TXT – what we know so far about the new boy band K-pop kings BTS’ label is debuting',
    des: 'Following BTS’ huge success, their label Big Hit Entertainment is unveiling its first new boy band in six years. TXT or Tomorrow X Together will have a different, lighter sound than BTS and already have a huge social media following',
    imgUrl: '//piccn.ihuaben.com/pic/book/202004/2115/1587452723953-91998iv846_778-1038.jpeg?x-oss-process=image/resize,w_210/format,webp'
  },{
    id: 4,
    title: 'TXT – what we know so far about the new boy band K-pop kings BTS’ label is debuting',
    des: 'Following BTS’ huge success, their label Big Hit Entertainment is unveiling its first new boy band in six years. TXT or Tomorrow X Together will have a different, lighter sound than BTS and already have a huge social media following',
    imgUrl: '//piccn.ihuaben.com/pic/book/202004/2115/1587452723953-91998iv846_778-1038.jpeg?x-oss-process=image/resize,w_210/format,webp'
  },{
    id: 5,
    title: 'TXT – what we know so far about the new boy band K-pop kings BTS’ label is debuting',
    des: 'Following BTS’ huge success, their label Big Hit Entertainment is unveiling its first new boy band in six years. TXT or Tomorrow X Together will have a different, lighter sound than BTS and already have a huge social media following',
    imgUrl: '//piccn.ihuaben.com/pic/book/202004/2115/1587452723953-91998iv846_778-1038.jpeg?x-oss-process=image/resize,w_210/format,webp'
  }]
})

const homeReducer = (state = defaultState, action) => {
  switch(action.type) {

    default:
      return state
  }
}

export default homeReducer