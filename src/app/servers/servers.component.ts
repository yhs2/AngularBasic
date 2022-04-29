import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  allowNewUser = false;
  serverCreationStatus = "No Server Was Created"
  serverName = " sample server "
  userName = ""
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  
  


  onCreateServer(){
    this.serverCreationStatus= "Server Created, and the name is" + this.serverName
  }

  onUpdateServerName(event: any){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onClickUserName(){
    this.userName = ""
  }

  ngOnInit(): void {
  }

}

