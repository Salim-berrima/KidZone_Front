import { Component, OnInit } from '@angular/core';

import { Reclamation } from 'src/app/Models/reclamation';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationService } from 'src/app/Services/reclamation.service';



@Component({
  selector: 'app-reclamation-jardin',
  templateUrl: './reclamation-jardin.component.html',
  styleUrls: ['./reclamation-jardin.component.css']
})
export class ReclamationJardinComponent implements OnInit {
  reclamation: Reclamation = new Reclamation();
  submitted = false;

  constructor(private reclamationService: ReclamationService,
    private router: Router) { }
  
 

  ngOnInit(): void {
    this.submitted = false;
    this.reclamation = new Reclamation();
  }

  
  save() {
    this.reclamationService
    .sendEmail(this.reclamation).subscribe(data => {
      console.log(data)
      this.reclamation = new Reclamation();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  gotoList() {
    this.router.navigate(['/reclamations']);
  }
}
