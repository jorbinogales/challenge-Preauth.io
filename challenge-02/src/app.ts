import NewItem from "./items";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn:number, quality:number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<NewItem>;

  constructor(items = [] as Array<NewItem>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].update();
    }
    return this.items;
  }
}
