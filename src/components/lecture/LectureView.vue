<template>
	<div>
		<mt-header title="资讯" fixed id="headertitle">
			<mt-button icon="back" slot="left" @click='returns' id="top">
			</mt-button>
		</mt-header>

		<div class="banner">

			<mt-navbar v-model="selected" class="bgbghui">
				<mt-tab-item id="1">最新资讯</mt-tab-item>
				<mt-tab-item id="2">健康专题</mt-tab-item>
				<mt-tab-item id="3">个人收藏</mt-tab-item>
			</mt-navbar>

			<!-- tab-container -->
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1" v-show="true" class="container">
					<router-link to='/txt'>
						<div class="listbox row">
							<p>乙肝的共识和误区(上)</p>
							<div class="col-sm-4 col-md-4 col-xs-4" id="pa"><img src="../img/listnav.png" alt=""></div>
							<div class="col-sm-8 col-md-8 col-xs-8">
								<span>两性健康误区多，搜索引擎太坑爹，电
视广告瞎忽悠，信谁？</span>
								<a class="aaa">专题</a>
							</div>
						</div>
					</router-link>
					<router-link to='/txt'>
						<div class="listbox row">
							<p>乙肝的共识和误区(上)</p>
							<div class="col-sm-4 col-md-4 col-xs-4" id="pa"><img src="../img/listnav.png" alt=""></div>
							<div class="col-sm-8 col-md-8 col-xs-8">
								<span>两性健康误区多，搜索引擎太坑爹，电
视广告瞎忽悠，信谁？</span>
								<a class="aaa">专题</a>
							</div>
						</div>
					</router-link>
					<router-link to='/txt'>
						<div class="listbox row">
							<p>乙肝的共识和误区(上)</p>
							<div class="col-sm-4 col-md-4 col-xs-4" id="pa"><img src="../img/listnav.png" alt=""></div>
							<div class="col-sm-8 col-md-8 col-xs-8">
								<span>两性健康误区多，搜索引擎太坑爹，电
视广告瞎忽悠，信谁？</span>
								<a class="aaa">专题</a>
							</div>
						</div>
					</router-link>

					<router-link to='/txt'>
						<div class="listbox row">
							<p>乙肝的共识和误区(上)</p>
							<div class="col-sm-4 col-md-4 col-xs-4" id="pa"><img src="../img/listnav.png" alt=""></div>
							<div class="col-sm-8 col-md-8 col-xs-8">
								<span>两性健康误区多，搜索引擎太坑爹，电
视广告瞎忽悠，信谁？</span>
								<a class="aaa">专题</a>
							</div>
						</div>
					</router-link>
					<router-link to='/txt'>
						<div class="listbox row">
							<p>乙肝的共识和误区(上)</p>
							<div class="col-sm-4 col-md-4 col-xs-4" id="pa"><img src="../img/listnav.png" alt=""></div>
							<div class="col-sm-8 col-md-8 col-xs-8">
								<span>两性健康误区多，搜索引擎太坑爹，电
视广告瞎忽悠，信谁？</span>
								<a class="aaa">专题</a>
							</div>
						</div>
					</router-link>
				</mt-tab-container-item>
				<mt-tab-container-item id="2" class="container">
					<div class="listbox row">
						<p>【专题】男性&女性</p>
						<div class="col-sm-4 col-md-4 col-xs-4" id="pa"><img src="../img/listnav.png" alt=""></div>
						<div class="col-sm-8 col-md-8 col-xs-8">
							<span>两性健康误区多，搜索引擎太坑爹，电
视广告瞎忽悠，信谁？</span>
							<a>2014-08-13</a>
						</div>
					</div>

					<div class="listbox row">
						<p>【专题】男性&女性</p>
						<div class="col-sm-4 col-md-4 col-xs-4" id="pa"><img src="../img/listnav.png" alt=""></div>
						<div class="col-sm-8 col-md-8 col-xs-8">
							<span>两性健康误区多，搜索引擎太坑爹，电
视广告瞎忽悠，信谁？</span>
							<a>2014-08-13</a>
						</div>
					</div>

					<div class="listbox row">
						<p>【专题】男性&女性</p>
						<div class="col-sm-4 col-md-4 col-xs-4" id="pa"><img src="../img/listnav.png" alt=""></div>
						<div class="col-sm-8 col-md-8 col-xs-8">
							<span>两性健康误区多，搜索引擎太坑爹，电
视广告瞎忽悠，信谁？</span>
							<a>2014-08-13</a>
						</div>
					</div>

					<div class="listbox row">
						<p>【专题】男性&女性</p>
						<div class="col-sm-4 col-md-4 col-xs-4" id="pa"><img src="../img/listnav.png" alt=""></div>
						<div class="col-sm-8 col-md-8 col-xs-8">
							<span>两性健康误区多，搜索引擎太坑爹，电
视广告瞎忽悠，信谁？</span>
							<a>2014-08-13</a>
						</div>
					</div>

					<div class="listbox row">
						<p>【专题】男性&女性</p>
						<div class="col-sm-4 col-md-4 col-xs-4" id="pa"><img src="../img/listnav.png" alt=""></div>
						<div class="col-sm-8 col-md-8 col-xs-8">
							<span>两性健康误区多，搜索引擎太坑爹，电
视广告瞎忽悠，信谁？</span>
							<a>2014-08-13</a>
						</div>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="3">
					<div class="onepeople">
						<img src="../img/onepeoplr.png" alt="">
					</div>
				</mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>
</template>

<script>
	import { Navbar, TabItem, Tabbar, TabContainer, TabContainerItem } from 'mint-ui';
	export default {
		name: 'app',
		data() {
			return {
				selected: "1"
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
	
	.banner {
		margin-top: 40px;
		background: #f5f5f5;
	}
	
	.bgbghui {
		border-bottom: 1px solid #bcc1c4;
	}
	
	.bgbghui {
		a {
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
	
	.onepeople {
		img {
			display: block;
			width: 100%;
			height: 100%;
		}
	}
	
	.container {
		padding: 1rem 1rem;
	}
	
	.listbox {
		background: white;
		padding-top: 1rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid #d4dadc;
		border-top: 1px solid #d4dadc;
		margin-bottom: 1rem;
	}
	
	.listbox {
		p {
			text-indent: 1rem;
			font-weight: bold;
		}
	}
	
	.listbox {
		div:first-of-type {
			img {
				display: block;
				width: 100%;
			}
		}
	}
	
	.listbox {
		div:nth-of-type(2) {
			span {
				color: #4c504f;
				font-size: 13px;
				font-family: "微软雅黑";
				display: block;
				width: 100%;
			}
			a {
				display: block;
				width: 100%;
				text-align: right;
				font-size: 10px;
				margin-top: 1rem;
				color: #8c8c8c;
			}
		}
	}
	
	#pa {
		padding-right: 0px;
	}
	
	.mint-cell {
		color: black;
	}
	
	.container>a {
		color: black;
	}
</style>