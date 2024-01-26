import { Component } from '@angular/core';
import { User, UsersStoreType } from '../interfaces/users';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/modules/users/services/http.service';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { getUserDetails } from 'src/app/store/users/user.actions';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  initialUserVal = {
    id: 0,
    first_name: '',
    last_name: '',
    avatar: '',
    email: '',
  };
  userData: User = this.initialUserVal;
  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private location: Location,
    private store: Store<{ users: UsersStoreType }>
  ) {}
  ngOnInit(): void {
    const id: string = this.route.snapshot.params['id'];
    this.store
      .select('users')
      .subscribe(
        (users: UsersStoreType) => (this.userData = users.userDetails)
      );
    this.httpService
      .getUserDetails(parseInt(id))
      .subscribe((val: { data: User }) => {
        this.store.dispatch(getUserDetails({ userDetails: val.data }));
      });
  }
  ngOnDestroy() {
    this.store.dispatch(getUserDetails({ userDetails: this.initialUserVal }));
  }
  handleBackClick(e: Event) {
    this.location.back();
  }
}
