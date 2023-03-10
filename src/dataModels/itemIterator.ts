interface ItemIterator{
    getNext(curUserLocation:number, distance:number);
    hasMore(): boolean;
}

export default ItemIterator;