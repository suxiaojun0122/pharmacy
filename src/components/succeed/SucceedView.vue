<template>
	<div class="app">
		<mt-header title="购买成功" fixed id="headertitle">
			<mt-button icon="back" slot="left" @click='returns' id="top">
			</mt-button>
			<mt-button icon="more" slot="right" id="hahah"></mt-button>
		</mt-header>
		<div class="banner">
			<div>
				<img src="../img/gre.png" alt="">
			</div>
			<p>购买成功</p>
			<mt-button type="danger" size="large" id="btnbtnbtn" @click="btnbtnbtn">分享</mt-button>
		</div>
	</div>
</template>

<script>
	import { Navbar, TabItem, Tabbar, TabContainer, TabContainerItem,Cell ,Toast} from 'mint-ui';
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
			btnbtnbtn(){
				Toast({
					message:"分享成功",
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
		margin-top: 150px;
		background: #f5f4f9;
		div{
			img{
				display: block;
				width: 30%;
				margin: auto;
				
			}
		}
		p{
			text-align: center;
			font-size: 18px;
			margin-top: 1rem;
			margin-bottom: 4rem;
		}
		button{
			width: 90%;
			margin: auto;
		}
	}
</style>