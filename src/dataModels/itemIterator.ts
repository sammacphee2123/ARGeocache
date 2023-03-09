interface ItemIterator{
    getNext(from:number);
    hasMore(): boolean;
}

export default ItemIterator;