import {Injectable} from 'angular2/core';
import {Http, Jsonp, URLSearchParams, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class Translation {

  constructor(private _http: Http){
    this.getAPIKey();
  }

  api_key: string = '';

  fetchTrad(sentence: string, from: string, to: string){
    if (sentence == '')
      return Observable.of('');
    let request = 'https://lc-api.sdl.com/translate';
    let headers = new Headers();
    headers.append('Authorization', `LC apiKey=${this.api_key}`);
    headers.append('Content-type', 'application/json')

    let body = JSON.stringify(
      {
	'from': from,
	'to': to,
	'text': sentence
      }
    );

    return this._http.post(request, body, new RequestOptions({headers}))
      .map(res => res.json().translation)
      .catch(this.logAndPassOn);
  }

  private getAPIKey(){
    let source = this._http.get('api.json')
      .map(res => res.json().api_key)
      .catch(this.logAndPassOn);
    
      source.subscribe(key => this.api_key = key);
  }

  private logAndPassOn (error: Error) {
      // in a real world app, we may send the server to some remote logging infrastructure
      // instead of just logging it to the console
      console.error(error);
      return Observable.throw(error);
  }
}
