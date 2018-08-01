
const s=`
<div class="content">
		<section>
	<div class="img1 imgcommon imglayout"></div>
	<p class="fontstyle"> 千寻和爸爸妈妈一同驱车前往新家，在郊外的小路上不慎进入了神秘的隧道——他们去到了另外一个诡异世界—一个中世纪的小镇。
	远处飘来食物的香味，爸爸妈妈大快朵颐，孰料之后变成了猪！这时小镇上渐渐来了许多样子古怪、半透明的人。</p>
		</section>

	<section>
	<img class="img2 imgcommon imglayout" src="#" alt="">
	<p class="fontstyle">千寻仓皇逃出，一个叫小白的人救了他，喂了她阻止身体消失的药，并且告诉她怎样去找锅炉爷爷以及汤婆婆，
	而且必须获得一分工作才能不被魔法变成别的东西。千寻在小白的帮助下幸运地获得了一份在浴池打杂的工作。渐渐她不再被那些怪模怪样的人吓倒，
	并从小玲那儿知道了小白是凶恶的汤婆婆的弟子。</p>
	</section>

		<section>
	<img class="img3 imgcommon imglayout" src="#" alt="">
	<p class="fontstyle">一次，千寻发现小白被一群白色飞舞的纸人打伤，为了救受伤的小白，她用河神送给她的药丸驱出了小白身体内的
	封印以及守封印的小妖精，但小白还是没有醒过来。为了救小白，千寻又踏上了她的冒险之旅。
	</p>
		</section>  
</div>
  `

  const code=`
/******CSS样式源代码展示******/
<pre>
<span class="codegreen">.container</span>{
<span class="codeblue">border</span>:1px solid #ccc;
<span class="codeblue">border</span>-radius:3px;
<span class="codeblue">box-shadow</span>:3px 3px 3px #ccc;
}

<span class="codered">section</span>{
<span class="codeblue">padding</span>:20px 20px;
}

<span class="codegreen">.codeview</span>{
<span class="codeblue">width</span>:450px;
<span class="codeblue">border</span>:1px solid black;
}

<span class="codered">/*****代码高亮*****/</span>
<span class="codegreen">.img1</span>{
<span class="codeblue">background</span>: url(http://n1.itc.cn/img8/wb/recom/2016/05/09/146272579903814326.JPEG) 0 0 no-repeat;
}

<span class="codegreen">.img2</span>{
<span class="codeblue">background</span>: url(http://n1.itc.cn/img8/wb/recom/2016/05/09/146272579903814326.JPEG) 0 0 no-repeat;
}

<span class="codegreen">.img3</span>{
<span class="codeblue">background</span>: url(http://n1.itc.cn/img8/wb/recom/2016/05/09/146272579903814326.JPEG) 0 0 no-repeat;
}
/******增加点3D效果呗*******/
<span class="codegreen">.imgcomon</span>{
<span class="codeblue">width</span>:220px;
<span class="codeblue">height</span>:124px;
<span class="codeblue">background-size</span>:contain;
<span class="codeblue">float</span>:right;
<span class="codeblue">box-shadow</span>:3px 3px 6px 1px #ddd;
}

<span class="codegreen">.conlayout</span>{
<span class="codeblue">display</span>:flex;
<span class="codeblue">flex-direction</span>:row;
}

<span class="codegreen">.imglayout</span>{
<span class="codeblue">flex-grow</span>:1
}

</pre>
`

const contentstring={
    s:s,
    code:code
}



 export default contentstring





