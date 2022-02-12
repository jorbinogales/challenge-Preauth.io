import { Item } from './../app';

export default class NewItem extends Item {
  maxQuality = 50;
  minQualtiy = 0;
  initialDegradation = -1;
  laterDegradation = -2;

  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
  }

  nextDay(): void {
    this.sellIn = this.sellIn - 1;
  }

  checkQuality(): void {
    if (this.quality > 50) this.quality = this.maxQuality;
    if (this.quality < 0) this.quality = this.minQualtiy;
  }

  update(): void {
    this.nextDay();

    if (this.sellIn >= 0) {
      this.quality = this.quality + this.initialDegradation;
    } else {
      this.quality = this.quality + this.laterDegradation;
    }

    this.checkQuality();
  }
}
