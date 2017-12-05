<template>
	<div class="app">
		<mt-header title="推荐药店" fixed id="headertitle">
			<mt-button icon="back" slot="left" @click='returns' id="top">
			</mt-button>
			<mt-button icon="more" slot="right" id="hahah"></mt-button>
		</mt-header>
		<div class="banner">
			<div><img src="../img/daerweima.png"></div>
			<p> 邀请码：2345</p>
			<span>推荐地址</span>
			<input type="text" value="http://123.56.102.141/hlc/webapp/index" />
			<mt-button size="large" type="danger" @click="btn">推荐</mt-button>
		</div>
	</div>
</template>


<script>
	import { Navbar, TabItem, Tabbar, TabContainer, TabContainerItem,Cell,Toast } from 'mint-ui';
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
			},
			btn(){
				Toast({
					message:"推荐成功",
					position:"bottom"
				});
			
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
	#hahah{
		margin-top: 0.8rem;
	}
	.banner{
		background: #f5f4f9;
		margin-top: 40px;
		padding-bottom: 3rem;
		div{
			width:80%;
			margin: 0 auto;
			padding-top: 3rem;
		
			img{
				display: block;
				width: 100%;
				height: 100%;
			}
		}
		p{
			text-align: center;
			font-size: 18px;
			margin-top: 1rem;
		}
		span{
			display: block;
			padding-left: 2rem;
			color: #999999;
		}
		input{
			margin: auto;
			display: block;
			width: 90%;
			background: #eeeeee;
			border: 1px solid #dcdcdc;
			height: 3.4rem;
			margin-top: 1rem;
			margin-bottom: 3rem;
			padding-left: 1rem;
			padding-right: 1rem;
			color: #118df0;
			outline: none;
		}
		button{
			width: 90%;
			margin: auto;
		}
	}
	
</style>