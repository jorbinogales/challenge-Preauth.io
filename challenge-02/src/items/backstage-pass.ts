import NewItem from "./";

export default class BackstagePass extends NewItem {
  update(): void {
    this.nextDay();

    if (this.sellIn < 0) {
      this.quality = 0;
    } else if (this.sellIn <= 5) {
      this.quality = this.quality + 3;
    } else if (this.sellIn <= 10) {
      this.quality = this.quality + 2;
    } else {
      this.quality = this.quality + 1;
    }

    this.checkQuality();
  }
}
