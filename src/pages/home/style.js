import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`

export const HomeLeft = styled.div`
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  float: left;
  .banner-img {
    width: 625px;
  }
`

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`


export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -10px;
  border-bottom: 1px solid #dcdcdc;
`


export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    height: 32px;
    display: block;
    float: left;
    margin-right: 10px;
  }
`

export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .list-pic {
    height: 100px;
    display: block;
    float: right;
    border-radius: 10px;
  }
`

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .des {
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`


export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  margin-bottom: 20px;
`

export const WriterWrapper = styled.div`
  width: 278px;
  display: flex;
  margin-bottom: 15px;
  .avator {
    width: 48px;
    height: 48px;
    border-radius: 24px;
  }
  .info {
    width: 182px;
    height: 48px;
    .writer-name {
      font-size: 14px;
      margin-left: 10px;
      color: #333;
      padding-top: 12px;
    }
    .writer-des {
      font-size: 12px;
      color: #969696;
      margin-left: 10px;
      padding-top: 5px;
    }
  }
  .subscribe {
    height: 48px;
    width: 48px;
    font-size: 13px;
    color: #42c02e;
    cursor: pointer;
  }
`

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  text-align: center;
  background: #a5a5a5;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
  cursor: pointer;
`