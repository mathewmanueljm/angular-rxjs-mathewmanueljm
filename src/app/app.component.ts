import { Component, VERSION, OnInit } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;

  ngOnInit(){
    of(2,3,4,5,9).subscribe(console.log);
    of('Apple1','Apple2','Apple3').subscribe(
      item => console.log(`Apples was emitted ${item}`),
      () => console.log("no more item")
    );
    of(['Apple1','Apple2','Apple3']).subscribe(
      (...item) => console.log(`Apples was emitted of array ${item}`),
      () => console.log("no more item")
    );

    from([10,20,30,60,90]).subscribe(
      item => console.log(`resulting items...${item}`),
      err => console.error(`error occurred ${err}`),
      () => console.log('complete')
    );
    from(['Apple1','Apple2','Apple3']).subscribe(
      (item) => console.log(`Apples was emitted from array ${item}`),
      () => console.log("no more item")
    );
  }



}
