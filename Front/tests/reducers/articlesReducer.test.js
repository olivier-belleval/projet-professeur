import { expect } from 'chai';

import articlesReducer, { initialState } from '../../src/store/reducers/articles';

import { getArticlesSuccess } from '../../src/store/action/data-actions';

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
// Fonction de test
const sum = (a, b) => a + b;

// == Avec expect

// Série de tests - Chapitre de tests
describe('articles reducer', () => {
  // Test
  it('should be a function', () => {
    // expect de chai
    expect( articlesReducer ).to.be.a('function');
  });

  it('should return an object', () => {
    // expect de chai
    expect( articlesReducer() ).to.be.an('object');
  });

  it("reducer's return should be egal to initial state", () => {
    expect( articlesReducer() ).to.be.equal( initialState );
  });

});

describe('recipe reducer with actions', () => {
  // Test
  it('should write to state', () => {
    // expect de chai
    const fakeAction = getArticlesSuccess(fakeValue)
    const modiedState = articlesReducer(initialState, fakeAction)
    expect( modiedState ).to.be.eql({
      article_id: "",
      loading: false,
      error: '',
      list: fakeValue,
    });
  });

});

