import React, {useEffect} from 'react';
import './style.scss';
import 'draft-js/dist/Draft.css';

const TextEditorArticle = ({changeField, title, content, excerpt}) => {
  console.log('text edit');
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    changeField({ [name]: value });
  };
 
  return(
  <div className="text-editor-article">
    <form>
    <input 
    name="title" 
    value={title}
    placeholder='Titre' 
    onChange={handleInputChange} 
    className="input-title"
    />
    <textarea 
    name="content" 
    value={content}
    placeholder='Contenu de mon  article...' 
    onChange={handleInputChange} 
    className="input-content"
    />
    <textarea 
    name="excerpt" 
    value={excerpt}
    placeholder='Résumé de mon  article...' 
    onChange={handleInputChange} 
    className="input-excerpt"
    />
    <button type="submit" className="text-editor-article-button">Let's go baby ! </button>
  </form>
  </div>
)};

export default TextEditorArticle;


