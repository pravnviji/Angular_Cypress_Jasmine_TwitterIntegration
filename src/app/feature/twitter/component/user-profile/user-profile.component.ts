import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TwitterService, ITweetUserProfile } from '../../service';
import { Logger } from '../../../../core/logger.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserprofileComponent implements OnInit {
  public userProfileAsyncResult$: Observable<ITweetUserProfile> ;

  constructor(private _twitterService: TwitterService, private _logger: Logger) { }

  ngOnInit(): void {
    this.getUserProfile();
  }

  async getUserProfile(){
    this.userProfileAsyncResult$ = this._twitterService.getUserProfile();
    this._logger.debug(`UserprofileComponent`, this.userProfileAsyncResult$ );
  }

}
