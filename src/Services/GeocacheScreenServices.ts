import displayItems from "../DataModels/displayItems";
import geocache from "../DataModels/geocache";
import otherUser from "../DataModels/otherUser";
import ItemIterator from "../DataModels/ItemIterator";

class GeocacheScreenServices {
    items: displayItems;
    iterator: ItemIterator;

    constructor(){
        this.items = new displayItems();
        this.items.add(new geocache("Geocache 1", 100, "Avatar 1"));
        this.items.add(new geocache("Geocache 2", 200, "Avatar 1"));
        this.items.add(new geocache("Geocache 3", 250, "Avatar 1"));
        this.items.add(new geocache("Geocache 4", 400, "Avatar 1"));
        this.items.add(new geocache("Geocache 5", 790, "Avatar 1"));
        this.items.add(new otherUser("User 2", 150, "Avatar 2"));
        this.items.add(new otherUser("User 3", 400, "Avatar 3"));
        this.items.add(new otherUser("User 4", 650, "Avatar 4"));
        this.items.add(new otherUser("User 5",1080, "Avatar 6"));
        this.iterator = this.items.createIterator();
    }


    renderItems(userLocation: number, distance: number){
        while(this.iterator.hasMore()){
            this.iterator.getNext(userLocation,distance).renderItem();
        }
    }
}