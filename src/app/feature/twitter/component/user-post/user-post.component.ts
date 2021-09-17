import { Component, Input, OnInit } from '@angular/core';
import { TwitterService, ITweetUserHeadlines, TpostTweet } from '../../service';
import { Logger } from '../../../../core/logger.service';

@Component({
    selector: 'app-user-post',
    templateUrl: './user-post.component.html',
    styleUrls: ['./user-post.component.scss'],
})
export class UserPostComponent implements OnInit {
    @Input() 
    public userheadlines: ITweetUserHeadlines;
    @Input() 
    public usertimelines: ITweetUserHeadlines;
    @Input()
    public usermentionslines: ITweetUserHeadlines;
    public tweet: string;
    public fileName = `UserPostComponent`;


    constructor(
        public twitterService: TwitterService,
        public logger: Logger
    ) {}

    ngOnInit(): void {
        this.logger.debug(this.fileName, `userFeeddata`);
        this.logger.debug(this.fileName, this.userheadlines);
    }

    postTweet = () => {
        this.logger.debug(this.fileName, `post tweet`);
        this.logger.debug(this.fileName, this.tweet);
        const reqObj: TpostTweet = { status: this.tweet};
        this.twitterService.postUserTweet(reqObj).subscribe(this.postedTweet);
    }

    postedTweet = <T>(result: T): void => {
      this.logger.debug(this.fileName, `postedTweet`);
      this.logger.debug(this.fileName, result);
      this.showModal(result);
    }

     showModal = (result) => {
        this.tweet = '';
        if (result?.data && result.resp?.statusCode === 200){
            alert(`Successfully posted. Please refresh the page`);
        } else{
            alert(` Sorry Content already posted | Server configuration is not correct`);
        }
    }
    
}
