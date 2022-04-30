import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  toggleSecret = false
  serverClicked = []
  onClickSecret(){
    this.toggleSecret = !this.toggleSecret
    console.log(this.serverClicked);
    
    this.serverClicked.push(this.serverClicked.length + 1)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
