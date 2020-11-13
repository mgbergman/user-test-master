import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  searchCriteria: string = "";
  tableStyle : string = "table table-sm";

  constructor(
    private userscv: UserService,
   

  ) { }

  ngOnInit(): void {
    this.userscv.list().subscribe(
      res => { console.log(res); 
      this.users= res as User[]
      },
      err => { console.error(err); }
    );


  }

}
