import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { fetchPosts } from '../actions';
import PostNew from './post_new';

class PostIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      )
    })
  }
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Latest Reactjs Posts </h1>
        <div className="text-xs-right">
          <Link className="btn btn-success btn-lg addpost" to="/posts/new">
          Add a post
          </Link>
        </div>
        <ul className="list-group list-group-flush">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);