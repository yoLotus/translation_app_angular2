import {Component, EventEmitter, OnInit, Input} from 'angular2/core';
import {Control} from 'angular2/common';
import {Observable} from 'rxjs/Observable';

interface Language {
  code: string,
  fullName: string
}

@Component({
  selector: 'language-picker',
  templateUrl: 'app/components/language-picker/language-picker.html',
  styleUrls: ['app/components/language-picker/language-picker.css'],
  outputs: ['languageSelected'],
  providers: [],
  directives: [],
  pipes: []
})
export class LanguagePicker implements OnInit{

  @Input() initLang: string;
  
  constructor() {}
  
  languageSelected: EventEmitter<string> = new EventEmitter<string>();

  private choice: Control = new Control('');
  private code: Observable<string>;

  private languages: Array<Language> = [
    {code: 'eng', fullName: 'English'},
    {code: 'fra', fullName: 'French'},
    {code: 'ger', fullName: 'German'},
    {code: 'spa', fullName: 'Spain'},
    {code: 'ita', fullName: 'Italian'},
    {code: 'pol', fullName: 'Polish'}
  ];

  ngOnInit(){
    this.choice.valueChanges
      .subscribe((value) => this.selectLanguage(value));
    this.choice.updateValue(this.initLang);
  }
  
  private selectLanguage(value: string){
    this.languageSelected.emit(value);
  }
}
