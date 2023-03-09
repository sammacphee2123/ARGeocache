import DisplayItem from "./displayItem";
import React from 'react'

class geocache implements DisplayItem {
    name: string;
    location: number;
    avatar: string;
    type: "GEOCACHE";
    
    constructor (name: string, location: number, avatar: string){
        this.name = name;
        this.location = location;
        this.avatar = avatar;
    }

    clone(){
        return new geocache(this.name, this.location, this.avatar);
    }

    renderItem = () => {
        //return name, location, avatar
        return <><h4>{this.name}{this.location}{this.avatar}</h4> </>
    };
}

export default geocache;