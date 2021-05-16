import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpRequestService } from '../../../core/http/http-request.service';
import { ITweetUserProfile, ITweetUserHeadlines } from './twitter-feed.interface';
import { Logger } from '../../../core/logger.service';

@Injectable({
    providedIn: 'root',
})
export class TwitterService {
    // tslint:disable-next-line: variable-name
    constructor(private http: HttpRequestService, private logger: Logger) {}

    getUserProfile(): Observable<ITweetUserProfile> {
        this.logger.debug('getUserProfile');
        return this.http
            .get(`profile_info`)
            .pipe(map((result) => this.mapGetUserProfile(result)));
    }

    getHomeTimeLine(): Observable<ITweetUserHeadlines[]> {
        this.logger.debug('getHomeTimeLine');
        return this.http
            .get(`home_timeline`)
            .pipe(map((result) => this.mapGetHomeTimeline(result)));
    }

    getUserTimeLine(): Observable<ITweetUserHeadlines[]> {
        this.logger.debug('getUserTimeLine');
        return this.http
            .get(`user_timeline`)
            .pipe(map((result) => this.mapGetHomeTimeline(result)));
    }

    getUserMentionsTimeLine(): Observable<ITweetUserHeadlines[]> {
        this.logger.debug('getUserMentionsTimeLine');
        return this.http
            .get(`mentions_timeline`)
            .pipe(map((result) => this.mapGetHomeTimeline(result)));
    }

    postUserTweet(req): Observable<any> {
        this.logger.debug('postUserTweet', req);
        return this.http.post(`post_tweet`, req);
    }

    mapGetUserProfile(result): ITweetUserProfile {
        this.logger.debug('mapGetUserProfile', result);
        return (result.resp && result.resp.statusCode === 200) ? result.data.data : null;
    }

    mapGetHomeTimeline(result): ITweetUserHeadlines[] {
        this.logger.debug('mapGetHomeTimeline', result);
        return (result.resp && result.resp.statusCode === 200) ? result.data : null;
    }

}
