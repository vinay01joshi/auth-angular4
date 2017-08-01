import { Injectable } from '@angular/core';
import { AuthHttp } from "angular2-jwt";
import { Http, Response, RequestOptions ,Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class OrderService {

  constructor(private authHttp: AuthHttp ,private http: Http) { }

  getOrders(){     
    return this.authHttp.get('/api/orders')
      .map(res => res.json());
  }
}
