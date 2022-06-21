const {ccclass, property} = cc._decorator;

import {Player} from './player'
import {Section} from './section_init'

@ccclass
export class root extends cc.Component {
    color_strip: number = 0;

    // private player = Player;
    // private sec = Section;

    onLoad () {
        this.color_strip = cc.sys.localStorage.getItem("nowcolor");
        console.log("using strip " + this.color_strip);
        
    }

    start() {
        // this.color_strip = 1 + Math.floor(Math.random() * 5);

        //set background color according to different strips. 
        var skyColorList = [0, 30,30,60,0, 30]

        
        cc.director.setClearColor(cc.color(skyColorList[this.color_strip], skyColorList[this.color_strip], skyColorList[this.color_strip]));

    }

}