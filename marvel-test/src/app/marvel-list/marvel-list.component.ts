import { Component, OnInit } from '@angular/core';
import { MarvelListService } from './marvel-list.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MarvelDialogComponent } from '../marvel-dialog/marvel-dialog.component';

@Component({
  selector: 'app-marvel-list',
  templateUrl: './marvel-list.component.html',
  styleUrls: ['./marvel-list.component.css']
})
export class MarvelListComponent implements OnInit {
  characters: [any];

  constructor(private marvelListService: MarvelListService,
              public dialog: MatDialog) { }

  getList (): void {
    this.marvelListService
      .getCharacterList()
      .subscribe(result => this.characters = result.data.results);
  }

  openDialog (character: any): void {
    const characterDialog = this.dialog.open(MarvelDialogComponent, {
      maxWidth: '50%',
      data: character
    });
  }

  ngOnInit() {
    this.getList();
  }

}
