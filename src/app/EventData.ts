import {Directive, Injectable} from '@angular/core';

@Directive({
  selector: '[EvenDate]'
})

@Injectable()
export class EventData {

  public EventList=[{image:"http://www.thechinesequest.com/wp-content/uploads/2014/08/Chinese-food-facts.jpg",name:"China Night",date:"Apr 6",type:"Formal",food:"Asian",distance:"600ft"},{image:"https://butterwithasideofbread.com/wp-content/uploads/2013/07/Greek-Chicken-Souvlaki-with-Lemon-Rice.BSB_.IMG_0509.jpg",name:"American Night",date:"Apr 8",type:"Informal",food:"American",distance:"750ft"},{image:"https://05714042a2232aa91807ef46-qgjpdebgroop4m.netdna-ssl.com/wp-content/uploads/2017/05/Hahn-Speaking.png",name:"Scott Hahn Meet and Greet",date:"Apr 12",type:"Informal",food:"American",distance:"750ft"}];
  public FilterList=[{image:"http://www.thechinesequest.com/wp-content/uploads/2014/08/Chinese-food-facts.jpg",name:"China Night",date:"Apr 6",type:"Formal",food:"Asian",distance:"600ft"},{image:"https://butterwithasideofbread.com/wp-content/uploads/2013/07/Greek-Chicken-Souvlaki-with-Lemon-Rice.BSB_.IMG_0509.jpg",name:"American Night",date:"Apr 8",type:"Informal",food:"American",distance:"750ft"},{image:"https://05714042a2232aa91807ef46-qgjpdebgroop4m.netdna-ssl.com/wp-content/uploads/2017/05/Hahn-Speaking.png",name:"Scott Hahn Meet and Greet",date:"Apr 12",type:"Informal",food:"American",distance:"750ft"}];

  public addEvent(image,name,date,type,food,distance){
    this.EventList.push({image:image,name:name,date:date,type:type,food:food,distance:distance});
  };

  public filter(type, food, diet, distance, date){
    this.FilterList=[];

    for (let a of type){
      for(let event of this.EventList){
        if (a==event.type || a==-1){
          this.FilterList.push(event)
        }
      }
    }

    for (let b of food){
      for(let event of this.FilterList){
        if (b==event.type || a==-1){
          this.FilterList.push(event)
        }
      }
    }

    for (let c of diet){
      for(let event of this.FilterList){
        if (c==event.type || a==-1){
          this.FilterList.push(event)
        }
      }
    }


  }

}
