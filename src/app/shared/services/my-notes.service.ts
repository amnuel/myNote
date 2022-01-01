import { Injectable } from '@angular/core';
import { NoteProperties } from '../noteProperties';

@Injectable({
  providedIn: 'root'
})
export class MyNotesService {
  dayOne:NoteProperties={ title:'Day one',date:'02-02-21', content:'lorem epsum is overated but that is still what is use tring to conserve my energy i guess from being creative on the english side',backCol:'info'};
  dayTwo:NoteProperties={ title:'Day two', date:'02-02-21',content:'I still feel the they are overated so i am generating better text next time',backCol:'Danger'};
  myNotes:NoteProperties[]=[this.dayOne,this.dayTwo];
  constructor() { }
  getNotes(){
    return this.myNotes;
  }
}
