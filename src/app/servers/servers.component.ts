import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'Server Not Created';
  serverName = '';
  nameCreated = false;
  servers = ['TestServer', 'TestServer2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.nameCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was Created! Name is' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
    // console.log(event.target.value);
  }

  //Assignment 2
  userName = '';
  allowb = false;
  onEmpty() {
    this.userName = '';
  }

  //assiggnmnert 3
  dis = false;
  cLog = [];
  onDisplay() {
    this.cLog.push(this.cLog.length + 1);
    if (this.dis == false) {
      this.dis = true;
    } else {
      this.dis = false;
    }
  }
}
