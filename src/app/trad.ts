import {Component} from 'angular2/core';


@Component({
  selector: 'trad-app',
  providers: [],
  templateUrl: 'app/trad.html',
  directives: [],
  pipes: []
})
export class TradApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
