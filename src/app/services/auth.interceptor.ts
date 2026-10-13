import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

 let token = sessionStorage.getItem('token');
if (token) {
let modifiedReq = req.clone({
setHeaders: {
Authorization: `Bearer ${token}`
}
})
return next(modifiedReq);
}
return next(req);
};

