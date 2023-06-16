import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  constructor(
    private _gifsService: GifsService
  ) {}

  get tags(): string[] {
    return this._gifsService.tagsHistory
  }

  onTagClick(tag: string): void {
    this._gifsService.searchTag(tag);
  }
}
