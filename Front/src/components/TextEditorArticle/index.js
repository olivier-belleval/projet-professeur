import React, {useEffect} from 'react';
import './style.scss';
import 'draft-js/dist/Draft.css';

const TextEditorArticle = ({changeField, title, content, handleArticleSubmit}) => {
  console.log('text edit');
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    changeField({ [name]: value });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleArticleSubmit();
  };

  return(
  <div className="text-editor-article">
    <form onSubmit={handleSubmit}>
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
    <button type="submit" className="text-editor-article-button" redirect="/admin/articles">Let's go baby ! </button>
  </form>
  </div>
)};

export default TextEditorArticle;


