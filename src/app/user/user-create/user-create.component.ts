import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User;

  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void{
    console.log(this.user)
    this.usersvc.change(this.user).subscribe(
      res => {
        console.debug("User Change:", res);
        this.router.navigateByUrl("/users/change")
        this.user = res;
      },
      err => { console.error(err); } 
    )
}
  

  ngOnInit(): void {
  }

}
