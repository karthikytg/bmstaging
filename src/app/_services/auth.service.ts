import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    host = environment.apiUrl;
    constructor(private http: HttpClient) { }

    signUpUser(data: any) {
        return this.http.post<{ message: any }>(`${this.host}/user/sign-up`, data);
    }
    login(data: any) {
        return this.http.post<{ message: any }>(`${this.host}/user/login`, data);
    }
    updateRefer(data: any) {
        return this.http.put<{ message: any }>(`${this.host}/refer/up-ref`, data);
    }
    blockOrUnblockUser(data: any) {
        return this.http.put<{ message: any }>(`${this.host}/user/block-user`, data);
    }
    getUsersList() {
        return this.http.get<{ rows: any, count: any }>(`${this.host}/user/get-users`);
    }
    getUserById(id: any) {
        return this.http.get<{ rows: any }>(`${this.host}/user/get-user-id/${id}`);
    }
    deleteUserById(id: any) {
        return this.http.get<{ message: any }>(`${this.host}/user/del-user/${id}`);
    }
}
