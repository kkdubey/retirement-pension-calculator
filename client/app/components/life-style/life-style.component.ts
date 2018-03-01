import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { LifeStyleService } from '../../services/life-style.service';
import { ToastComponent } from '../../shared/toast/toast.component';
import { LifeStyle } from '../../shared/models/life-style.model';

@Component({
  selector: 'app-life-style',
  templateUrl: './life-style.component.html',
  styleUrls: ['./life-style.component.css']
})
export class LifeStyleComponent implements OnInit {

  lifeStyle = new LifeStyle();
  lifeStyles: LifeStyle[] = [];
  isLoading = true;
  isEditing = false;

  addLifeStyleForm: FormGroup;
  name = new FormControl('', Validators.required);
  age = new FormControl('', Validators.required);
  weight = new FormControl('', Validators.required);

  constructor(private lifeStyleService: LifeStyleService,
              private formBuilder: FormBuilder,
              public toast: ToastComponent) { }

  ngOnInit() {
    this.getLifeStyles();
    this.addLifeStyleForm = this.formBuilder.group({
      name: this.name,
      age: this.age,
      weight: this.weight
    });
  }

  getLifeStyles() {
    this.lifeStyleService.getLifeStyles().subscribe(
      data => this.lifeStyles = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addLifeStyle() {
    this.lifeStyleService.addLifeStyle(this.addLifeStyleForm.value).subscribe(
      res => {
        this.lifeStyles.push(res);
        this.addLifeStyleForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(lifeStyle: LifeStyle) {
    this.isEditing = true;
    this.lifeStyle = lifeStyle;
  }

  cancelEditing() {
    this.isEditing = false;
    this.lifeStyle = new LifeStyle();
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the LifeStyles to reset the editing
    this.getLifeStyles();
  }

  editLifeStyle(lifeStyle: LifeStyle) {
    this.lifeStyleService.editLifeStyle(lifeStyle).subscribe(
      () => {
        this.isEditing = false;
        this.lifeStyle = lifeStyle;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  deleteLifeStyle(lifeStyle: LifeStyle) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.lifeStyleService.deleteLifeStyle(lifeStyle).subscribe(
        () => {
          const pos = this.lifeStyles.map(elem => elem._id).indexOf(lifeStyle._id);
          this.lifeStyles.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }

}
