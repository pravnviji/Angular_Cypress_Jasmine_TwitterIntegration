import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  private _header: HttpHeaders = new HttpHeaders({ responseType: 'JSON' });

  constructor(private _http: HttpClient) { }

  /**
   * Gets http request service
   * @param url 
   * @param [header] 
   * @returns get 
   */
  public get(path: string, header?: object): Observable<Object> {
    console.log(environment.serverUrl);
    header = header ?? this._header;
    const url = environment.serverUrl + path;
    return this._http.get(url, header);
  }

  /**
   * Posts http request service
   * @param url 
   * @param body 
   * @param [header] 
   * @returns post 
   */
  public post(path: string, body: object, header?: object): Observable<Object> {
    header = header ?? this._header;
    const url = environment.serverUrl + path;
    return this._http.post(url, body, header);
  }

  /**
   * Puts http request service
   * @param url 
   * @param [body] 
   * @param [header] 
   * @returns put 
   */
  public put(path: string, body?: object, header?: object): Observable<Object> {
    header = header ?? this._header;
    const url = environment.serverUrl + path;
    return this._http.put(url, body, header);
  }

  /**
   * Deletes http request service
   * @param url 
   * @param [header] 
   * @param [requestBody] 
   * @returns delete 
   */
  public delete(path: string, header?: object, requestBody?: object): Observable<Object> {
    const options = {
      headers: header === undefined ? this._header : new HttpHeaders(header as { [key: string]: string | string[] }),
      body: requestBody,
    };
    const url = environment.serverUrl + path;
    return this._http.request('delete', url, options);
  }
}
