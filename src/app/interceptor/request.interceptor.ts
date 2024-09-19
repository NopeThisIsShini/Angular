import { HttpHandler, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  console.log('Request interceptor', req);
  const newReqest = req.clone({
    headers: req.headers.set('Authorization', `Bearer dummytoken`),
  })
  return next(newReqest);
};
