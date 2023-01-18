import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationList: Education[] = [
    {
      institute: "Fr.CRCE Bandra - Mumbai University",
      course: "BE",
      duration: "2016-2021",
      score: "6.55 CGPA"
    },
    {
      institute: "T.P Bhatia College (Science) - Mumbai University",
      course: "HSC",
      duration: "2014-2016",
      score: "73.38 %"
    },
    {
      institute: "SES School - Mumbai University",
      course: "SSC",
      duration: "2014",
      score: "90.04 %"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
