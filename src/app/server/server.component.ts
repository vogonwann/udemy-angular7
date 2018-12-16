import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverID: number;
  serverStatus: string;

  constructor() {
    this.serverID = 10;
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }

  getColor(): string {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
