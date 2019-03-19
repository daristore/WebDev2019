import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css','./styles.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadScript('assets/js/jquery-1.11.1.min.js');
    this.loadScript('assets/js/move-top.js');
    this.loadScript('assets/js/easing.js');
    this.loadScript('assets/js/j1.js');
    this.loadScript('assets/js/j2.js');
    this.loadScript('assets/js/j3.js');

  }
  public loadScript(url: string) {
      const body = <HTMLDivElement> document.body;
      const script = document.createElement('script');
      const sadf = body
      script.innerHTML = '';
      script.src = url;
      script.async = false;
      script.defer = true;
      body.appendChild(script);
    }

}
