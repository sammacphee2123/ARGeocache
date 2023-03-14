import DisplayItem from "./displayItem";
import React from 'react'
import DisplayItemComponent from "../components/displayItemComponent";

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
    
    setName(name: string){
        this.name = name;
    }

    setLocation(location: number){
        this.location = location;
    }

    setAvatar(avatar: string){
        this.avatar = avatar;
    }

    renderItem = () => {
        return <>
            <DisplayItemComponent
                name={this.name}
                location={this.location}
                avatar={this.avatar}/>
        </>
    };
}

export default geocache;