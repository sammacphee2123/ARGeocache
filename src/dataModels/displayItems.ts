import DisplayItem from "./displayItem";
import displayItemsIterator from "./displayItemIterator";

class displayItems implements DisplayItem {
    name: "";
    location: 0;
    avatar: "";
    type: "COMPOSITE";

    items: DisplayItem[] = [];

    add(item: DisplayItem){
        this.items.push(item);
    }

    remove(item: DisplayItem){
        this.items = this.items.filter(i => i !== item);
    }

    renderItem(){
        this.items.forEach(i => i.renderItem());
    }

    getChildren(){
        return this.items;
    }

    createIterator(){
        return new displayItemsIterator(this.items);
    }
}

export default displayItems;