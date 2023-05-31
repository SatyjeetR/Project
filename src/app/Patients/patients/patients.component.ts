import { Component } from '@angular/core';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {
  Patients: any = [
    {
      "Photo": "assets/img/user-40-1.jpg",
      "Name": "Liam",
      "ID": "10021",
      "Age": "42",
      "Adderss": "71 Pilgrim Avenue Chevy Chase, MD 20815",
      "Number": "0126596578",
      "LastVisit": "18 Dec 2018",
      "Status": "Approved",

    },
    {
      "Photo": "assets/img/user-40-2.jpg",
      "Name": "	Emma	",
      "ID": "10022",
      "Age": "21",
      "Adderss": "46 Pilgrim Avenue Chevy Chase, MD 20816",
      "Number": "0126596452",
      "LastVisit": "5 Dec 2018",
      "Status": "Pending",

    },
    {
      "Photo": "assets/img/user-40-3.jpg",
      "Name": "Olivia",
      "ID": "10023",
      "Age": "43",
      "Adderss": "17 Pilgrim Avenue Chevy Chase, MD 20843",
      "Number": "0126598853",
      "LastVisit": "13 Oct 2018",
      "Status": "	Approved",
    },
    {
      "Photo": "assets/img/user-40-4.jpg",
      "Name": "Ava",
      "ID": "10024",
      "Age": "21",
      "Adderss": "53 Pilgrim Avenue Chevy Chase, MD 20843",
      "Number": "0126590443",
      "LastVisit": "26 Dec 2018",
      "Status": "Approved",
    },
    {



      "Photo": "assets/img/user-40-5.jpg",
      "Name": "Noah",
      "ID": "10025",
      "Age": "22",
      "Adderss": "44 Pilgrim Avenue Chevy Chase, MD ",
      "Number": "0126598525",
      "LastVisit": "15 Jun 2018	",
      "Status": "Pending",
    },
    {	
      "Photo": "assets/img/user-40-6.jpg",
      "Name": "Isabella",
      "ID": "10026",
      "Age": "35	",
      "Adderss": "75 Pilgrim Avenue Chevy Chase, MD 20815",
      "Number": "0126599411",
      "LastVisit": "2 Jul 2018",
      "Status": "Approved",
    },
    {		
      "Photo": "assets/img/user-40-7.jpg",
      "Name": "Sophia",
      "ID": "10027",
      "Age": "42",
      "Adderss": "40 Pilgrim Avenue Chevy Chase, MD 20854",
      "Number": "0126596284",
      "LastVisit": "9 Oct 2018",
      "Status": "Approved",
    },
    {	
      "Photo": "assets/img/user-40-8.jpg",
      "Name": "Mia",
      "ID": "10028",
      "Age": "24",
      "Adderss": " Pilgrim Avenue Chevy Chase, MD 20815",
      "Number": "0126595200",
      "LastVisit": "17 Mar 2018	",
      "Status": "Approved",
    },
    {
      "Photo": "assets/img/user-40-9.jpg",
      "Name": "William",
      "ID": "10029",
      "Age": "31",
      "Adderss": "61 Pilgrim Avenue Chevy Chase, MD 20817",
      "Number": "0126590043",
      "LastVisit": "18 Apl 2018",
      "Status": "Approved",
    },
    {
      "Photo": "assets/img/user-40-10.jpg",
      "Name": "	James",
      "ID": "10030",
      "Age": "19	",
      "Adderss": " 53 Pilgrim Avenue Chevy Chase, MD 20886",
      "Number": "0126591123",
      "LastVisit": "6 Apl 2018",
      "Status": "Approved",
    },
    {			
      "Photo": "assets/img/user-40-1.jpg",
      "Name": "Logan",
      "ID": "10031",
      "Age": "32",
      "Adderss": "44 Pilgrim Avenue Chevy Chase, MD 20815",
      "Number": "0126590045",
      "LastVisit": "23 Apl 2018	",
      "Status": "Pending",
    },
    {		
      "Photo": "assets/img/user-40-3.jpg",
      "Name": "Charlotte",
      "ID": "10032",
      "Age": "24",
      "Adderss": "30 Pilgrim Avenue Chevy Chase, MD 20849",
      "Number": "0126592295",
      "LastVisit": "4 Mar 2018		",
      "Status": "Approved",
    },
    {
      "Photo": "assets/img/user-40-5.jpg",
      "Name": "Amelia",
      "ID": "10033",
      "Age": "38",
      "Adderss": " 20 Pilgrim Avenue Chevy Chase, MD 20815",
      "Number": "0126597743",
      "LastVisit": " 10 Mar 2018	",
      "Status": "Approved",
    },
    {	
      "Photo": "assets/img/user-40-6.jpg",
      "Name": "Evelyn",
      "ID": "10034",
      "Age": "26",
      "Adderss": "66 Pilgrim Avenue Chevy Chase, MD 20807",
      "Number": "0126591324",
      "LastVisit": "5 Apl 2018",
      "Status": "Approved",
    },
    {
      "Photo": "assets/img/user-40-9.jpg",
      "Name": "Mason",
      "ID": "10035",
      "Age": "30",
      "Adderss": "69 Pilgrim Avenue Chevy Chase, MD 20838",
      "Number": "0126594352",
      "LastVisit": "17 Mar 2018",
      "Status": "Approved",
    },
    {	
      "Photo": "assets/img/user-40-3.jpg",
      "Name": "Emily",
      "ID": "10036",
      "Age": "20",
      "Adderss": "20 Pilgrim Avenue Chevy Chase, MD 20875",
      "Number": "0126593344",
      "LastVisit": " 4 Feb 2018",
      "Status": "Approved",
    },
    {	
      "Photo": "assets/img/user-40-8.jpg",
      "Name": "Elizabeth",
      "ID": "10037",
      "Age": "45",
      "Adderss": "55 Pilgrim Avenue Chevy Chase, MD 20899",
      "Number": "0126595743",
      "LastVisit": "  10 Feb 2018	",
      "Status": "Pending",
    },
    {	
      "Photo": "assets/img/user-40-8.jpg",
      "Name": "Elizabeth",
      "ID": "10037",
      "Age": "45",
      "Adderss": "55 Pilgrim Avenue Chevy Chase, MD 20899",
      "Number": "0126595743",
      "LastVisit": "  10 Feb 2018	",
      "Status": "Pending",
    },
    {	
      "Photo": "assets/img/user-40-8.jpg",
      "Name": "Elizabeth",
      "ID": "10037",
      "Age": "45",
      "Adderss": "55 Pilgrim Avenue Chevy Chase, MD 20899",
      "Number": "0126595743",
      "LastVisit": "  10 Feb 2018	",
      "Status": "Pending",
    },
    {	
      "Photo": "assets/img/user-40-8.jpg",
      "Name": "Elizabeth",
      "ID": "10037",
      "Age": "45",
      "Adderss": "55 Pilgrim Avenue Chevy Chase, MD 20899",
      "Number": "0126595743",
      "LastVisit": "  10 Feb 2018	",
      "Status": "Pending",
    },



  ];

  OnDelet(dt:any){
this.Patients.splice(this.Patients.indexOf(dt),1)
  }





}
