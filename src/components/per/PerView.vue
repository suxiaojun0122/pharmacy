<template>
	<div class="app">
		<mt-header title="医生档案" fixed id="headertitle">
			<mt-button icon="back" slot="left" @click='returns' id="top">
			</mt-button>
		</mt-header>
		
		<div class="banner">
			<div class="con">
				<div class="roww">
					<span class="col-lg-4 	col-xs-4 col-sm-4">头像</span>
					<p class="col-lg-4	col-xs-4 col-sm-4"></p>
					<img src="../img/headimg.png" alt="" class="img-circle">
					<a class="glyphicon glyphicon-menu-right"></a>
				</div>
				
				<div class="rowww">
					<span class="col-lg-4 	col-xs-4 col-sm-4">姓名</span>
					<p class="col-lg-5 col-xs-5 col-sm-5"></p>
					<p>小可爱</p>
					<a class="glyphicon glyphicon-menu-right"></a>
				</div>
				
				<div class="rowww" >
					<span class="col-lg-4 	col-xs-4 col-sm-4">昵称</span>
					<p class="col-lg-4	col-xs-4 col-sm-4"></p>
					<p class="leftleft">就不告诉你<a class="glyphicon glyphicon-menu-right"></a></p>		
				</div>
				
				
				<div class="rowww" id="headdpic">
					<span class="col-lg-4 	col-xs-4 col-sm-4">性别</span>
					<p class="col-lg-6	col-xs-6 col-sm-6"></p>
					<p class="lefts">男<a class="glyphicon glyphicon-menu-right"></a></p>		
				</div>
				
				
				<div class="rowww" >
					<span class="col-lg-4 	col-xs-4 col-sm-4">出生年月</span>
					<p class="col-lg-4	col-xs-4 col-sm-4"></p>
					<p class="leftleft">1989.12.12<a class="glyphicon glyphicon-menu-right"></a></p>		
				</div>
				
			
				<mt-button type="danger" size="large" id="btnbtnbtn" @click="btn">保存</mt-button>

		</div>
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
			btn(){
				Toast({
					message:"保存成功",
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
	.banner {
		margin-top: 40px;
		background: #f5f5f5;
		height: 100%;
		padding-bottom:60%;
	}

	.roww{
		margin-top: 1rem;
		/*margin-bottom: 1rem;*/
		border-bottom: 1px solid #e5e5e5;
		border-top: 1px solid #e5e5e5;
		background: white;
		padding-top: 1rem;
		padding-bottom: 1rem;
		padding-left: 1rem;
		padding-right: 1rem;
		span{
			position: relative;
			line-height: 6rem;
			padding: 0px 0px;
		}
		img{
			display: inline-block;
			width: 20%;
			/*float: right;*/
			/*margin-left: 1rem;*/
		}
		a{
			/*margin-left: 2rem;*/
		}
	}
	.lefts{
		position: relative;
		left: 0.3rem;
		a{
			margin-left: 0.3rem;
		}
	}
	.rowww{
		/*margin-top: 1rem;*/
		/*margin-bottom: 1rem;*/
		border-bottom: 1px solid #e5e5e5;
		/*border-top: 1px solid #e5e5e5;*/
		background: white;
		padding-top: 1rem;
		padding-bottom: 1rem;
		padding-left: 1rem;
		padding-right: 1rem;
		span{
			position: relative;
			/*line-height: 6rem;*/
			padding: 0px 0px;
		}
		p:last-of-type{
			display: inline-block;
			/*width: 20%;*/
			/*float: right;*/
			/*margin-left: 3.7rem;*/
		}
		a{
			/*margin-left: 2rem;*/
		}
		p{
			display: inline-block;
			margin-bottom: 0rem;
		}
	}
	.glyphicon-menu-right:before{
		color: #cacaca;
	}
	.glyphicon .glyphicon-menu-right{
		color: black;
	}
	/*.leftleft{
		position: relative;
		left: 7.6rem;
	}*/
	.leftleft>a{
		margin-left: 0.3rem;
	}
	#headdpic{
		margin-top: 1rem;
		border-top: 1px solid #e1e1e1;
	}
	#btnbtnbtn{
		position: relative;
		top: 3rem;
		width: 90%;
		background: #f08c34;
		margin: auto;
	}
	
</style>