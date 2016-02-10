import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {Translation} from './translation';


describe('Translation Service', () => {

  beforeEachProviders(() => [Translation]);


  it('should ...', inject([Translation], (service:Translation) => {

  }));

});
