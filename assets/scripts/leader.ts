const {ccclass, property} = cc._decorator;
@ccclass
export default class leader extends cc.Component {
    onload() {
        cc.debug.setDisplayStats(false);
    }
    start () {
        cc.debug.setDisplayStats(false);
        var rank = {1: {'name': "", 'score': 0}, 2: {'name': "", 'score': 0}, 3: {'name': "", 'score': 0}, 4: {'name': "", 'score': 0}, 5: {'name': "", 'score': 0}};
        firebase.database().ref('users').orderByKey().once("value").then( (snapshot) => {
            snapshot.forEach( (childSnapshot) => {
                var user = childSnapshot.val();
                if(user['highscore'] > 0) {
                    for ( let i = 5; i >= 1; i--) {
                        if( i == 5 && (rank[5]['name'] == "" || user['highscore'] > rank[5]['score'])) {
                            rank[5]['name'] = user['name'];
                            rank[5]['score'] = user['highscore'];
                        } 
                        else if(rank[i]['name'] == "" || user['highscore'] > rank[i]['score']) {
                            let tmp = rank[i];
                            rank[i] = rank[i+1];
                            rank[i+1] = tmp
                        }
                    }
                }
            }); 
            for(let i = 1; i <= 5; i++) {
                if(rank[i]['name'] == "") cc.find('Canvas/rank' + i.toString()).active = false;
                else {
                    cc.find('Canvas/rank' + i.toString()).active = true;
                    cc.find('Canvas/rank' + i.toString() + '/name').getComponent(cc.Label).string = rank[i]['name'];
                    cc.find('Canvas/rank' + i.toString() + '/score').getComponent(cc.Label).string = rank[i]['score'];
                }
            }

        });

        let signout = new cc.Component.EventHandler();
        signout.target = this.node;
        signout.component = "leader";
        signout.handler = "loadSignout";
        cc.find("Canvas/SignOut").getComponent(cc.Button).clickEvents.push(signout);
    }
    loadSignout(){
        //cc.audioEngine.playEffect(this.press, false);
        cc.director.loadScene("menu");
    }
}