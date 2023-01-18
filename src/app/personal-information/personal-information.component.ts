import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

  myData: string[][] = [
    ["Name", "Jatin Dodiya"], 
    ["DOB", '15/Feb/1999'], 
    ['Work Exp.', '2 Years'], 
    ['Education', 'B.E (Electronics)'], 
    ['Interests', 'Formula 1']
  ];

  aboutMe: string[] = [
    'Hi, I am Software Engineer with 2 years of experience in software industry.',
    'worked as associate software developer in Gupshup.io for varios chatbot releted projects and gupshup platform.',
    'Deliverd all the product within the deadlines, always eager to learn new technologies.'
  ];





  constructor() { }

  ngOnInit(): void {

  }

}
