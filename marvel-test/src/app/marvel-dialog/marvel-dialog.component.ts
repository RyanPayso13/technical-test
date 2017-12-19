import { Component, OnInit, Inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-marvel-dialog',
  templateUrl: './marvel-dialog.component.html',
  styleUrls: ['./marvel-dialog.component.css']
})
export class MarvelDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.dir(this.data);
  }

}
