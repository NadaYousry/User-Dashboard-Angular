import { Component } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  isLoading: boolean = true;

  constructor(private loaderService: LoaderService) {}
  ngOnInit(): void {
    this.loaderService.stateLoading.subscribe((val:boolean) => {
      this.isLoading = val;
    });
  }
}
