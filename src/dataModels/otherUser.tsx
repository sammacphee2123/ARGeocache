import DisplayItem from "./displayItem";
import React from 'react'

class otherUser implements DisplayItem {
    name: string;
    location: number;
    avatar: string;
    type: "USER";
   
    constructor (name: string, location: number, avatar: string){
        this.name = name;
        this.location = location;
        this.avatar = avatar;
    }

    clone(){
        return new otherUser(this.name, this.location, this.avatar);
    }

    renderItem = () => {
        //return name, location, avatar
        return <><h4>{this.name}{this.location}{this.avatar}</h4> </>
    };
      
}

export default otherUser;