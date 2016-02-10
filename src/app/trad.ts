import {Component, OnInit} from 'angular2/core';
import {Control} from 'angular2/common';
import {Translation} from './services/translation/translation';
import {Observable} from 'rxjs/Observable';
import {LanguagePicker} from './components/language-picker/language-picker';

@Component({
  selector: 'trad-app',
  providers: [Translation],
  templateUrl: 'app/trad.html',
  directives: [LanguagePicker],
  pipes: []
})
export class TradApp implements OnInit {
  constructor(private translationService: Translation){}

  private inputText: Control = new Control('');
  private translation: Observable<string>;
  private inputCodeLang: string;
  private outputCodeLang: string;

  //-------

  ngOnInit(){
    // this.translate();
    this.translation = this.inputText.valueChanges
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((sentence:string) => this.translationService.fetchTrad(sentence, this.inputCodeLang, this.outputCodeLang))
  }
}
