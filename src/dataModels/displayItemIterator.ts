import DisplayItem from "./displayItem";
import ItemIterator from "./ItemIterator";

class displayItemsIterator implements ItemIterator {
    items: DisplayItem[];
    index: number = 0;

    constructor(items: DisplayItem[]){
        this.items = items;
    }

    getNext(from: number){
        // return this.items[this.index++];
        if(this.items[this.index].location < from){
          return  this.index++;
        }
    }

    hasMore(): boolean {
        return this.index < this.items.length;
    }
}

export default displayItemsIterator;