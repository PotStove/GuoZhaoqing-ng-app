import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  list:Array<any> = [
      {"index":7,
      "gameName":"the last of us",
      "developer":"Naughty Dog",
      "year":"2013",
      "platform":"PS3"},
      {"index":2,
      "gameName":"horizon: zero draw",
      "developer":"Gra",
      "year":"2017",
      "platform":"PS4"},
      {"index":4,
      "gameName":"need for speed 19",
      "developer":"EA",
      "year":"2015",
      "platform":"PC/PS4/Xbox"},
      {"index":1,
      "gameName":"dragon ball fighter z",
      "developer":"Arc",
      "year":"2018",
      "platform":"PC/PS4/Xbox"},
      {"index":11,
      "gameName":"glory of king",
      "developer":"TX",
      "year":"2016",
      "platform":"moblie"}
  ]
  deleteLast(){
    this.list.pop()
  }
  saveNewUser(){
    this.list.push({
      "index":7,
      "gameName":"the last of us",
      "developer":"Naughty Dog",
      "year":"2013",
      "platform":"PS3"
    })
  }

  // 函数功能：对Array进行顺序、逆序、打乱三种排列方式
  // 参数：type:string，可选值为"up"，"down"，"random"
  sortList(type:string){
    if(type == "up"){
      this.sortByAsccending();
    } else if(type == "down"){
      this.sortByDesccending();
    } else if(type == "random"){
      this.sortByRadom();
    }
  }

  sortByAsccending(){
    this.list.sort((a,b)=> a.index - b.index)
  }
  sortByDesccending(){
    this.list.sort((a,b)=> b.index - a.index)
  }
  sortByRadom(){
    this.list.sort(()=> Math.random() - 0.5)
  }
  constructor(meta: Meta, title: Title) {
    title.setTitle('My Home Page');

    meta.addTags([ 
      {
        name: 'author', content: 'eddic'
      },
      {
        name: 'keywords', content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description', content: 'This is my great description.'
      },
    ])
  }

  ngOnInit() {
  }

}
