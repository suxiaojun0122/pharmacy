<template>
	<div>
		<mt-header title="我的账户" fixed id="headertitle">
			<mt-button icon="back" slot="left" @click='returns' id="top">
			</mt-button>
		</mt-header>

		<div class="banner">
			<div class="con">
				<router-link to='/per'>
				<div class="roww" id="headdpic">
					<img src="../img/headimg.png" alt="">
					<p>13920484929<br><span>三聚药业 </span></p>
					<img src="../img/erweima.png" alt="">
				</div>
				</router-link>
				
				<div class="listtttt" id="listtttt">
					<router-link to='/per'>
					<mt-cell title="个人信息">
						<span class="glyphicon glyphicon-menu-right"></span>
						<img slot="icon" src="../img/iconone.png">
					</mt-cell>
					</router-link>
					<router-link to='/pay'>
					<mt-cell title="我的关注">
						<span class="glyphicon glyphicon-menu-right"></span>
						<img slot="icon" src="../img/icontwo.png">
					</mt-cell>
					</router-link>
					<router-link to='/rec'>
					<mt-cell title="推荐药店">
						<span class="glyphicon glyphicon-menu-right"></span>
						<img slot="icon" src="../img/iconthree.png">
					</mt-cell>
					</router-link>
				</div>
				
				<div class="listtttt" id="listtttt">
					<router-link to='/med'>
					<mt-cell title="进药申请">
						<span class="glyphicon glyphicon-menu-right"></span>
						<img slot="icon" src="../img/iconfour.png">
					</mt-cell>
					</router-link>
					<mt-cell title="设置">
						<span class="glyphicon glyphicon-menu-right"></span>
						<img slot="icon" src="../img/iconfive.png">
					</mt-cell>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { Navbar, TabItem, Tabbar, TabContainer, TabContainerItem,Cell } from 'mint-ui';
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
	
	.banner {
		margin-top: 40px;
		background: #f5f5f5;
		height: 100%;
		padding-bottom:60%;
	}
	
	.roww{
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
		img:last-of-type{
			/*margin-left: 1rem;*/
			position: relative;
			
			/*right: -2rem;*/
		}
		p {
			display: inline-block;
			padding-left: 1rem;
			padding-right: 4rem;
			font-size: 16px;
			width: 55%;
			font-weight: bold;
			margin-bottom: 0px;
			position: relative;
			top: 1rem;
			span {
				font-size: 14px;
				font-weight: normal;
				color: #626368;
			}
		}
	}
	.mint-cell:last-of-type{
		border-bottom: #e5e5e5 1px solid;
		margin-bottom: 1rem;
		
	}
	
	.mint-cell{
		/*border-bottom: #e5e5e5 1px solid;*/
		border-top: #e5e5e5 1px solid;
		padding-bottom: 0.5rem;
		padding-top: 0.5rem;
	}
	.mint-cell{
		img{
			display:inline-block;
			width: 12%;
		}
	}
	.con>a{
		color: black;
	}
.mint-cell-text{
	color: black;
}
.mint-cell{
	color: black;
}

</style>