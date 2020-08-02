import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'agency-x-unauthorize-bottom-sheet',
  templateUrl: './unauthorize-bottom-sheet.component.html',
  styleUrls: ['./unauthorize-bottom-sheet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnauthorizeBottomSheetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
