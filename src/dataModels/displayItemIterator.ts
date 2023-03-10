import DisplayItem from "./displayItem";
import ItemIterator from "./ItemIterator";

class displayItemsIterator implements ItemIterator {
    items: DisplayItem[];
    index: number = 0;

    constructor(items: DisplayItem[]){
        this.items = items;
    }

    getNext(curUserLocation:number, distance:number){
        // return this.items[this.index++];
        if(Math.abs(this.items[this.index].location - curUserLocation) <= distance){
          return  this.index++;
        }
    }

    hasMore(): boolean {
        return this.index < this.items.length;
    }
}

export default displayItemsIterator;