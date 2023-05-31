import { Component } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent {

  public data: any = [


    {
      "ImgLink":"../../../assets/Content/department-1.jpg",
      "heading": "Cardiology",
      
      
    },
    {
      "ImgLink":"../../../assets/Content/department-2.jpg",
      "heading": "Dr. Liam",
      
      
    },
    {
      "ImgLink":"../../../assets/Content/department-3.jpg",
      "heading": "Dr. Noah",
    },
    {
      "ImgLink":"../../../assets/Content/department-4.jpg",
      "heading": "Dr. Emma",
     
    },
    {
      "ImgLink":"../../../assets/Content/department-5.jpg",
      "heading": "Dr. James",
      
    },
    {
      "ImgLink":"../../../assets/Content/department-6.jpg",
      "heading": "Dr. Olivia",
     
    },
    {
      "ImgLink":"../../../assets/Content/department-7.jpg",
      "heading": "Dr. Logan",
   
    },
    {
      "ImgLink":"../../../assets/Content/department-8.jpg",
      "heading": "Dr. Benjamin",
     
    },
    {
      "ImgLink":"../../../assets/Content/department-9.jpg",
      "heading": "Dr. Mason",
    
    },
  ]


}
