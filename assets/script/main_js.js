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

    onLoad() {
        // console.log(this)
        // console.log(this.node.children[1])
        // this.node.children[1].string='124'

        // 获取本节点的其他组件
        //    var lable=this.node.getComponent(cc.Sprite);
        //    console.log(lable)

        // 根据名字获取子节点
        // var chi = this.node.getChildByName('text');

        this.node.score=0;
        this.node.speed=18;
        this.upordown=null;
        // chi.string='125'
        // console.log(chi)
        // var chi2=this.addComponent(cc.Label);
        // var chi2=this.getComponent(cc.Label);
        // chi2.node.name='activecread'
        // chi2.node.x=20;
        // chi2.node.y=20;
        // console.log(chi2,this)
        // chi2.string='哈哈哈哈';

        console.log(this.node.getChildByName('score').getComponent(cc.Label))
        this.node.on('touchstart',event => {
            this.upordown='jiasu'
        })
        
        this.node.on('touchend',event => {
            this.upordown='jiansu'
        })
        
    },

    start() {

    },

    update (dt) {
        // console.log(this.node.score)
        this.node.getChildByName('score').getComponent(cc.Label).string='分数：'+this.node.score;
        if(this.upordown==null){
            return;
        }
        if(this.node.speed<5){
            this.node.speed++;
            return;
        }
        if(this.upordown=='jiasu'){
            this.node.speed++;
        }
        else{
            this.node.speed--;
        }
    },
});
