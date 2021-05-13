import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TwitterService, ITweetUserProfile } from '../../service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public userProfileAsyncResult$: Observable<ITweetUserProfile> ;

  constructor(private twitterService: TwitterService) { }

  ngOnInit(): void {
    this.userProfileAsyncResult$ = this.twitterService.getUserProfile();
  }

}
