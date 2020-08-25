import React, {useEffect} from 'react';
import './style.scss';
import { Editor, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';

const TextEditorArticle = ({changeField, editorState}) => {
  console.log('text edit');

  const editor = React.useRef(null);

  function focusEditor() {
    editor.current.focus();
  }

  useEffect(() => {
    focusEditor()
  }, []);
  return(
  <div className="text-editor-article" onClick={focusEditor}>
    <Editor 
    ref={editor}
      editorState={editorState}
      onChange={changeField}
    >
    <input type="text"/>
    </Editor>
  </div>
)};

export default TextEditorArticle;


