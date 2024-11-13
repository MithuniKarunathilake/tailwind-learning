import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  public user: any = {
    name: "",
    address: "",
    email: "",
    password: "",
    dob: "",
    contactNumber: ""
  };

  constructor(private http: HttpClient) {
    this.loadTable();
  }

  public addUser() {
    this.http.post("http://localhost:8080/student/add-student", this.user).subscribe((data) => {
      alert("User Added!!!!");
    })
    this.clearFields();
  }

  clearFields() {
    this.user = {
      name: '',
      address: '',
      email: '',
      password: '',
      dob: '',
      contactNumber: ''
    };
  }

  public userList: any = [];

  loadTable() {
    this.http.get("http://localhost:8080/student/get-student").subscribe(data => {
      console.log(data);
      this.userList = data;
    })
  }

  deleteUserById(id: any) {
    console.log(id);

    this.http.delete(`http://localhost:8080/student/delete-student/${id}`).subscribe(data => {
      alert("User deleted !!!!");
      this.loadTable();
    })

  }
  public userTemp: any = {}
  updateUser(user: any) {
    console.log(user);
    this.userTemp = user;

  }

  saveUser() {
    this.http.put("http://localhost:8080/student/update-student", this.userTemp).subscribe(data => {
      alert("User Updated!!!!!")
    })
  }

}
