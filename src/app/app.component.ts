import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  title='MyAngular';
  ngOnInit()
  {   
       $(document).ready(function(){        
       $('a').click(function(){        
       $('a').removeClass('selected');
       $(this).addClass('selected');
     });
      var path=window.location.href;
      $('a').each(function(){      
           
      $(this).addClass('selected');
      });
      $('#Taskname').val('');
   });    
  }
}
