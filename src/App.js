import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import ReactQuill from 'react-quill'; // ES6
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'react-quill/dist/quill.snow.css'; // ES6
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    // this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)

    // const html = `<p>Gowthafgnbhman . Mreg5hhbtr</p>
    // <p>Technical Analyst | E: <a href="mailto:gowthaman@ideas2it.com" target="_self">gowthaman@ideas2it.com</a> | M: +91-8870226416</p>
    // <p></p>
    // <span style="display: flex; justify-content: flex-start;"><img src="https://ci5.googleusercontent.com/proxy/npUF6cOgInKrD2Dzi07UpaT9w9bEee8nJAAoYYyrlWpE1Rcvt9BNZLKQHc_dDj37XL5fYuqG7juuCUs-l2YpCPdsLSAoOqvnPd7izfwa2WpviqdRTKR152fnxUjnxaRHH8Phu7F2GqGnh5F31mQN=s0-d-e1-ft#https://docs.google.com/a/ideas2it.com/uc?id=0B7LujA3k8IlBTGJYWTlWMmxWVm8&export=download" alt="undefined" style="float:left;height: ;width: "/></span>
    // <p>RR Towers-5, 8th floor, TVK Industrial Estate, Guindy, Chennai-600032</p>
    // <p>W : <a href="http://www.ideas2it.com/" target="_self">www.ideas2it.com</a> | T : +14087559621</p>
    // <p>DISCLAIMER -</p>
    // <p>This e-mail and an files transmitted with it are for the sole use of the intended recipient(s) and may contain confidential and privileged information. If you are not the intended recipient(s), please reply to the sender and destroy all copies of the original message. Any review, use, disclosure, dissemination, forwarding, printing or copying of this email, and/or any action taken in reliance on the contents of this e-mail is strictly prohibited and may be unlawful. Opinions, conclusions and other information in this message that do not related to official business of the company shall be understood to be neither given nor endorsed by Ideas2IT Technology Services Private Limited. Any information contained in this email, when addressed to Clients is subject to the terms and conditions in governing the client contract.</p>`;
    const html = '';
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      let editorState = EditorState.createWithContent(contentState);
      editorState = EditorState.moveFocusToEnd(editorState);
      const initialContent = draftToHtml(convertToRaw(editorState.getCurrentContent()));
      this.state = {
        editorState,
        text: html
      };
    }
    this.setDomEditorRef = ref => this.domEditor = ref;
  }

  handleChange(value) {
    this.setState({ text: value })
  }

  onEditorStateChange = editorState => {
    this.setState({
      editorState
    });
  };

  // componentDidMount = () => {
  //   // const contentBlock = htmlToDraft(`${draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))}<p>Added after render </p>`);
  //   // const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
  //   // const editorState = EditorState.createWithContent(contentState);
  //   // // const initialContent = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  //   // this.setState({
  //   //   editorState
  //   // });
  //   // const ele = document.getElementById('editor');
  //   // if (ele) {
  //   //   ele.focus();
  //   // }
  //   this.domEditor.focusEditor();
  //   const contentBlock = htmlToDraft(`${draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))}<p>Added after render </p>`);
  //   const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
  //   const editorState = EditorState.createWithContent(contentState);
  //   // const initialContent = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  //   this.setState({
  //     editorState
  //   });
  // }

  render() {
    const { editorState } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div id="editor">
          <Editor
            ref={this.setDomEditorRef}
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onEditorStateChange}
          />
        </div>
        <ReactQuill
          value={this.state.text}
          onChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
