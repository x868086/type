<template>
    <div class="container conlayout">
        <div class="codeview code3d" v-html="code">
        </div>
         <div v-html="str">
        </div>
    </div>
</template>



<script>
import contentString from '../content.js';

export default {
            data:function(){
                return {
                    viewcontent:contentString.s.split(""),
                    codecontent:contentString.code.split(""),
                    newcontent:[],
                    newcode:[],
                    idx:0,
                    codeidx:0,
                    codestring:"",
                    string:""
                }
            },

            computed:{
                str:function(){
                    return this.string += this.viewcontent[this.idx]
                },
                code:function(){
                    return this.codestring += this.codecontent[this.codeidx]
                }
            },
            

            methods:{
                play:function(stylecode){
                    this.$nextTick(function(){
                    document.querySelector("style").innerHTML += stylecode
                })
                },

                codeplay:function(){
                        var that=this;
                        var codelength=this.codecontent.length;
                    setInterval(function(){
                        if(that.codeidx === codelength-1){
                            return
                        }

                        that.newcode.push(that.codecontent[that.codeidx])
                        that.codeidx ++;

                    },10)
                },

                contentplay:function(){
                    var _this=this;
                    var length=this.viewcontent.length;

                    setInterval(function(){
                        if(_this.idx === length-1){
                        return
                    }


                    _this.newcontent.push(_this.viewcontent[_this.idx])
                    _this.idx ++;
                    },25)
                }
            },

            mounted:function(){
                this.contentplay()
            },

            updated:function(){
               switch(this.idx)
                    {
                    

                    case 220:
                    this.play(`
                        .container{
                        margin:0 auto;
                        border:1px solid #ddd;
                    }
                        section{
                        padding:20px 20px;
                    }
                    `)
                    break;

                    case 390:
                    this.play(`
                        .fontstyle{
                        font-family: 'Avenir', Helvetica, Arial, sans-serif;
                        text-align: left;
                        color: #2c3e50;
                        text-indent:20px;
                        font-style:italic;
                    }
                    `)
                    break;

                    case 550:
                    this.play(`
                     .conlayout{
                        width:1020px;
                        display:flex;
                        flex-direction:row;
                        justify-content:space-between;
                        align-items:flex-start;
                    }
                    `)
                    break;

                    case 630:
                    this.play(`
                        .content{
                            flex-grow:0;
                            flex-shrink:0;
                            flex-basis:60%;
                    }`)
                    break;
                    }

               switch(this.codeidx)
                    {
                    case 200:
                    this.play(`
                        .codeview{
                            margin-right:20px;
                            flex-grow:0;
                            flex-shrink:0;
                            flex-basis:40%;
                            background:#2B2D27;
                            color:white;
                    }
                    `)
                    break;
                    
                    case 600:
                    this.play(`
                        .codered{
                            color:#B62127;
                    }`)
                    break;

                    case 750:
                    this.play(`
                        .codegreen{
                            color:#62A52C;
                    }
                        .codeblue{
                            color:#4AC8EF;
                    }`)
                    break;

                    case 960:
                    this.play(`
                        .code3d{
                            perspective: 1000px;

                    }`)
                    break;

                    case 1000:
                    this.play(`
                        pre{
                        border:1px solid #bbb;
                    }`)
                    break;

                    case 1100:
                    this.play(`
                        pre{
                        height:600px;
                        width:450px;
                    }`)
                    break;

                    case 1200:
                    this.play(`
                        pre{
                        overflow:scroll;
                    }`)
                    break;


                    case 1350:
                    this.play(`
                        pre{
                        transform: rotateY(-15deg) translateZ(-120px) translateX(-50px);
                    }`)
                    break;
                }

            },

            watch:{
                idx:function(){
                    if(this.idx===693){
                        this.codeplay()
                    }
                }
            }

}
</script>



<style>

    .img1{
        background: url(../assets/img001.jpg) 0 0 no-repeat;
    }

    .img2{
        background: url(../assets/img002.jpg) 0 0 no-repeat;
    }

    .img3{
        background: url(../assets/img003.jpg) 0 0 no-repeat;
    }

    .imgcommon{
        width:220px;
        height:124px;
        background-size:contain;
        float:right;
        box-shadow:3px 3px 6px 1px #ddd;
    } 

                      
/*
    .container{
        margin:0 auto;
        border:1px solid #ddd;
    }

    section{
        padding:20px 20px;
    }


    .img1{
        background: url(../assets/img001.jpg) 0 0 no-repeat;
    }

    .img2{
        background: url(../assets/img002.jpg) 0 0 no-repeat;
    }

    .img3{
        background: url(../assets/img003.jpg) 0 0 no-repeat;
    }

    .imgcommon{
        width:220px;
        height:124px;
        background-size:contain;
        float:right;
        box-shadow:3px 3px 6px 1px #ddd;
    }

    .conlayout{
        width:1020px;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:flex-start;
    }

    .codeview{
        margin-right:20px;
        flex-grow:0;
        flex-shrink:0;
        flex-basis:40%;
        background:#2B2D27;
        color:white;
    }

    .content{
        flex-grow:0;
        flex-shrink:0;
        flex-basis:60%;
    }

    .fontstyle{
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        text-align: left;
        color: #2c3e50;
        text-indent:20px;
        font-style:italic;
    }


    .codegreen{
        color:#62A52C;
    }

    .codered{
        color:#B62127;
    }

    .codeblue{
        color:#4AC8EF;
    }


    .code3d{
        perspective: 1000px;

    }


    pre{
        margin:0px;
        padding:0px;
        transform: rotateY(-15deg) translateZ(-120px) translateX(-50px);
        border:1px solid #bbb;
        height:600px;
        width:450px;
        overflow:scroll;
    }
    */
</style>


