import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  //private baseUrl = 'http://localhost:8083/employees/';
  private baseUrl = 'http://ec2-13-127-69-46.ap-south-1.compute.amazonaws.com:8084/employees/';

  constructor(private http:HttpClient) { }

  getStudentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'getAllEmpolyee');
  }

  createStudent(student: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'save-employee', student);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + 'delete-student/' + id, { responseType: 'text' });
  }

  getStudent(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/student/${id}`);
  }

  updateStudent(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl} + 'update-student' + /${id}`, value);
  }
  
}                                           