import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {


  constructor(private router: Router) {

  }

  public Appoinments: any = [
    {		
      "Photo": "../../../assets/appoinment_Profile/user-40-1.jpg",
      "Name": "Liam",
      "Email": "liam@gmail.com",
      "Date": "18 Dec 2018",
      "VisitTime": "10:15 - 10:30	",
      "Number": "0126596578",
      "Doctor": "Dr. Sophie",
      "Injury": "allergy",
    },
    {
      // "Title":"",
      "Photo": "../../../assets/appoinment_Profile/user-40-2.jpg",
      "Name": "Emma",
      "Email": "emma@gmail.com",
      "Date": "5 Dec 2018	",
      "VisitTime": "9:00 - 9:30",
      "Number": "0126596452",
      "Doctor": "0126596452",
      "Injury": "	arthritis",
    },
    {	
      // "Title":"",
      "Photo": "../../../assets/appoinment_Profile/user-40-3.jpg",
      "Name": "Olivia",
      "Email": " olivia@gmail.com",
      "Date": " 13 Oct 2018",
      "VisitTime": "12:00 - 12:45	",
      "Number": "0126598853",
      "Doctor": "Dr. Noah",
      "Injury": "depression",
    },
    {	
     
     	
      
      	
      // "Title":"",
      "Photo": "../../../assets/appoinment_Profile/user-40-4.jpg",
      "Name": "Ava",
      "Email": " ava@gmail.com",
      "Date": " 26 Dec 2018",
      "VisitTime": "	14:15 - 14:30",
      "Number": "0126590443",
      "Doctor": "Dr. Emma",
      "Injury": "diarrhoea",
    },
    {		
      // "Title":"",
      "Photo": "../../../assets/appoinment_Profile/user-40-5.jpg",
      "Name": "Noah",
      "Email": "noah@gmail.com",
      "Date": "15 Jun 2018",
      "VisitTime": "17:30 - 18:00",
      "Number": "0126598525",
      "Doctor": "Dr. James",
      "Injury": "dyslexia",
    },
    {		
      
      	
      
      
      // "Title":"",
      "Photo": "../../../assets/appoinment_Profile/user-40-6.jpg",
      "Name": "Isabella",
      "Email": "isabella@gmail.com",
      "Date": "2 Jul 2018",
      "VisitTime": "10:00 - 10:15	",
      "Number": "0126599411",
      "Doctor": "Dr. Noah	",
      "Injury": "flu",
    },
    {		
      // "Title":"",
      "Photo": "../../../assets/appoinment_Profile/user-40-7.jpg",
      "Name": "Sophia",
      "Email": "sophia@gmail.com",
      "Date": "9 Oct 2018",
      "VisitTime": "8:30 - 8:45",
      "Number": "0126596284",
      "Doctor": "Dr. Olivia",
      "Injury": "fracture",
    },
    {		
      
      		
      
      	
      // "Title":"",/
      "Photo": "../../../assets/appoinment_Profile/user-40-8.jpg",
      "Name": "Mia",
      "Email": "mia000@gmail.com",
      "Date": "17 Mar 2018",
      "VisitTime": "11:30 - 11:40",
      "Number": "0126595200",
      "Doctor": "Dr. Emma",
      "Injury": "hypothermia",
    },
    {	
      // "Title":"",
      "Photo": "../../../assets/appoinment_Profile/user-40-9.jpg",
      "Name": "William",
      "Email": "william@gmail.com",
      "Date": " 18 Apl 2018",
      "VisitTime": "12:15 - 12:45",
      "Number": "0126590043",
      "Doctor": "Dr. Olivia",
      "Injury": "sunburn",
    },
    {	
      "Photo": "../../../assets/appoinment_Profile/user-40-10.jpg",
      "Name": "James",
      "Email": "james@gmail.com",
      "Date": " 6 Apl 2018",
      "VisitTime": "16:00 - 16:20	",
      "Number": "0126591123",
      "Doctor": "Dr. Logan",
      "Injury": "mumps",
    },
    {		
      "Photo": "../../../assets/appoinment_Profile/user-40-1.jpg",
      "Name": "Liam",
      "Email": "liam@gmail.com",
      "Date": "18 Dec 2018",
      "VisitTime": "10:15 - 10:30	",
      "Number": "0126596578",
      "Doctor": "Dr. Sophie",
      "Injury": "allergy",
    },
    {
      "Photo": "../../../assets/appoinment_Profile/user-40-2.jpg",
      "Name": "Emma",
      "Email": "emma@gmail.com",
      "Date": "5 Dec 2018	",
      "VisitTime": "9:00 - 9:30",
      "Number": "0126596452",
      "Doctor": "0126596452",
      "Injury": "	arthritis",
    },
    {	
      "Photo": "../../../assets/appoinment_Profile/user-40-3.jpg",
      "Name": "Olivia",
      "Email": " olivia@gmail.com",
      "Date": " 13 Oct 2018",
      "VisitTime": "12:00 - 12:45	",
      "Number": "0126598853",
      "Doctor": "Dr. Noah",
      "Injury": "depression",
    },
    {	
      "Photo": "../../../assets/appoinment_Profile/user-40-4.jpg",
      "Name": "Ava",
      "Email": " ava@gmail.com",
      "Date": " 26 Dec 2018",
      "VisitTime": "	14:15 - 14:30",
      "Number": "0126590443",
      "Doctor": "Dr. Emma",
      "Injury": "diarrhoea",
    },
  ];
  OnDelet(dt: any) {
    this.Appoinments.splice(this.Appoinments
      .indexOf(dt), 1)
  }
}

