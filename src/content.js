// const s=`
// 千寻和爸爸妈妈一同驱车前往新家，在郊外的小路上不慎进入了神秘的隧道——他们去到了另外一个诡异世界—一个中世纪的小镇。远处飘来食物的香味，爸爸妈妈大快朵颐，孰料之后变成了猪！这时小镇上渐渐来了许多样子古怪、半透明的人。 
// 　　千寻仓皇逃出，一个叫小白的人救了他，喂了她阻止身体消 失的药，并且告诉她怎样去找锅炉爷爷以及汤婆婆，而且必须获得一分工作才能不被魔法变成别的东西。 
// 　　千寻在小白的帮助下幸运地获得了一份在浴池打杂的工作。渐渐她不再被那些怪模怪样的人吓倒，并从小玲那儿知道了小白是凶恶的汤婆婆的弟子。 
// 　　一次，千寻发现小白被一群白色飞舞的纸人打伤，为了救受伤的小白，她用河神送给她的药丸驱出了小白身体内的封印以及守封印的小妖精，但小白还是没有醒过来。 
// 　　为了救小白，千寻又踏上了她的冒险之旅。
// `

const s=`
<div>
<img class="img1 borderactive" src="http://n1.itc.cn/img8/wb/recom/2016/05/09/146272579903814326.JPEG" alt="">
<p class="fontstyle"> 千寻和爸爸妈妈一同驱车前往新家，在郊外的小路上不慎进入了神秘的隧道——他们去到了另外一个诡异世界—一个中世纪的小镇。
远处飘来食物的香味，爸爸妈妈大快朵颐，孰料之后变成了猪！这时小镇上渐渐来了许多样子古怪、半透明的人。</p>

<img class="img2" src="#" alt="">
<p class="fontstyle">千寻仓皇逃出，一个叫小白的人救了他，喂了她阻止身体消失的药，并且告诉她怎样去找锅炉爷爷以及汤婆婆，
而且必须获得一分工作才能不被魔法变成别的东西。千寻在小白的帮助下幸运地获得了一份在浴池打杂的工作。渐渐她不再被那些怪模怪样的人吓倒，
并从小玲那儿知道了小白是凶恶的汤婆婆的弟子。</p>

<img class="img3" src="#" alt="">
<p class="borderactive">一次，千寻发现小白被一群白色飞舞的纸人打伤，为了救受伤的小白，她用河神送给她的药丸驱出了小白身体内的
封印以及守封印的小妖精，但小白还是没有醒过来。为了救小白，千寻又踏上了她的冒险之旅。
</p>
</div>
`
const code=`
.fontstyle{
    font-style:italic;
}

.fontfamily{
  font-family:'Times New Roman',Serif;
}

.fontidented{
  text-indent: 30px;
  font-size:15px;
}

.borderactive{
    border:1px solid #ccc;
    border-radius: 3px;
    box-shadow: 3px 3px 5px #ccc;
}

.layout{
  display:flex;
  flex-direction:row;
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
`


const contentstring={
    s:s,
    code:code
}



 export default contentstring



//  <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="utf-8">
//   <title>JS Bin</title>
// </head>
// <body>

// <div class="container conlayout">
// 	<section>
// 	  <div class="codeview">
// 	    <pre>
	      
// 	    </pre>
// 	  </div>
// 	</section>
// 	<section>
// <div class="img1 imgcommon imglayout"></div>
// <p class="fontstyle"> 千寻和爸爸妈妈一同驱车前往新家，在郊外的小路上不慎进入了神秘的隧道——他们去到了另外一个诡异世界—一个中世纪的小镇。
// 远处飘来食物的香味，爸爸妈妈大快朵颐，孰料之后变成了猪！这时小镇上渐渐来了许多样子古怪、半透明的人。</p>
// 	</section>

// <section>
// <img class="img2 imgcommon imglayout" src="#" alt="">
// <p class="fontstyle">千寻仓皇逃出，一个叫小白的人救了他，喂了她阻止身体消失的药，并且告诉她怎样去找锅炉爷爷以及汤婆婆，
// 而且必须获得一分工作才能不被魔法变成别的东西。千寻在小白的帮助下幸运地获得了一份在浴池打杂的工作。渐渐她不再被那些怪模怪样的人吓倒，
// 并从小玲那儿知道了小白是凶恶的汤婆婆的弟子。</p>
// </section>

// 	<section>
// <img class="img3 imgcommon imglayout" src="#" alt="">
// <p class="borderactive">一次，千寻发现小白被一群白色飞舞的纸人打伤，为了救受伤的小白，她用河神送给她的药丸驱出了小白身体内的
// 封印以及守封印的小妖精，但小白还是没有醒过来。为了救小白，千寻又踏上了她的冒险之旅。
// </p>
// 	</section>
// </div>
// </body>
// </html>



// css
// .container{
// 	width:550px;
// 	border:1px solid #ccc;
// 	border-radius:3px;
// 	box-shadow:3px 3px 3px #ccc;
// }

// section{
// 	padding:20px 20px;
// }


// .img1{
// background: url(http://n1.itc.cn/img8/wb/recom/2016/05/09/146272579903814326.JPEG) 0 0 no-repeat;
// }

// .img2{
// background: url(http://n1.itc.cn/img8/wb/recom/2016/05/09/146272579903814326.JPEG) 0 0 no-repeat;
// }

// .img3{
// background: url(http://n1.itc.cn/img8/wb/recom/2016/05/09/146272579903814326.JPEG) 0 0 no-repeat;
// }

// .imgcommon{
// 	width:220px;
// 	height:124px;
// 	background-size:contain;
// 	float:right;
// 	box-shadow:3px 3px 6px 1px #ddd;
// }

// .conlayout{
// 	display:flex;
// 	flex-direction:row;
// }

// .imglayout{
// 	flex-grow:1
// }





