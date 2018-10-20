import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost } from "../actions";
import { deletePost } from "../actions";

class PostShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div />;
    }
    return (
      <div className="jumbotron">
        <div className="text-xs-left">
          <Link to="/">
            <i class="material-icons">navigate_before</i>
            Home
          </Link>
        </div>
        <h1 class="display-4">{post.title}</h1>
        <div className="text-xs-right">
          <button
            className="btn btn-danger btn-lg addpost"
            onClick={this.onDeleteClick.bind(this)}
          >
            Delete post
          </button>
        </div>
        <p class="lead">{post.content}</p>
        <hr class="my-4" />
        <button type="button" class="btn btn-info">
          {post.categories}
        </button>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);
