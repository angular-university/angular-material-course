import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';

const SAMPLE_TEXT= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim quam, semper et sodales in, aliquam vitae leo. Suspendisse quis eleifend nisl. Nunc ante ligula, ultricies sed quam et, consectetur laoreet enim. Praesent scelerisque velit efficitur blandit dapibus. Etiam vulputate, lacus eu vestibulum faucibus, leo odio consectetur sem, nec rhoncus nulla diam vitae ante. Aenean lacinia porta quam, vel pretium mi. Cras sed leo ut dui gravida faucibus ut at nibh. In hac habitasse platea dictumst. Praesent finibus tempor lobortis. Integer ut urna lacus. Fusce imperdiet dolor efficitur erat facilisis venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam non eros efficitur, accumsan est vel, pulvinar sem.";


@Component({
  selector: "create-course-step-1",
  templateUrl:"create-course-step-1.component.html",
  styleUrls: ["create-course-step-1.component.scss"]
})
export class CreateCourseStep1Component {

  form = this.fb.group({
    title: ['', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(60)
    ]],
    releasedAt: [new Date(1990,0,1), Validators.required],
    category: ['BEGINNER', Validators.required],
    courseType: ['premium', Validators.required],
    downloadsAllowed: [false, Validators.requiredTrue],
    longDescription: [SAMPLE_TEXT, [Validators.required, Validators.minLength(3)]]
  });

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {

      const date = cellDate.getDate();

      if (view == 'month') {
          return (date == 1) ? 'highlight-date' : "";
      }

      return "";
  }

  constructor(private fb: FormBuilder) {

  }

  get courseTitle() {
    return this.form.controls['title'];
  }

}
