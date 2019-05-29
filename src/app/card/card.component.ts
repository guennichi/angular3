import { Component, OnInit } from '@angular/core';
import{ ApiService} from "../api.service"

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  users: Object = [];
  constructor(private api: ApiService) { }

  ngOnInit() {
  
  this.api.getUsers().subscribe(data => {
    this.users = data
    console.log(data);
  }
);
}
}
