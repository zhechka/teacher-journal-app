import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public setItemToLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public getItemFromLocalStorage(key: string): string {
    return localStorage.getItem(key);
  }
}
