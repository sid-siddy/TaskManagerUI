import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import{Router} from '@angular/router'
import { SharedService } from 'src/app/service/shared.service';
import * as $ from 'jquery';
import {filter} from 'rxjs/Operators';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
list:Task[];
item:Task;
list1:Task[];
priorityto:number;
prit : number;
  constructor (private _service:SharedService, private _route:Router){ 
    this.item=new Task();  
    this.list1=this.list; 
    this._service.GetAll()
    .subscribe(i=>this.list=i);    
    this._service.GetAll()
    .subscribe(i=>this.list1=i);  
          
  }
  ngOnInit() { 
        
  }   
    Edit(id:number)
    {      
      this._route.navigateByUrl('/edit/'+id);
    }
    EndTask(id:Number)
    {
      console.log("Do you want to end the task"); 
     this._service.EndTask(id).subscribe(
      suc => 
      {
        this._service.GetAll().subscribe(i=>this.list1=i);

      }
    );   
    }    
    Delete(id:number)
    { 
      this._service.Delete(id).subscribe(
        suc => 
        {
          this.list1 = this.list1.filter((e) =>{
            return e.TaskId !== id;
          });
        }
      );     

    }

    
     searchbytask(task:string)
     {
      // this.list1=this.list.filter(i=>i.Task.startsWith(this.item.Task.toString()));
       this.list1=this.list.filter(i=>i.TaskName.toString().toUpperCase().startsWith(task.toString().toUpperCase()));
     }
     searchbyparent(parent:string)
     {
      this.list1=this.list.filter(i=>i.ParentName.toString().toUpperCase().startsWith(parent.toString().toUpperCase()));
     }
     serachbypriorityfrom(priority:number)
     {
      this.prit=priority;
      this.list1=this.list.filter(i=>i.Priority>=(priority));
     }
     serachbypriorityto(priorityto:number)
     {
      this.list1=this.list.filter(i=>(i.Priority<=(priorityto) && i.Priority>(this.prit)));
     }
     SearchBySDate(sdate:Date)
     {
      this.list1 = this.list.filter(i =>i.SDate.toString().toUpperCase().startsWith(sdate.toString().toUpperCase())) ;
     }
     SearchByEDate(edate:Date)
     {
      this.list1 = this.list.filter(i =>i.EDate.toString().toUpperCase().startsWith(edate.toString().toUpperCase())) ;
     }
}