import { Injectable, signal, WritableSignal } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  _disableCard: WritableSignal<boolean> = signal(true);
  disableCard = this._disableCard.asReadonly();

  _cardDisable: WritableSignal<boolean> = signal(true);
  cardDisable = this._cardDisable.asReadonly();

  cardvisible= signal<boolean>(true);

  // DisableCard'ı güncelleyen bir metod
  setDisableCard(value: boolean) {
    this._disableCard.set(value);
  }

  setcardDisable(value: boolean) {
    this._cardDisable.set(value);
  }
}
