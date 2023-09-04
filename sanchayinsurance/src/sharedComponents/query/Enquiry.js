import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";

import "./Enquiry.css";  

class Enquiry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      editorState: EditorState.createEmpty(),
    };
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleEditorChange = (editorState) => {
    this.setState({ editorState });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, editorState } = this.state;
    
    const contentState = editorState.getCurrentContent();
    const contentRaw = convertToRaw(contentState);

      
    console.log("Title:", title);
    console.log("Message (Raw JSON):", contentRaw);
     
  };

  render() {
    const { editorState } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="enquiry-form">
        <h2>Feedback Page</h2>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={this.state.title}
          onChange={this.handleTitleChange}
          required
          className="title-input"
        />
        <br />
        <label htmlFor="message">Message:</label>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.handleEditorChange}
           
          editorStyle={{ backgroundColor: 'white', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
        />
        <br />
        <input
          type="submit"
          value="Post Feedback"
          className="post-feedback-button"
        />
      </form>
    );
  }
}

export default Enquiry;