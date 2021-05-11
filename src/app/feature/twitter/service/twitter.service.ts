import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { HttpRequestService } from '../../../core/http/http-request.service';
import { ITweetUserProfile } from './twitter-feed.interface';
import { Logger } from '../../../core/logger.service';

@Injectable({
    providedIn: 'root',
})
export class TwitterService {
    // tslint:disable-next-line: variable-name
    constructor(private _logger: Logger, private _http: HttpRequestService) {}
    async getTimeline() {
        await this._http.get('home_timeline').toPromise();
    }

    async getMentions() {
        await this._http.get('mention_timeline').toPromise();
    }

    getUserProfile(): Observable<any> {
        this._logger.debug('getUserProfile');
        return this._http.get(`profile_info`).pipe(tap(mapGetUserProfile));
    }

    postUserTweet(req): Observable<any> {
        this._logger.debug('postUserTweet', req);
        return this._http.post(`post_tweet`, req);
    }
}

export const mapGetUserProfile = (result): ITweetUserProfile =>
    !result.length ? null : result;
