import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class ArtableService {
  private apiKey: string = environment.apiKey;
  private base: string = environment.base;
  constructor(private http: HttpClient) {
  }

  public getPosts(): Observable<Object[]> {
    const headers = { 'Authorization': `Bearer ${this.apiKey}`, 'Content-Type': 'application/json' };
    return this.http.get(`https://api.airtable.com/v0/${this.base}/tblgcwFUgGlf85Xw7?`,{headers}).pipe(
      map((res: any) => res.records)
    );

  }
  public postPosts(data:any): Observable<Object[]> {
    const headers = { 'Authorization': `Bearer ${this.apiKey}`, 'Content-Type': 'application/json' };
    return this.http.post(`https://api.airtable.com/v0/${this.base}/tblgcwFUgGlf85Xw7`,data,{headers}).pipe(
      map((res: any) => res.records)
    );
  }
}
