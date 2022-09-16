import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../core/models/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    host = 'http://localhost:3001/api';
    constructor(private http: HttpClient) { }

    addProduct(data: any) {
        return this.http.post<{ message: any }>(`${this.host}/prod/add-prod`, data);
    }
    updateProduct(data: any) {
        return this.http.put<{ message: any }>(`${this.host}/prod/up-prod`, data);
    }
    uploadProduct(data: any, inc: any) {
        return this.http.post<{ message: any, path: any }>(`${this.host}/prod/file-upload${inc}`, data);
    }
    getProducts(): Observable<Product[]> {
        return this.http.get<{ rows: Product[] }>(`${this.host}/prod/get-prods`)
            .pipe(
                map(res => res.rows)
            );
    }
    getProductById(id: any) {
        return this.http.get<{ rows: any }>(`${this.host}/prod/get-prod/${id}`);
    }
    deleteProductById(id: any) {
        return this.http.get<{ message: any }>(`${this.host}/prod/del-prod/${id}`);
    }
}
