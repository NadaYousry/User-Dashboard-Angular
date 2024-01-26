import { Component } from '@angular/core';
import { HttpService } from 'src/app/modules/users/services/http.service';
import { User, UsersResponseData, UsersStoreType } from '../interfaces/users';
import { Router } from '@angular/router';
import { Pagination } from '../interfaces/pagination';
import { Store } from '@ngrx/store';
import { changeView, getUsersList } from 'src/app/store/users/user.actions';
import { LoaderService } from 'src/app/services/loader.service';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  constructor(
    private httpService: HttpService,
    private store: Store<{ users: UsersStoreType }>,
    private loaderService: LoaderService,
    private cacheService: CacheService
  ) {}
  isLoading: boolean = true;
  usersList: User[] = [];
  buttons!: number[];
  paginationData!: Pagination;
  searchId: string = '';
  storedData: User[] = [];
  view: string = 'grid';

  ngOnInit() {
    this.loaderService.stateLoading.subscribe((val: boolean) => {
      this.isLoading = val;
    });

    this.store.select('users').subscribe((users: UsersStoreType) => {
      this.usersList = users.usersList;
      this.view = users.view;
    });
    this.getUsersList(1);
  }

  getUsersList(page: number = 1) {
    this.httpService.getUsersList(page).subscribe((val: UsersResponseData) => {
      this.store.dispatch(getUsersList({ usersList: val.data }));
      this.paginationData = {
        page: val.page,
        total_pages: val.total_pages,
        total: val.total,
        per_page: val.per_page,
      };
      this.storedData = val.data;

      this.buttons = Array(val.total_pages)
        .fill(0)
        .map((x, i) => i);
    });
  }
  handlePaginationChange(page: number = 1) {
    this.getUsersList(page);
  }

  changeSearchHandler(e: string) {
    this.store.dispatch(
      getUsersList({
        usersList: e
          ? this.usersList.filter((user: User) => user.id === parseInt(e))
          : this.storedData,
      })
    );
    // ******************************* we can handle search also by calling same api with id param *************************//
    //  this.httpService
    //    .getUsersList(this.paginationData.page, this.searchId)
    //    .subscribe((val:any) => {
    //      this.store.dispatch(getUsersList({ usersList: [val.data] }));
    //    })
  }
  handleButtonClick(e: any) {
    this.store.dispatch(
      changeView({
        view: e,
      })
    );
  }
}
