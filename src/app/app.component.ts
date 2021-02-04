import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Demo for Avaloq';
  springBootData;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>(environment.apiUrl).subscribe(data => {
        this.springBootData = data;
        console.log(data);
    })
  }
}
