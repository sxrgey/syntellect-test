import { makeAutoObservable } from 'mobx';

export class TextControlStore {
  value = '';

  constructor() {
    makeAutoObservable(this);
  }

  setValue(newValue: string) {
    this.value = newValue;
  }

  clear() {
    this.value = '';
  }

  setHelloWorld() {
    this.value = 'Hello world!';
  }
}
