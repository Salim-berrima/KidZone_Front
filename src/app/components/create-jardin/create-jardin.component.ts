import { Jardin } from 'src/app/Models/jardin';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JardinService } from 'src/app/Services/jardin.service';

@Component({
  selector: 'app-create-jardin',
  templateUrl: './create-jardin.component.html',
  styleUrls: ['./create-jardin.component.css']
})
export class CreateJardinComponent implements OnInit {

  jardin: Jardin = new Jardin();
  submitted = false;

  constructor(private jardinService: JardinService,
    private router: Router) { }

  ngOnInit() {
  }

  newJardin(): void {
    this.submitted = false;
    this.jardin = new Jardin();
  }

  save() {
    this.jardinService
    .addJardin(this.jardin).subscribe(data => {
      console.log(data)
      this.jardin = new Jardin();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/jardins']);
  }
}
