// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.speed=18;
        this.reinit()
        this.node.on('touchstart',event => {
            this.reinit()
        })
        console.log(this.node._parent.score,this.node._parent._parent.score);


       
        
    },
    reinit(){
        var arr=[-375,-187,0,187];
        var ram=Math.floor(Math.random()*4)
        this.node.x=arr[ram];
        this.ram=ram;
        // this.speed++;
        this.node.y=1080;

        // if(this.node._parent._parent.score){
            this.node._parent._parent.score++;
            // console.log(this.node._parent._parent.score)
        // }else{
            // this.node._parent._parent.score=0;
        // }
        
    },
    start () {

    },

    update (dt) {
        this.node.y-=this.node._parent._parent.speed;
        if(this.node.y<-900){
            setTimeout(() => {
                this.reinit()
            },50)
           
        }
    },
});
