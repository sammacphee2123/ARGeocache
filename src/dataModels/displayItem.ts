interface DisplayItem {
    name: string;
    location: number;
    avatar: string;
    type: "USER" | "GEOCACHE" | "COMPOSITE";
    renderItem();
}
export default DisplayItem;