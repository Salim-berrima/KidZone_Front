import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cout } from 'src/app/Models/cout';
import { CoutService } from 'src/app/Services/cout.service';
import { JardinService } from 'src/app/Services/jardin.service';
import { Jardin } from 'src/app/Models/jardin';
@Component({
  selector: 'app-cout',
  templateUrl: './cout.component.html',
  styleUrls: ['./cout.component.css']
})
export class CoutComponent implements OnInit {
  cout: Cout = new Cout();
  submitted = false;
  

  constructor(private coutService: CoutService,
    private router: Router) { }

    ngOnInit() {
    }
  
    newJardin(): void {
      this.submitted = false;
      this.cout = new Cout();
    }
    save() {
      this.coutService
      .affectercoutjardin(this.cout).subscribe(data => {
        console.log(data)
        this.cout = new Cout();
        this.gotoList();
      }, 
      error => console.log(error));
    }
    onSubmit() {
      this.submitted = true;
      this.save();    
    }
  
    gotoList() {
      this.router.navigate(['/cout']);
    }
  
}

