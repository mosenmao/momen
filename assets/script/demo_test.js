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
        myname:'mosenmao',
        score:{
            default:35,
            
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        var that = this;
        // setTimeout(function(){
        //     that.node.angle=45;
        //     console.log( that.node.children)
        // },2000)
        if(that.node.name=='text'){
            setTimeout(() => {
                console.log(this)
                var te=this.node.getComponent(cc.Label);
                te.string=`123345678`;
            }, 1000);
           
        }

        // console.log(this)
    //    setTimeout(function(){
    //     that.node.color=new cc.Color(122,211,21,8);
    //    },1222)

        this.node.on('touchstart',event => {
            var ramX=Math.random()*924;
            var ramY=Math.random()*596;
            console.log(ramX,ramY,this)
            this.node.position=cc.v2(ramX/2,ramY/2);

            // this.node.scale++;
            console.log(this)
            // console.log(this.node._parent,this.node._parent.width,this.node._parent.height)
        })
       
    },

    start() {
    },

    update (dt) {
        this.node.angle++;
       
        
    },
});
