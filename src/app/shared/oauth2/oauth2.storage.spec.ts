import {inject, TestBed} from '@angular/core/testing';
import {Oauth2Storage} from './oauth2.storage';

describe('Oauth2 Storage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [Oauth2Storage]});
  });

  it('should set data in sessionStorage', () => {
    var storage = new Oauth2Storage(sessionStorage);
    var savedObject = {name: "blubb"};
    storage.set('test',savedObject.toString() );

    expect(storage.get('test')).toBe(savedObject.toString());
  });
});
