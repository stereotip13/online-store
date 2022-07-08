import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'apple' },
      { id: 2, name: 'cars' },
      { id: 3, name: 'planers' },
      { id: 4, name: 'boats' },
      { id: 5, name: 'ski' },
    ];
    this._brands = [
      { id: 1, name: 'iphone' },
      { id: 2, name: 'samsung' },
      { id: 3, name: 'Lenovo' },
      { id: 4, name: 'philips' },
      { id: 5, name: 'yerlink' },
      { id: 6, name: 'grm' },
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
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }
  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevaces(devices) {
    this._devices = devices;
  }
  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
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
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
