import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Task } from 'src/app/model/Task';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // url:string='http://localhost:56035/getall/';
  // url1:string='http://localhost:56035/getbytaskid';
  // url2:string='http://localhost:56035/updatebytaskid';
  // url3:string='http://localhost:56035/Addtask/'
  // url4:string='http://localhost:56035/Deletetask';
  // url5:string='http://localhost:56035/updateendtask';

  url:string='http://localhost/TaskManagerAPI/getall/';
  url1:string='http://localhost/TaskManagerAPI/getbytaskid';
  url2:string='http://localhost/TaskManagerAPI/updatebytaskid';
  url3:string='http://localhost/TaskManagerAPI/Addtask/'
  url4:string='http://localhost/TaskManagerAPI/Deletetask';
  url5:string='http://localhost/TaskManagerAPI/updateendtask';
  

  constructor(private _http:Http) { }
  GetAll():Observable<Task[]>
{
  return this._http.get(this.url)
  .map((response: Response)=><Task[]>response.json());
}
Add(item:Task):Observable<any>
{
  return this._http.post(this.url3,item)
  .map((response: Response)=><any>response.json());
}
Delete(Id:Number):Observable<any>
{
  return this._http.delete(this.url4+"/"+Id)
  .map((response: Response)=><any>response.json());
}
Edit(item:Task):Observable<Task[]>
{
  return this._http.put(this.url2+"/"+item.TaskId,item)
  .map((response: Response)=><Task[]>response.json());
}
Search(Id:number):Observable<Task>
{
  return this._http.get(this.url1+"/"+Id)
  .map((response: Response)=><Task>response.json());
}
serachbyall(item:Task):Observable<Task[]>
{
  return this._http.get(this.url1+"/"+item.TaskId)
  .map((response:Response)=><Task[]>response.json());
}
EndTask(Id:Number):Observable<Task>
{
  return this._http.put(this.url5+"/"+Id,Id)
  .map((response:Response)=><Task>response.json());
}
formatdate(date:Date): string{
  const day=date.getDate();
  const month=date.getMonth();
  const year=date.getFullYear();
  return '${year}-${month}-${day}';
}
}