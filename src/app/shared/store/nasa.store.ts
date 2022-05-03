import { Injectable } from "@angular/core";
import { INasaNews } from "src/app/interfaces/nasa.component";

@Injectable()
export class NasaStore {
  nasaStorage: INasaNews[] | any = [];

  constructor(){}
}