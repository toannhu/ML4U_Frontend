import PropTypes from "prop-types";
import React, { Component } from "react";
import ArticleListItem from "./ArticleListItem";

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

const defaultProps = {
  items: [],
  page: 1
};

class ArticleList extends Component {
  render() {
    const { items } = this.props;
    return items.map(item => {
      let { id, title, content, tag, time, imageLink } = item;
      return (
        <ArticleListItem
          key={id}
          id={id}
          title={title}
          tag={tag}
          content={content}
          imageLink={imageLink}
          time={time}
        />
      );
    });
  }
}

ArticleList.propTypes = propTypes;
ArticleList.defaultProps = defaultProps;

export default ArticleList;
