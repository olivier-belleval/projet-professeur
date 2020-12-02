/**
 * Import
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

// Variable de test
const fakeValue = [{
  article_id:5,
  article_title:"Voyage scolaire",
  article_slug:"voyage-scolaire",
  article_excerpt:"Lorem ipsum dolor sit amet,",
  article_content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  article_author:null,
  class_username:null,
}];


// Components
import ArticlesView from '../../src/components/ArticlesView';

// préparation de should
describe('ArticlesView', () => {
  it('should have 0 card if list is empty', () => {
    const comp = shallow(<ArticlesView
      getArticles = {() => {}}
      closeMenu = {() => {}}
      username = {'toto'}
      teacher = {true}
      isLogged = {true}
      list={ [] }
    />);
    expect(comp.find('Article').length === 0)
  });

  it('should have 1 card if list contains 1 object', () => {
    const comp = shallow(<ArticlesView
      getArticles = {() => {}}
      closeMenu = {() => {}}
      username = {'toto'}
      teacher = {true}
      isLogged = {true}
      list={ fakeValue }
    />);
   
    expect(comp.find('Article').length === 1)
    //assert.equal(comp.find(ArticlesView).length, 1)
  });

});
