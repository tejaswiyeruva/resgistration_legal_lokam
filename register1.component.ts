import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormValidationsService } from '../service/form-validations.service';
@Component({
  selector: 'app-register1',
  templateUrl: './register1.component.html',
  styleUrls: ['./register1.component.scss']
})
export class Register1Component implements OnInit {
  loginForm: FormGroup;
  selectedOption: string | null = null;
  showLawyerFields: boolean = false;
  showClientFields: boolean = false;
  lawyerList:any[] = [
    {key:'Lawyer'},
    {key:'Client'},
  ]
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNo: ['', Validators.required],
      dob: ['', Validators.required],
      age: ['', Validators.required],
      city: ['', Validators.required],
      district: [''],
      state: ['', Validators.required],
      gender: ['', Validators.required],
      role: ['', Validators.required],
      college: [''],
      degree: [''],
      experience: [''],
      casesDealt: [''],
      lawCategory: [''],
      occupation: [''],
      activeCases: [''],
      terms: [false, Validators.requiredTrue]
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onRoleChange(event: any) {
    this.selectedOption = event.target.value;
    this.showLawyerFields = this.selectedOption === 'Lawyer';
    this.showClientFields = this.selectedOption === 'Client';
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Handle form submission
      console.log(this.loginForm.value);
    }
  }


  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isMenuOpen = false;
  }
  }
  


