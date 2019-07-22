import { Injectable } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private request: RequestService) { }

  login(login: string): Observable<IUser> {
	  return this.request.get<IUser>('/user/' + login);
  }
  register(register: object): Observable<IUser> {
	  return this.request.create<IUser>('/user/', register);
  }
  findUser(username: string): Observable<IUser> {
    return this.request.getUser<IUser>('/user/' + username);
  }
  delete(username: string): Observable<IUser> {
    return this.request.deleteUser<IUser>('/user/' + username)
  }

}
