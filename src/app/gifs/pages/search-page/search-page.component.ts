import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { GifListComponent } from "../../components/gifs/gif-list/gif-list.component";
import { GifService } from '../../services/gif.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchPageComponent {
  gifs = signal<Gif[]>([]);
  gifService = inject(GifService);
  onSearch(query: string){
    this.gifService.searchGifs(query).subscribe(resp => {
      this.gifs.set(resp);
      console.log(resp);
    });
  }
}
