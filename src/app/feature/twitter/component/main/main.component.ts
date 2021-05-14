import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable, Subscription } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import {
    TwitterService,
    ITweetUserProfile,
    ITweetUserHeadlines,
    ITweetResponse,
} from '../../service';
import { Logger } from '../../../../core/logger.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
    public userProfileAsyncResult$: Observable<any>;
    public userFeedAsyncResult$: Observable<any>;
    public fileName = `MainComponent`;

    constructor(
        private twitterService: TwitterService,
        private logger: Logger
    ) {}

    ngOnInit(): void {
        this.userFeedAsyncResult$ = this.twitterData();
        this.logger.debug(this.fileName, `userFeeddata`);
        this.logger.debug(this.fileName, this.userFeedAsyncResult$);
        // tslint:disable-next-line: deprecation
    }
    public twitterData(): Observable<any> {
        // Observable.forkJoin (RxJS 5) changes to just forkJoin() in RxJS 6
        return forkJoin([
            this.twitterService.getUserProfile(),
            this.twitterService.getHomeTimeLine(),
            this.twitterService.getUserTimeLine(),
        ]).pipe(
            catchError(async (error) => this.onGetFeedError(error)),
            map((result) => tranformResult(result))
        );
    }

    onGetFeedError = (error): void => {
        this.logger.debug(this.fileName, `onGetFeedError`);
        this.logger.debug(this.fileName, error);
    }
}

export function tranformResult(result) {
    console.log(`tranformResult`);
    console.log(`MainComponent`, result);
    const userData: ITweetUserProfile = result[0];
   // const userData = null;
   // const getHeadLinesData = null;
    const getHeadLinesData: ITweetUserHeadlines[] = result[1];
    const getUserTimeLinesData: ITweetUserHeadlines[] = result[2];
    console.log({ user: userData, getHeadLines: getHeadLinesData, getUserTimeLines: getUserTimeLinesData  });
    return { user: userData, getHeadLines: getHeadLinesData, getUserTimeLines: getUserTimeLinesData };
}
