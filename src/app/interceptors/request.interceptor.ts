import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, finalize, of, tap } from 'rxjs';
import { LoaderService } from '../services/loader.service';
import { CacheService } from '../services/cache.service';
import { environment } from '../environments/environment';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(
    private loaderService: LoaderService,
    private cacheService: CacheService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const newRequest = request.clone({
      url: `${environment.apiUrl}${request.url}`,
    });

    const cacheResponse = this.cacheService.get(request.url);
    if (cacheResponse) {
      return of(cacheResponse);
    } else {
      this.loaderService.show();
    }
    return next.handle(newRequest).pipe(
      tap((e:any) => {
        this.cacheService.put(request.url, e);
      }),
      finalize(() => this.loaderService.hide())
    );
  }
}
