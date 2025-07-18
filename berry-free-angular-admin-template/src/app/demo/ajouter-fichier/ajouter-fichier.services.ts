import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AjouterFichierService {
    public baseUrl = 'http://localhost:8081/api/fichiers';

    constructor(private http: HttpClient) { }
  getAllFichiers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`);
  }


    
}