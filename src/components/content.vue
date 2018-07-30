<template>
    <div id="container" v-html=str>
        <!-- <img src="http://n1.itc.cn/img8/wb/recom/2016/05/09/146272579903814326.JPEG" alt="">
        <p class="pstyle"> 千寻和爸爸妈妈一同驱车前往新家，在郊外的小路上不慎进入了神秘的隧道——他们去到了另外一个诡异世界—
        一个中世纪的小镇。远处飘来食物的香味，爸爸妈妈大快朵颐，孰料之后变成了猪！这时小镇上渐渐来了许多样子
        古怪、半透明的人。</p>
        
        <img src="http://n1.itc.cn/img8/wb/recom/2016/05/09/146272579903814326.JPEG" alt="">
        <p>千寻仓皇逃出，一个叫小白的人救了他，喂了她阻止身体消失的药，并且告诉她怎样去找锅炉爷爷以及汤婆婆，
        而且必须获得一分工作才能不被魔法变成别的东西。千寻在小白的帮助下幸运地获得了一份在浴池打杂的工作。
        渐渐她不再被那些怪模怪样的人吓倒，并从小玲那儿知道了小白是凶恶的汤婆婆的弟子。</p>
        
        <img src="http://n1.itc.cn/img8/wb/recom/2016/05/09/146272579903814326.JPEG" alt="">
        <p>一次，千寻发现小白被一群白色飞舞的纸人打伤，为了救受伤的小白，她用河神送给她的药丸驱出了小白身体内的封印
            以及守封印的小妖精，但小白还是没有醒过来。为了救小白，千寻又踏上了她的冒险之旅。</p> -->
    </div>
</template>



<script>
import contentString from '../content.js';

export default {
            data:function(){
                return {
                    viewcontent:contentString.s.split(""),
                    newcontent:[],
                    idx:0,
                    string:""
                }
            },

            computed:{
                str:function(){
                    return this.string += this.viewcontent[this.idx]
                }
            },
            
            created:function(){
            },

            methods:{
                play:function(stylecode){
                    this.$nextTick(function(){
                    document.querySelector("style").innerHTML += stylecode
                })
                }
            },

            mounted:function(){
              var _this=this;
              var length=this.viewcontent.length;

              setInterval(function(){
                if(_this.idx === length-1){
                  return
               }

               _this.newcontent.push(_this.viewcontent[_this.idx])
               _this.idx ++;
              },50)

            },

            updated:function(){
               if(this.idx===598){
                    this.play(`
                    .borderactive{
                        border:1px solid #ccc;
                        border-radius: 3px;
                        box-shadow: 3px 3px 5px #ccc;
                    `)
               }

            }


        //     updated:function(){
        //         if(this.idx===160){
        //             document.querySelector("style").innerHTML +=`.fontstyle{
        //               font-style:italic;
        //               }
                      
        //               `
        //         }
        //         if(this.idx===220){
        //             document.querySelector("style").innerHTML +=`.borderactive{
        //     border:1px solid #ccc;
        //     border-radius: 3px;
        //     box-shadow: 3px 3px 5px #ccc;
        // }
        
        // `
        //         }


        //         if(this.idx===320){
        //             document.querySelector("style").innerHTML +=`.p3style{
        //     border:1px solid red;
        // }
        
        // `
        //     }
        // },
            
            // watch:{
            //   newcontent:function(){
            //     this.str += this.viewcontent[this.idx]
            //     // if(this.idx===420){
            //     //     document.querySelectorAll(".img1")[0].setAttribute("src","111")
            //     //     console.log(document.querySelectorAll(".img1")[0].setAttribute("src",""))
            //     // }
            //   }
            // },
            
            // computed:{
            //   tpl:function(){
            //     return {
            //       template:this.str
            //     }
            //   }
            // }
}
</script>



<style>
        .fontstyle{
            font-style:italic;
        }

        /* .fontfamily{
          font-family:'Times New Roman',Serif;
        } */
        
        .fontidented{
          text-indent: 30px;
          font-size:15px;
        }

        /* .borderactive{
            border:1px solid #ccc;
            border-radius: 3px;
            box-shadow: 3px 3px 5px #ccc;
        } */

        .layout{
          display:flex;
          flex-direction:row;
        }

        .codeborder{
          border:1px solid green;
          background:#eee;
        }

        div,p,a,img,h5,h6{
          margin:0px;
          padding:0px;
        }

        #container{
          width:500px;
        }

        p{
          margin-top:20px;
          text-align:justify;
        }

        img{
          width:200px;
          height:100px;
          float:right;
          margin:5px;
        }
</style>


