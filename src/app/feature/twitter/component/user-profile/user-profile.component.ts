import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITweetUserProfile } from '../../service';
import { Logger } from '../../../../core/logger.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserprofileComponent implements OnInit {
  @Input() 
  public userprofiledata: Observable<ITweetUserProfile> = null;

  constructor(private logger: Logger) { }

  ngOnInit(): void {
    this.logger.debug(`UserprofileComponent`, `Input value ${this.userprofiledata}` );
  }
}
