import { GildedRose } from "./../app";
import Item, { Cheese, BackstagePass, Sulfuras, Conjured } from "../items";

describe("Gilded Rose", function () {
  // Item basic tests
  describe("Basic Item", function () {
    const gildedRose = new GildedRose([new Item("Test Name", 1, 10)]);

    let itemArray = gildedRose.updateQuality();

    it("Name should equal 'Test Name'", function () {
      expect(itemArray[0].name).toEqual("Test Name");
    });

    it("SellIn should reduce by one per day", function () {
      expect(itemArray[0].sellIn).toEqual(0);
    });

    it("Quality should reduce by one per day", function () {
      expect(itemArray[0].quality).toEqual(9);
    });

    it("Quality should reduce by two per day if sellIn is less than 0", function () {
      itemArray = gildedRose.updateQuality();
      expect(itemArray[0].quality).toEqual(7);
    });

    it("Quality should >= 0", function () {
      const gildedRose = new GildedRose([new Item("Test Name", 1, 0)]);
      let itemArray = gildedRose.updateQuality();
      expect(itemArray[0].quality).toEqual(0)
    });
  });

  // Brie tests
  describe("Brie", function () {
    const gildedRose = new GildedRose([new Cheese("Aged Brie", 1, 10)]);

    let itemArray = gildedRose.updateQuality();


    it("Quality should increase by one per day", function () {
      expect(itemArray[0].quality).toEqual(11);
    });

    // unsure about the below test as it doesn't explicitly say it increased by two (so i guess the code is right!)
    it("Quality should increase by two per day if sellIn is less than 0", function () {
      const gildedRose = new GildedRose([new Cheese("Aged Brie", -1, 10)]);
      let itemArray = gildedRose.updateQuality();
      expect(itemArray[0].quality).toEqual(12);
    });

    it("Quality should go up every day but quality must not exeed 50", function () {
      const gildedRose = new GildedRose([new Cheese("Aged Brie", 1, 50)]);
      let itemArray = gildedRose.updateQuality();
      expect(itemArray[0].quality).toEqual(50);
    });
  });

  // Backstage passes tests
  describe("Backstage Passes", function () {
    it("Quality should increase by one per day if sellIn > 10", function () {
      const gildedRose = new GildedRose([
        new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      ]);

      let itemArray = gildedRose.updateQuality();


      expect(itemArray[0].quality).toEqual(21);
    });

    it("Quality should increase by two per day if sellIn <= 10", function () {
      const gildedRose = new GildedRose([
        new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 10, 20),
      ]);

      let itemArray = gildedRose.updateQuality();


      expect(itemArray[0].quality).toEqual(22);
    });

    it("Quality should increase by three per day if sellIn <= 5", function () {
      const gildedRose = new GildedRose([
        new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 5, 20),
      ]);

      let itemArray = gildedRose.updateQuality();


      expect(itemArray[0].quality).toEqual(23);
    });

    it("Quality should be 0 is sellIn < 0", function () {
      const gildedRose = new GildedRose([
        new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 0, 20),
      ]);

      let itemArray = gildedRose.updateQuality();


      expect(itemArray[0].quality).toEqual(0);
    });

    it("Quality should be >= 0", function () {
      const gildedRose = new GildedRose([
        new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 0, 51),
      ]);

      let itemArray = gildedRose.updateQuality();


      expect(itemArray[0].quality).toEqual(0);
    });
  });

  // Sulfuras tests
  describe("Sulfuras", function () {
    const gildedRose = new GildedRose([
      new Sulfuras("Sulfuras, Hand of Ragnaros", 0, 80),
    ]);

    let itemArray = gildedRose.updateQuality();


    it("sellIn should not change", function () {
      expect(itemArray[0].sellIn).toEqual(0);
    });

    it("Quality should be 80", function () {
      expect(itemArray[0].quality).toEqual(80);
    });
  });

  // Conjured tests
  describe("Conjured", function () {
    const gildedRose = new GildedRose([new Conjured("Conjured test", 1, 20)]);

    let itemArray = gildedRose.updateQuality();


    it("SellIn should reduce by one per day", function () {
      expect(itemArray[0].sellIn).toEqual(0);
    });

    it("Quality should reduce by two per day", function () {
      expect(itemArray[0].quality).toEqual(18);
    });

    it("Quality should reduce by four per day if sellIn is less than 0", function () {
      itemArray = gildedRose.updateQuality();

      expect(itemArray[0].quality).toEqual(14);
    });

    it("Quality should >= 0", function () {
      const gildedRose = new GildedRose([new Conjured("Conjured test", 1, 0)]);

      let itemArray = gildedRose.updateQuality();


      expect(itemArray[0].quality).toEqual(0);
    });
  });
});
