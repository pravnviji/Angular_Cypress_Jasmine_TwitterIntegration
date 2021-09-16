import { Component, OnInit, OnDestroy } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {
    TwitterService,
    ITweetResponse,
    TtweetUserProfile,
    TtweetUserHeadlines
} from '../../service';
import { untilDestroyed } from '../../../../core/until-destroyed';
import { Logger } from '../../../../core/logger.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
    public userFeedAsyncResult$: Observable<ITweetResponse>;
    public fileName = `MainComponent`;

    constructor(
        public twitterService: TwitterService,
        public logger: Logger
    ) {}
    
    ngOnDestroy(): void {
        throw new Error('Method not implemented.');
    }

    ngOnInit(): void {
        this.userFeedAsyncResult$ = this.twitterData();
        this.logger.debug(this.fileName, `userFeeddata`);
        this.logger.debug(this.fileName, this.userFeedAsyncResult$);
        // tslint:disable-next-line: deprecation
    }
    public twitterData(): Observable<ITweetResponse> {
        return forkJoin([
            this.twitterService.getUserProfile(),
            this.twitterService.getHomeTimeLine(),
            this.twitterService.getUserTimeLine(),
            this.twitterService.getUserMentionsTimeLine(),
        ]).pipe(
            untilDestroyed(this),
            catchError(async (error) => this.onGetFeedError(error)),
            map((result) => tranformResult(result))
        );
    }

    onGetFeedError = (error: any): void => {
        this.logger.debug(this.fileName, `onGetFeedError`);
        this.logger.debug(this.fileName, error);
    }
}

// tslint:disable-next-line: typedef
export function tranformResult(result: any) {
    console.log(`tranformResult`);
    console.log(`MainComponent`, result);
    const userData: TtweetUserProfile = result[0];
    const getHeadLinesData: TtweetUserHeadlines = result[1];
    const getUserTimeLinesData: TtweetUserHeadlines = result[2];
    const getMentionTimeLinesData: TtweetUserHeadlines = result[3];
    console.table({
        user: userData,
        getHeadLines: getHeadLinesData,
        getUserTimeLines: getUserTimeLinesData,
        getMentionTimeLines: getMentionTimeLinesData,
    });
    return {
        user: userData,
        getHeadLines: getHeadLinesData,
        getUserTimeLines: getUserTimeLinesData,
        getMentionTimeLines: getMentionTimeLinesData,
    };
}
