import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { LifeStyle } from '../shared/models/life-style.model';

@Injectable()
export class LifeStyleService {

  constructor(private http: HttpClient) { }

  getLifeStyles(): Observable<LifeStyle[]> {
    return this.http.get<LifeStyle[]>('/api/lifeStyles');
  }

  countLifeStyles(): Observable<number> {
    return this.http.get<number>('/api/lifeStyles/count');
  }

  addLifeStyle(lifeStyle: LifeStyle): Observable<LifeStyle> {
    return this.http.post<LifeStyle>('/api/lifeStyle', lifeStyle);
  }

  getLifeStyle(lifeStyle: LifeStyle): Observable<LifeStyle> {
    return this.http.get<LifeStyle>(`/api/lifeStyle/${lifeStyle._id}`);
  }

  editLifeStyle(lifeStyle: LifeStyle): Observable<string> {
    return this.http.put(`/api/lifeStyle/${lifeStyle._id}`, lifeStyle, { responseType: 'text' });
  }

  deleteLifeStyle(lifeStyle: LifeStyle): Observable<string> {
    return this.http.delete(`/api/lifeStyle/${lifeStyle._id}`, { responseType: 'text' });
  }

}
