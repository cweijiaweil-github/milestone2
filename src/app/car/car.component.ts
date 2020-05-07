import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  
  carItems: any[];
  sumMoney: number = 0;
  sumPiece: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.findAllCar();
    this.getSum();
  }
  
  findAllCar(){
    this.sumMoney = 0;
    this.carItems = [
      {
        id: 8000,
        item_name: "poone",
        price: 4666,
        count: 10
      },
      {
        id: 8002,
        item_name: "boosu",
        price: 7555,
        count: 4
      },
      {
        id: 8003,
        item_name: "kuyaku",
        price: 8999,
        count: 30
      },
      {
        id: 8003,
        item_name: "kuyaku",
        price: 8999,
        count: 30
      },
      {
        id: 8003,
        item_name: "kuyaku",
        price: 8999,
        count: 30
      },
      {
        id: 8003,
        item_name: "kuyaku",
        price: 8999,
        count: 30
      },
      {
        id: 8003,
        item_name: "kuyaku",
        price: 8999,
        count: 30
      },
      {
        id: 8003,
        item_name: "kuyaku",
        price: 8999,
        count: 30
      },
      {
        id: 8003,
        item_name: "kuyaku",
        price: 8999,
        count: 30
      },
      {
        id: 8003,
        item_name: "kuyaku",
        price: 8999,
        count: 30
      }
    ];
  }

  delCarItems() {
    $(".w-check").each((index,element) => {
      if($(element).prop("checked") === true){
        $(element).parents("tr").remove();
        // commit data
        ///xxxx();
        //this.findAllCar();
        this.getSum();
      }
    })
  }
  
  chkallchange() {
    $(".w-check").prop("checked", $(".checkall").prop("checked"));
  }
  chkwchange() {
    if ($(".w-check").length === $(".w-check:checked").length) {
      $(".checkall").prop("checked", true);
    } else {
      $(".checkall").prop("checked", false);
    }
  }
  
  checkOut(){
    //update buyer's history
  }
  
  increment($event:any, carIte:any) {
    carIte.count = Number($($event.target).siblings(".s-count").text()) + 1;
    $($event.target).siblings(".s-count").text(carIte.count);
    this.getSum();
  }
  decrement($event:any, carIte:any) {
    carIte.count = Number($($event.target).siblings(".s-count").text()) - 1;
    if (carIte.count < 1) {
      carIte.count = 1;
      $($event.target).siblings(".s-count").text(1)
    } else {
      $($event.target).siblings(".s-count").text(carIte.count)
    }
    this.getSum();
  }
  getSum() {
    this.sumMoney = 0;
    this.sumPiece = 0;
    this.carItems.forEach((item, index, array) => {
      this.sumMoney = (array[index].price * array[index].count) + this.sumMoney;
      this.sumPiece = array[index].count + this.sumPiece;
    })
    $("#totaPiece").text(this.sumPiece);
    $("#totalPrice").text(this.sumMoney);
  }

}
