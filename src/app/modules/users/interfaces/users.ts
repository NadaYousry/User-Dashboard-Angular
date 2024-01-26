import { Pagination } from './pagination';

export interface UsersResponseData extends Pagination {
  data: User[];
}
export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
export interface UsersStoreType {
  usersList: User[];
  userDetails: User;
  view: string;
}
