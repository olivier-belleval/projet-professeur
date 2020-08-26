import React from 'react';
import { Redirect } from 'react-router-dom';
import './style.scss';
import 'draft-js/dist/Draft.css';

const TextEditorArticle = ({changeField, title, content, handleArticleSubmit, send}) => {
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
    <button type="submit" className="text-editor-article-button"> 
    Let's go baby !</button>
    {send && <Redirect to="/admin/articles" />}
  </form>
  </div>
)};

export default TextEditorArticle;


