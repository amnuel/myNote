import { Component, OnInit } from '@angular/core';
import { MyNotesService } from "../../shared/services/my-notes.service";
import { NoteProperties } from "../../shared/NoteProperties";
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  myNotes:NoteProperties[];
  // @Input()  style!: 'max-width: 18rem;';
  st='max-width: 18rem';
  date='';
  constructor(private myNotesservice: MyNotesService ) {

    this.myNotes=this.myNotesservice.getNotes();

    this.date=this.myNotes[0].date;
    console.log(this.myNotes);
   }
   
  //  date:string =MyNotesService.date;
  ngOnInit(): void {
    alert(this.myNotes);
  }
  openB(){
    // alert('good to go');
    this.st='';

  }
  closeB(){
    this.st='max-width: 18rem';
  }


}
