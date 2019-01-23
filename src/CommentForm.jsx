import React, { Component } from "react";
export default class CommentForm extends Component {
  state = {
    comment: "",
    author: ""
  };
  handleOnChange = ({ target: { name, value } }) =>
    this.setState(_prevState => ({
      [name]: value
    }));
  handleSubmit = event => {
    event.preventDefault();

    this.props.submit(this.state);
  };
  hasInvalidFields = () => {
    const { comment, author } = this.state;
    if (comment.trim() !== "" && author.trim() !== "") {
      return false;
    }
    return true;
  };
  render() {
    const { comment, author } = this.state;
    return (
      <form data-testid="form" style={styles.form} onSubmit={this.handleSubmit}>
        <div>
          <textarea
            data-testid="comment"
            style={styles.commentBox}
            onChange={this.handleOnChange}
            placeholder="Write something..."
            name="comment"
            value={comment}
          />
        </div>
        <div>
          <label htmlFor="author" aria-labelledby="author">
            Your Name
          </label>
          <input
            data-testid="author"
            style={styles.inputField}
            onChange={this.handleOnChange}
            id="author"
            type="text"
            name="author"
            value={author}
          />
        </div>
        <button type="submit" data-testid="submit" style={styles.button}>
          Add Comment
        </button>
      </form>
    );
  }
}
const styles = {
  form: {
    margin: "auto",
    padding: "0px",
    width: "500px"
  },
  commentBox: {
    width: "494px",
    height: "80px",
    marginBottom: "12px"
  },
  inputField: {
    width: "360px",
    float: "right"
  },
  button: {
    marginTop: "12px",
    width: "500px",
    color: "#ffffff",
    backgroundColor: "#767676",
    padding: "6px",
    borderRadius: "8px"
  }
};
