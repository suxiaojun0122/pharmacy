<template>
	<div class="app">
		<mt-header title="扫码购物" fixed id="headertitle">
			<mt-button icon="back" slot="left" @click='returns' id="top">
			</mt-button>
		</mt-header>

		<div class="banner">
			<div class="con">
				<div class="roww" id="headdpic">
					<img src="../img/baiyi.png" alt="">
					<p>范佳盈<span>  副主任医师</span><br><span>中国人民解放军第四--医院 </span></p>
				</div>
			</div>
			<div class="datapeo">
				<span>姓名：<a>陆远飞</a></span>
				<span>性别：<a>男</a></span>
				<span>年龄：<a>35岁</a></span>
				<span>主治医生：<a>黄柳</a></span>
				<p>住院时间：2015-01-06 15:22:02</p>
				<p>检查服务号：4389012</p>
			</div>
			<mt-swipe class="bannerbf">
				<mt-swipe-item>
					<img src="../img/berone.png" alt="" class="bannerimg">
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="../img/bannertwo.png" alt="" class="bannerimg">
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="../img/bannerthree.png" alt="" class="bannerimg">
				</mt-swipe-item>
			</mt-swipe>
			
			<div class="granule">
				<span>风热感冒颗粒</span><del>¥28.50</del><a>¥25.00</a>
			</div>
			<div class="granule">
				<span>药品详情</span>
			</div>
			<div class="particulars">
				<p>药品名称：<span>风热感冒颗粒</span></p>
				<p>批准文号：<span>国药准字H20044623</span></p>
				<p>生产企业：<span>桓诚帮药集团有限公司</span></p>
				<p>规格：<span>10g*8袋</span></p>
				<p>性状：<span>风热感冒颗粒，疏风清热，利咽解毒。用于风热
感冒，发热，有汗，鼻塞，头痛，咽痛，咳嗽，多痰。
风热感冒颗粒，疏风清热，利咽解毒。用于风热感冒，
发热，有汗，鼻塞，头痛，咽痛，咳嗽，多痰。</span></p>
			</div>
		
			<div class="purchasing">
				<img src="../img/wei1.png"><span>去附近药店购买</span>
			</div>
			<div class="purchasing topxia">
				<img src="../img/wei2.png"><span>咨询厂家药剂师购买</span>
			</div>
			
			<div class="trea">
				<p>药品疗程</p>
				<div>
					<button>-</button><input type="text" value="0"/><button>+</button>
				</div>
			</div>
			<div class="determine">
				<span>总价:<a><del>￥800.45</del></a></span><span>折扣价:<a>￥800.45</a></span>
				<router-link to='/succ'>
				<mt-button size="small" id="btnnnt">确认购买</mt-button>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import { Navbar, TabItem, Tabbar, TabContainer, TabContainerItem, Cell } from 'mint-ui';
	export default {
		name: 'app',
		data() {
			return {
				selected: ""
			}
		},
		methods: {
			returns() {
				window.history.go(-1);
			}
		}
	}
</script>

