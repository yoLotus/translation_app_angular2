import {bootstrap} from 'angular2/platform/browser';
import {Root} from './app/components/root/root';
import {HTTP_PROVIDERS, JSONP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import 'rxjs/Rx';


bootstrap(Root, [HTTP_PROVIDERS, JSONP_PROVIDERS, ROUTER_PROVIDERS]);
