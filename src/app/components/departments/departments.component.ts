import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DepartmentsService } from '../../services/departments.service';
import { Department } from '../../interfaces/department';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss'],
})

export class DepartmentsComponent implements OnInit{
  departments: Department[] = [];

  constructor(
    private departmentsService: DepartmentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.departmentsService.getDepartments().subscribe( departments => {
      this.departments = departments;
    });
  }

  goToDepartment(departmentId: string): void {
    this.router.navigate(['./timesheet', {id: departmentId}]);
  }
}
