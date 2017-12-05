<template>
	<div class="app">
		<mt-header title="我的关注" fixed id="headertitle">
			<mt-button icon="back" slot="left" @click='returns' id="top">
			</mt-button>
		</mt-header>

		<div class="banner">
			<!-- tab-container -->
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1" v-show="true" class="container">
					
					<div class="listbox row">
						<div class="col-sm-4 col-md-4 col-xs-4" id="pa"><img src="../img/guan1.png" alt=""></div>
						<div class="col-sm-8 col-md-8 col-xs-8">
							<span>老吃太饱真会撑出十种甲方姜</span>
							<a class="aaa">2015.05.01</a>
						</div>
					</div>

					<div class="listbox row">
						<div class="col-sm-4 col-md-4 col-xs-4" id="pa"><img src="../img/guan2.png" alt=""></div>
						<div class="col-sm-8 col-md-8 col-xs-8">
							<span>老吃太饱真会撑出十种甲方姜</span>
							<a class="aaa">2015.05.01</a>
						</div>
					</div>

					<div class="listbox row">
						<div class="col-sm-4 col-md-4 col-xs-4" id="pa"><img src="../img/guan3.png" alt=""></div>
						<div class="col-sm-8 col-md-8 col-xs-8">
							<span>老吃太饱真会撑出十种甲方姜</span>
							<a class="aaa">2015.05.01</a>
						</div>
					</div>

					<div class="listbox row">
						<div class="col-sm-4 col-md-4 col-xs-4" id="pa"><img src="../img/guan4.png" alt=""></div>
						<div class="col-sm-8 col-md-8 col-xs-8">
							<span>老吃太饱真会撑出十种甲方姜</span>
							<a class="aaa">2015.05.01</a>
						</div>
					</div>
				</mt-tab-container-item>		
			</mt-tab-container>
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
	.banner{
		margin-top: 40px;
		background: #f5f5f5;
	}
	.bgbghui{
		border-bottom: 1px solid #bcc1c4;
	}
	.bgbghui {
		a{
			text-decoration: none;
			color: #6e7b86;
		}
	}
	.mint-navbar .mint-tab-item.is-selected {
		border-bottom: 2px solid #6e7b86;
		color: #f08c34;
		margin-bottom: 0px;
	}
	.mint-tab-item {
		border-bottom: 2px solid white;
	}
	.onepeople{
		img{
			display: block;
			width: 100%;
			height: 100%;
		}
	}
	.container{
		padding: 1rem 1rem;
	}
	.listbox{
		background: white;
		padding-top: 1rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid #d4dadc;
		border-top: 1px solid #d4dadc;
		margin-bottom: 1rem;
	}
	
	.listbox{
		div:first-of-type{
			img{
				display: block;
				width: 100%;
			}
		}	
	}
	.listbox{
		div:nth-of-type(2){
			span{
				color: #4c504f;
				font-size: 16px;
				font-family: "微软雅黑";
				display: block;
				width: 100%;
				font-weight: bold;
			}
			a{
				display: block;
				width: 100%;
				text-align: right;
				font-size: 10px;
				margin-top: 3rem;
				color: #8c8c8c;
			}
		}	
	}
	#pa{
		padding-right: 0px;
	}
</style>