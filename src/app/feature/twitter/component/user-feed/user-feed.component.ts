import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITweetUserProfile } from '../../service';
import { Logger } from '../../../../core/logger.service';
import { DomSanitizer,  } from '@angular/platform-browser';

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.scss']
})
export class UserFeedComponent implements OnInit {
  @Input() 
  public userfeeddata: any = null;
  public fullText: string;

  constructor(private logger: Logger,protected sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.logger.debug(`UserFeedComponent`, `Input value ${this.userfeeddata}` );
  }

  
  sanitizeUrl(contentHtml: string){
    const urlRegex = /(https?:\/\/[^ ]*)/;
    const url = contentHtml.match(urlRegex) ? contentHtml.match(urlRegex)[1] : null;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  


  sanitizeText(contentText: string){
    const urlRegex = /(?:https?|ftp):\/\/[\n\S]+/g;
    const text = contentText.replace(urlRegex, '');
    return this.sanitizer.bypassSecurityTrustHtml(text) ? this.sanitizer.bypassSecurityTrustHtml(text) : null;
  }

}
