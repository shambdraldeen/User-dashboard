import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class Config {
  public static lang: string = "";
  public static dir: string = "ltr";
  constructor(private _http: HttpClient) {}
}

