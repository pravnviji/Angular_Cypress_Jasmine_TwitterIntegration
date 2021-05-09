
import { Injectable } from '@angular/core';
import {HttpRequestService} from '../../../core/http/http-request.service';

@Injectable({
  providedIn: 'root'
})

export class TwitterService extends  HttpRequestService{
  
  async getTimeline() {
     await this.get('home_timeline').toPromise();
   }
  
   async getMentions() {
      await this.get('mention_timeline').toPromise();
   }
  
 }