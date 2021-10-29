import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Add';
  sum: number=0;
   res: string[] = [];

addNumbers(num1: string, num2: string){
  this.sum = +num1 + +num2;
}

product(num: string){
  let num2 = parseInt(num)
  for (var i = 1; i <= num2; i++) {
    if (num2 % i == 0) {
      if(i<num2/i)
      this.res.push(i + " *" + num2 / i);
      
    }
  }
}

}
  



