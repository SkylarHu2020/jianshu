import React, { Component } from 'react'
import { ListItem, ListInfo } from '../style'
import { connect } from 'react-redux'

class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        {
          list.map((item) => (
              <ListItem key={item.get('id')}>
                <img className="list-pic" src={item.get('imgUrl')} alt="icon" />
                  <ListInfo>
                    <h3 className="title">{item.get('title')}</h3>
                    <p className="dsc">{item.get('des')}</p>
                  </ListInfo>
              </ListItem>
            )
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'articleList'])
})

export default connect(mapStateToProps, null)(List)