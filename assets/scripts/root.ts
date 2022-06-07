const {ccclass, property} = cc._decorator;

@ccclass
export class root extends cc.Component {
    color_strip: number = 0;

    start() {
        this.color_strip = 1 + Math.floor(Math.random() * 5);

        //set background color according to different strips. 
        var skyColorList = [0, 30,30,60,0, 30]
        cc.director.setClearColor(cc.color(skyColorList[this.color_strip], skyColorList[this.color_strip], skyColorList[this.color_strip]));

    }

}