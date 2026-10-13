import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTeacher'
})
export class SearchTeacherPipe implements PipeTransform {

 transform(objs:any[],ch:string):any {
    if(!objs||!ch||ch.trim()===''){
    return [];
    }
    ch=ch.toLowerCase();
      return objs.filter((obj:any)=>{
        const spec=obj?.specialty?.toLowerCase()||'';
        
        return spec.includes(ch);
      });
    
  }

}
