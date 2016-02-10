import {Component} from 'angular2/core';
import {Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {TradApp} from '../../trad';
import {Nothing} from '../../components/nothing/nothing';

@RouteConfig([
  new Route({path: '/', component: TradApp, name: 'Translator'}),
  new Route({path: '/other', component: Nothing, name: 'Nothing'})
])
@Component({
  selector: 'root',
  templateUrl: 'app/components/root/root.html',
  styleUrls: ['app/components/root/root.css'],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class Root {

  constructor() {}

}
