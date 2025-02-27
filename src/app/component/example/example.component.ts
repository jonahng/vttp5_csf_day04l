import { Component, OnInit } from '@angular/core';
import { from, map } from 'rxjs';

@Component({
  selector: 'app-example',
  standalone: false,
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent implements OnInit{

  numbersArray = from([1,2,3,4,5,6,7,8,9]);

  multiplyBy3(){
    this.numbersArray.pipe(
      map(data =>{return data*3})
    ).subscribe(data => {console.log(data);});
  }

  foodArray = from(["chicken", "broccoli", "watercress"]);

  nameArray = from([
    {fname: "john", lname: "smithson"},
    {fname: "ape", lname: "smithson"},
    {fname: "longe", lname: "smin"}
  ])

  concatToFullName(){
    this.nameArray.pipe(map(data=>{return data.fname + data.lname}))
    .subscribe(data=>{console.log(data);});
  }



  toUpperCase(){
    this.foodArray.pipe(map(data=>{return data.toUpperCase()}))
    .subscribe(data => {console.log(data);});
  }


  constructor(){}
  ngOnInit(): void {
   this.multiplyBy3();
   this.toUpperCase();
   this.concatToFullName();

  }

}
