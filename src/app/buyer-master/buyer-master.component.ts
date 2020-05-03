import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-buyer-master',
  templateUrl: './buyer-master.component.html',
  styleUrls: ['./buyer-master.component.css']
})
export class BuyerMasterComponent implements OnInit {

  items: any[];
  historys: any[];
  carItems: any[];
  categorys: any[];
  startPrice: number;
  endPrice: number;
  category: string;
  category_id: number;
  subCategory: string;
  subCategory_id: number;
  item_name: string;
  sumMoney: number = 0;
  sumPiece: number = 0;
  piece: number;
  count:number;


  constructor(private fb: FormBuilder,public router: Router) { }

  ngOnInit(): void {
    this.findAllCategorys();
    this.findAllItems();

  }

  findAllItems() {
    // The following data is used for testing
    this.items = [
      {
        item_name: "Tanmay",
        price: "10210",
        description: "zhejiushi1001",
        seller: "bellapa1"
      },
      {
        item_name: "Tanmay2",
        price: "10212",
        description: "zhejiushi1002",
        seller: "bellapa2"
      },
      {
        item_name: "Tanmay3",
        price: "10211",
        description: "zhejiushi1003",
        seller: "bellapa3"
      },
      {
        item_name: "Tanmay3",
        price: "10211",
        description: "zhejiushi1003",
        seller: "bellapa3"
      },
      {
        item_name: "Tanmay3",
        price: "10211",
        description: "zhejiushi1003",
        seller: "bellapa3"
      },
      {
        item_name: "Tanmay3",
        price: "10211",
        description: "zhejiushi1003",
        seller: "bellapa3"
      },
      {
        item_name: "Tanmay3",
        price: "10211",
        description: "zhejiushi1003",
        seller: "bellapa3"
      },
      {
        item_name: "Tanmay3",
        price: "10211",
        description: "zhejiushi1003",
        seller: "bellapa3"
      },
      {
        item_name: "Tanmay3",
        price: "10211",
        description: "zhejiushi1003",
        seller: "bellapa3"
      }
    ];
  }
  findAllHistory() {
    this.historys = [
      {
        id: 10001,
        item_name: "Tanmay3",
        price: "10211",
        description: "zhejiushi1003",
        date_time: "20200401"
      },
      {
        id: 10002,
        item_name: "Tanmay2",
        price: "10212",
        description: "zhejiushi1002",
        date_time: "20200402"
      },
      {
        id: 10003,
        item_name: "Tanmay3",
        price: "10213",
        description: "zhejiushi1003",
        date_time: "20200403"
      },
      {
        id: 10004,
        item_name: "Tanmay4",
        price: "10214",
        description: "zhejiushi1004",
        date_time: "20200404"
      }
    ];
  }
  findAllCategorys() {
    this.categorys = [
      {
        category_id: "1001",
        category_name: "ca001",
        subCategorys: [{
          subCategory_id: "2a01",
          subCategory_name: "suba01"
        }, {
          subCategory_id: "2a02",
          subCategory_name: "suba02"
        }, {
          subCategory_id: "2a03",
          subCategory_name: "suba03"
        }]

      },
      {
        category_id: "1002",
        category_name: "ca002",
        subCategorys: [{
          subCategory_id: "2b01",
          subCategory_name: "subb01"
        }, {
          subCategory_id: "2b02",
          subCategory_name: "subb02"
        }]
      },
      {
        category_id: "1003",
        category_name: "ca003",
        subCategorys: []
      }
    ];
  }
  searchItems(value:any) {
    // param this.item_name
  }
  fillerItem(value:any) {
    // param this.item_name
  }
  selSubCategory(category: any, subCategory: any) {
    this.category_id = category.category_id;
    this.subCategory_id = subCategory.subCategory_id;
    this.category = category.category_name;
    this.subCategory = subCategory.subCategory_name;
  }
  findItemsByPriceAndFacturer() {
    $("#a-buyer").parent("li").addClass("active");
    $("#a-purchaseHistory").parent("li").removeClass("active");
    $("#purchaseHistory").removeClass("active");
    $("#buyItem").addClass("active");
    // back_end start
    //  alert("startPrice="+this.startPrice+";endPrice="+this.endPrice+";category="+this.category+";subCategory="+this.subCategory);
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
  carClick() {
    this.findAllCar();
    this.getSum();
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
  
  checkOut(){
    //update buyer's history
  }

  viewDetails() {
    $(".item-content").css("display", "none");
    $(".specifications").css("display", "block");

  }
  retSearchRel() {
    this.findAllItems();
    $(".specifications").css("display", "none");
    $(".item-content").css("display", "block");
  }
  clearData() {
    $(".left-input").val("");
    $(".right-input").val("");
    this.category = "";
    this.subCategory = "";
  }
}