<style scoped lang="less">
	#headertitle {
		padding-bottom: 7px;
	}
	
	#top {
		margin-top: 0.6rem;
	}
	.bannerbf {
		height: 140px;
		margin-top: 1rem;
		border-bottom: 1px solid #e5e5e5;
		border-top: 1px solid #e5e5e5;
	}
	#cotext {
		color: #666666;
	}
	
	.bannerimg {
		width: 100%;
		height: 100%;
		display: block;
	}

	.banner {
		margin-top: 40px;
		background: #f5f5f5;
	}
	
	.roww {
		margin-top: 1rem;
		margin-bottom: 1rem;
		border-bottom: 1px solid #e5e5e5;
		border-top: 1px solid #e5e5e5;
		background: white;
		padding-top: 1rem;
		padding-bottom: 1rem;
		padding-left: 1rem;
		padding-right: 1rem;
		img {
			display: inline-block;
			width: 20%;
			/*height: 100%;*/
		}
		p {
			display: inline-block;
			padding-left: 1rem;
			/*padding-right: 4rem;*/
			font-size: 16px;
			width: 70%;
			font-weight: bold;
			margin-bottom: 0px;
			position: relative;
			top: 1rem;
			span {
				font-size: 12px;
				font-weight: normal;
				color: #626368;
			}
		}
	}
	
	.datapeo {
		/*margin-top: 1rem;*/
		background: white;
		border-top: 1px solid #e5e5e5;
		border-bottom: 1px solid #e5e5e5;
		span{
			width: 40%;
			padding-left: 1rem;
			display: inline-block;
			margin-top: 1rem;
			font-size: 16px;
			font-weight: 600;
			a{
				color: #f08c34;
			}
		}
		p{
			margin-bottom: 0px;
			padding-left: 1rem;
			color: #626368;
			font-size: 14px;
			margin-top: 1rem;
		}
		p:last-of-type{
			margin-bottom: 1rem;
		}
	}
	.granule{
		background: white;
		margin-top: 1rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
		text-indent: 0.5rem;
		border-bottom: 1px solid #e1e1e1;
		border-top: 1px solid #e1e1e1;
		span{
			width: 56%;
			display: inline-block;
			font-size: 16px;
		}
		del{
			display: inline-block;
			width: 20%;
			font-size: 12px;
		}
		a{
			color: #ff6b3d;
			font-size: 16px;
			font-weight: bold;
		}
	}
	.particulars{
		background: white;
		padding-left: 1rem;
		padding-right: 1rem;
		padding-bottom: 1rem;
		margin-bottom: 1rem;
		border-bottom: 1px solid #e1e1e1;
		p{
			width: 100%;
			/*text-indent: 1rem;*/
			font-size: 14px;
			padding-top: 1rem;
			/*padding-bottom: 1rem;*/
			padding-bottom: 0px;
			margin-bottom: 0px;
			span{
				font-size: 12px;
				color: #626368;
			}
		}
	}
	.purchasing{
		background: white;
		border-top: 1px solid #e1e1e1;
		padding-top: 1rem;
		padding-bottom: 1rem;
		padding-left: 1rem;
		padding-right: 1rem;
		img{
			display: inline-block;
			width: 10%;
		}
		span{
			font-size: 14px;
			font-weight: bold;
			padding-left: 1rem;
		}
	}
	.trea{
		background: white;
		margin-top: 1rem;
		padding: 1rem 1rem;
		border-top:1px solid #d2d2d2;
		p{
			display: inline-block;
			margin: 0px;
			width: 58%;
		}
		div{
			display: inline-block;
			width: 40%;
			button{
				width: 30px;
				height: 30px;
				background: white;
				border:1px solid #d2d2d2;
				outline: none;
			}
			button:first-of-type{
				border-radius: 5px 0px 0px 5px;
			}
			button:last-of-type{
				border-radius: 0px 5px 5px 0px;
			}
			input{
				width: 50px;
				height: 30px;
				border: 0px;
				border-bottom: 1px solid #d2d2d2;
				outline: none;
				border-top: 1px solid #d2d2d2;
				text-align: center;
			}
		}
	}
	.topxia{
		border-bottom: 1px solid #e1e1e1;
	}
	.determine{
		background: white;
		border-top:1px solid #d2d2d2 ;
		padding:1rem 1rem;
		span{
			font-size: 12px;
			margin-left: 0.5rem;
			a{
				font-size: 12px;
				color: #ff6b3d;
				font-weight: bold;
			}
		}
	}
	#btnnnt{
		width: 30%;
		background: #ff6b3d;
		color: white;
	    font-size: 12px;
	    /*padding: 1rem 1rem;*/
	   padding-top: 0.5rem;
	   margin-left: 2rem;
	   border-radius: 3rem;
	}
</style>