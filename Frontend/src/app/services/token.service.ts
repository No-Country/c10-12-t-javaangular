import { Injectable } from '@angular/core';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string) {
    setCookie('sb-xbslofkvpgejobohqcqp-auth-token', token, { expires: 365, path: '/' });
  }

  getToken() {
    const token = getCookie('sb-xbslofkvpgejobohqcqp-auth-token');
    return token;
  }

	removeToken() {
    const token = removeCookie('sb-xbslofkvpgejobohqcqp-auth-token');
    removeCookie('sb-xbslofkvpgejobohqcqp-auth-token');
  }
}
