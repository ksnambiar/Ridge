import React, { Component } from 'react'
import PropTypes from 'prop-types';
import QueryItem from './QueryItem';
class QueryFeed extends Component {
  render() {
      const {queries} = this.props
    return queries.map(query=><QueryItem key={query.key} query={query}/>)
}
}
QueryFeed.propTypes={
    queries:PropTypes.array.isRequired
}
export default QueryFeed;