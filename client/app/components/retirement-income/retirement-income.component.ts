import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastComponent } from '../../shared/toast/toast.component';

@Component({
  selector: 'app-retirement-income',
  templateUrl: './retirement-income.component.html',
  styleUrls: ['./retirement-income.component.css']
})
export class RetirementIncomeComponent implements OnInit {

  isLoading = false;
  isEditing = false;
  constructor(private formBuilder: FormBuilder,
              public toast: ToastComponent) { }

  ngOnInit() {
  }

}
