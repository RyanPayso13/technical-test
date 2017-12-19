import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/RX';

@Injectable()
export class MarvelListService {

  publicKey: string;
  api: string;

  constructor(private http: HttpClient) {
    this.publicKey = '731b55ca624bbfccee6945c55e7a81b8';
    this.api = `http://gateway.marvel.com/v1/public/characters?apikey=${this.publicKey}`;
  }

  getCharacterList(): Observable<any> {
    return this.http.get(this.api);
}

}
