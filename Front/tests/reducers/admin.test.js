import { expect } from 'chai';

import adimnReducer, { initialState }  from '../../src/store/reducers/admin'
import { GET_CLASSES } from '../../src/store/action/user'

// Série de tests - Chapitre de tests
describe('Adimn reducer', () => {
  // Test
  it('should be a function', () => {
    expect( adimnReducer ).to.be.a('function');
  });

  it('should return an object', () => {
    expect( adimnReducer() ).to.be.an('object');
  });

  it("reducer's return should be egal to initial state", () => {
    expect( adimnReducer() ).to.be.equal( initialState );
  });

});


