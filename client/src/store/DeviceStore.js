import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'apple' },
      { id: 2, name: 'cars' },
    ];
    this._brands = [
      { id: 1, name: 'iphone' },
      { id: 2, name: 'samsung' },
    ];
    this._devices = [
      {
        id: 1,
        name: 'iphone 13',
        price: 25000,
        rating: 5,
        img: 'https://www.run.ru',
      },
      {
        id: 2,
        name: 'scar 13',
        price: 351350,
        rating: 5,
        img: 'https://www.hp.ru',
      },
    ];
    makeAutoObservable(this);
  }
  setIsAuth(types) {
    this._types = types;
  }
  setUser(brands) {
    this._brands = brands;
  }
  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
}
