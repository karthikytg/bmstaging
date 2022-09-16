import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReferralsService {

    host = 'http://localhost:3001/api';
    constructor(private http: HttpClient) { }
  
    addReferrals(data: any) {
        return this.http.post<{message: any}>(`${this.host}/refer/add-ref`, data);
    }
    updateRefer(data: any) {
        return this.http.put<{message: any}>(`${this.host}/refer/up-ref`, data);
    }
    deactiveRefer(data: any) {
        return this.http.put<{message: any}>(`${this.host}/refer/up-deact`, data);
    }
    getReferrals() {
        return this.http.get<{rows: any, count: any}>(`${this.host}/refer/get-ref`);
    }
    getReferralById(id: any) {
        return this.http.get<{rows: any}>(`${this.host}/refer/get-ref-id/${id}`);
    }
    deleteReferralsById(id: any) {
        return this.http.get<{message: any}>(`${this.host}/refer/del-ref/${id}`);
    }
}
