import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { tokenNotExpired } from 'angular2-jwt';
import {EnvironmentHelper} from '../environments/environment';
import {User} from "../models/user";
import { MapHelper } from "../../helpers/mapHelper";

@Injectable()
export class AuthService {

  authToken;
  user;
  options;
  envHelper: EnvironmentHelper;
  mapHelper: MapHelper;

  constructor(private http: HttpClient) {
    this.envHelper = new EnvironmentHelper();
    this.mapHelper = new MapHelper();
  }

  createAuthHeaders () {
    this.readToken();
    this.options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authToken
      })
    };
  }

  createHeaders () {
    this.options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  storeUserData (token, user) {
    localStorage.setItem('token', 'JWT ' + token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  storeRestaurantData (token, restaurant) {
    localStorage.setItem('token', 'JWT ' + token);
    localStorage.setItem('restaurant', JSON.stringify(restaurant));
    this.authToken = token;
    this.user = restaurant;
  }

  readCurrentUser(){
    return this.user;
  }

  readToken () {
    this.authToken = localStorage.getItem('token');
  }

  loggedIn() {
    //return tokenNotExpired();
  }

  logout () {
    localStorage.clear();
    this.authToken = null;
    this.user = null;
  }

  login (user) {
    this.createHeaders();
    return this.http.post(this.envHelper.urlbase + this.envHelper.urlDictionary.user.login, JSON.stringify(user), this.options);
  }

  signUp (user) {
    this.createHeaders();
    return this.http.post(this.envHelper.urlbase + this.envHelper.urlDictionary.user.signup, JSON.stringify(user), this.options);
  }

  getProfile(name) {
    this.createAuthHeaders();
    return this.http.get(this.envHelper.urlbase + this.envHelper.urlDictionary.user.profile + name, this.options);
  }

  updateProfile (user) {
    this.createAuthHeaders();
    return this.http.put(this.envHelper.urlbase + this.envHelper.urlDictionary.user.user, JSON.stringify(user), this.options);
  }

  deleteProfile (id) {
    this.createAuthHeaders();
    return this.http.delete(this.envHelper.urlbase + this.envHelper.urlDictionary.user.delete + id, this.options);
  }

  getAllergies() {
    this.createHeaders();
    return this.http.get(this.envHelper.urlbase + this.envHelper.urlDictionary.user.allergies, this.options);
  }

}
