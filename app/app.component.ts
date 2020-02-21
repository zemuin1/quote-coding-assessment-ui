import { Component } from '@angular/core';
import { WebSocketAPI } from './WebSocketAPI';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quote-coding-assessment';
  webSocketAPI: WebSocketAPI;
  request: any;
  public quotes: any[];
  public quote: any[];
  ngOnInit() {
    this.webSocketAPI = new WebSocketAPI(new AppComponent());
  }

  connect(){
    this.webSocketAPI._connect();
  }

  disconnect(){
    this.webSocketAPI._disconnect();
  }

  sendRequest(){
    this.webSocketAPI._send(this.request);
  }

  retrieveQuote(message){
    this.quotes= JSON.stringify(message).toString().split(",");
    console.log("Here are the quotes :: " + this.quotes);    
  }
}
