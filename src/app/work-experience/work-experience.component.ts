import { Component, OnInit } from '@angular/core';
import { workExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  experienceList: workExperience[] = [
    {
      role: "Associate Software Developer",
      company: "Gupshup.io",
      duration: "2021 - present",
      description: [`I am working full time in Solutions Development of various media chatbots developments with Nodejs, JavaScript, NLP APIs, and Database.`]
    },
    {
      role: "Web Development - Internship",
      company: "The Spark Foundation",
      duration: "April 2021 to May 2021",
      description: [`Developed a basic banking web application for transactions and storing all transaction records with SQL database.`]
    },
    {
      role: "Test Engineer - Internship",
      company: "Millennium technologies",
      duration: "December 2019 to February 2020",
      description: [`I worked full-time as an intern, Tested embedded boards with programming and fault diagnosis of card produced.`]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
