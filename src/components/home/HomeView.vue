<template>

	<div class="app" id="app">

		<mt-header title="销售记录" fixed id="headertitle">
			<mt-button class="glyphicon glyphicon-plus" slot="right" @click="dian">

			</mt-button>
		</mt-header>
		<div class="inde" id="inde" v-if='aaa'>
			<router-link to='/shop'>
			 <p class="glyphicon glyphicon-qrcode" id="glyphicon">扫码加药代</p>
			</router-link>
			<p class="glyphicon glyphicon-user" id="glyphicon">输入医生邀请码 </p>
		</div>
		<div class="banner">
			<mt-swipe class="bannerbf">
				<mt-swipe-item>
					<img src="../img/bannerone.png" alt="" class="bannerimg">
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="../img/bannertwo.png" alt="" class="bannerimg">
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="../img/bannerthree.png" alt="" class="bannerimg">
				</mt-swipe-item>
			</mt-swipe>
		</div>

		<mt-navbar v-model="selected" class="bgbghui">
			<mt-tab-item id="1">本周</mt-tab-item>
			<mt-tab-item id="2">历史</mt-tab-item>
		</mt-navbar>

		<!-- tab-container -->
		<mt-tab-container v-model="selected" class="bghui">
			<mt-tab-container-item id="1" v-show="true">
				<div class="listbox row">
					<div class="col-lg-2 	col-sm-2 col-xs-2"><img src="../img/capsule.png" alt=""></div>
					<div class="wordtext col-lg-6 col-sm-6 col-xs-6">
						<span>周四<a href="">2015.6.23</a></span>
						<p></p>
					</div>
					<div class="wordtextss col-lg-4 col-sm-4 col-xs-4">
						<span>30盒 </span>
						<a href="#">></a>
					</div>
				</div>

				<div class="listbox row">
					<div class="col-lg-2 	col-sm-2 col-xs-2"><img src="../img/capsules.png" alt=""></div>
					<div class="wordtext col-lg-6 col-sm-6 col-xs-6">
						<span>周三<a href="">2015.6.23</a></span>
						<p></p>
					</div>
					<div class="wordtextss col-lg-4 col-sm-4 col-xs-4">
						<span id="cotext">65盒 </span>
						<a href="#">></a>
					</div>
				</div>

				<div class="listbox row">
					<div class="col-lg-2 	col-sm-2 col-xs-2"><img src="../img/capsules.png" alt=""></div>
					<div class="wordtext col-lg-6 col-sm-6 col-xs-6">
						<span>周二<a href="">2015.6.23</a></span>
						<p></p>
					</div>
					<div class="wordtextss col-lg-4 col-sm-4 col-xs-4">
						<span id="cotext">58盒 </span>
						<a href="#">></a>
					</div>
				</div>

				<div class="listbox row">
					<div class="col-lg-2 	col-sm-2 col-xs-2"><img src="../img/capsules.png" alt=""></div>
					<div class="wordtext col-lg-6 col-sm-6 col-xs-6">
						<span>周一<a href="">2015.6.23</a></span>
						<p></p>
					</div>
					<div class="wordtextss col-lg-4 col-sm-4 col-xs-4">
						<span id="cotext">87盒 </span>
						<a href="#">></a>
					</div>
				</div>

			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				<div class="listbox row">
					<div class="col-lg-2 	col-sm-2 col-xs-2"><img src="../img/capsules.png" alt=""></div>
					<div class="wordtext col-lg-6 col-sm-6 col-xs-6">
						<span>周日<a href="">2015.6.23</a></span>
						<p id="hui"></p>
					</div>
					<div class="wordtextss col-lg-4 col-sm-4 col-xs-4">
						<span id="cotext">65盒 </span>
						<a href="#">></a>
					</div>
				</div>

				<div class="listbox row">
					<div class="col-lg-2 	col-sm-2 col-xs-2"><img src="../img/capsules.png" alt=""></div>
					<div class="wordtext col-lg-6 col-sm-6 col-xs-6">
						<span>周六<a href="">2015.6.23</a></span>
						<p  id="hui"></p>
					</div>
					<div class="wordtextss col-lg-4 col-sm-4 col-xs-4">
						<span id="cotext">58盒 </span>
						<a href="#">></a>
					</div>
				</div>

				<div class="listbox row">
					<div class="col-lg-2 	col-sm-2 col-xs-2"><img src="../img/capsules.png" alt=""></div>
					<div class="wordtext col-lg-6 col-sm-6 col-xs-6">
						<span>周五<a href="">2015.6.23</a></span>
						<p  id="hui"></p>
					</div>
					<div class="wordtextss col-lg-4 col-sm-4 col-xs-4">
						<span id="cotext">87盒 </span>
						<a href="#">></a>
					</div>
				</div>

				<div class="listbox row">
					<div class="col-lg-2 	col-sm-2 col-xs-2"><img src="../img/capsules.png" alt=""></div>
					<div class="wordtext col-lg-6 col-sm-6 col-xs-6">
						<span>周四<a href="">2015.6.23</a></span>
						<p id="hui"></p>
					</div>
					<div class="wordtextss col-lg-4 col-sm-4 col-xs-4">
						<span id="cotext">65盒 </span>
						<a href="#">></a>
					</div>
				</div>

				<div class="listbox row">
					<div class="col-lg-2 	col-sm-2 col-xs-2"><img src="../img/capsules.png" alt=""></div>
					<div class="wordtext col-lg-6 col-sm-6 col-xs-6">
						<span>周三<a href="">2015.6.23</a></span>
						<p  id="hui"></p>
					</div>
					<div class="wordtextss col-lg-4 col-sm-4 col-xs-4">
						<span id="cotext">58盒 </span>
						<a href="#">></a>
					</div>
				</div>

				<div class="listbox row">
					<div class="col-lg-2 	col-sm-2 col-xs-2"><img src="../img/capsules.png" alt=""></div>
					<div class="wordtext col-lg-6 col-sm-6 col-xs-6">
						<span>周二<a href="">2015.6.23</a></span>
						<p  id="hui"></p>
					</div>
					<div class="wordtextss col-lg-4 col-sm-4 col-xs-4">
						<span id="cotext">87盒 </span>
						<a href="#">></a>
					</div>
				</div>
				
				<div class="listbox row">
					<div class="col-lg-2 	col-sm-2 col-xs-2"><img src="../img/capsules.png" alt=""></div>
					<div class="wordtext col-lg-6 col-sm-6 col-xs-6">
						<span>周一<a href="">2015.6.23</a></span>
						<p  id="hui"></p>
					</div>
					<div class="wordtextss col-lg-4 col-sm-4 col-xs-4">
						<span id="cotext">87盒 </span>
						<a href="#">></a>
					</div>
				</div>

			</mt-tab-container-item>
		</mt-tab-container>

	</div>

</template>

<script>
	import { Navbar, TabItem, Tabbar, TabContainer, TabContainerItem,Cell,Popup } from 'mint-ui';
	export default {
		name: 'app',
		data() {
			return {
				selected: "1",
				popupVisible:false,
				aaa:false
			}
		},
		methods: {
			dian() {
				if(!this.aaa==true){
					this.aaa=true
				}else{
					this.aaa=false
				}
			}
		
		}

	}
</script>

<style scoped>
	#headertitle{
		z-index:100 ;
	}
	.bannerbf {
		height: 160px;
	}
	
	#cotext {
		color: #666666;
	}
	
	.bannerimg {
		width: 100%;
		height: 100%;
		display: block;
	}
	
	.mint-swipe-indicator.is-active {
		background: #ffffff;
	}
	
	.mint-swipe-indicator {
		opacity: 1;
	}
	
	.banner {
		margin-top: 40px;
	}
	
   
	
	.listbox>div>img {
		display: block;
		width: 80%;
		height: 80%;
		margin-left: 1rem;
	}
	
	.listbox>div {
		/*padding-left: 0px;*/
		padding-right: 0px;
		display: inline-block;
	}
	
	.listbox:first-of-type {
		margin-top: 1rem;
		border-top: 1px solid #e1e1e1;
	}
	
	.bgbghui {
		border-bottom: 1px solid #e1e1e1;
	}
	
	#hui {
		background: #CACACA;
	}
	
	.listbox {
		/*width: 100%;*/
		/*	background: pink;*/
		padding-top: 1rem;
		padding-bottom: 1rem;
		display: block;
		background: white;
		border-bottom: 1px solid #e1e1e1;
	}
	
	.bghui {
		background: #f5f5f5;
	}
	
	.bgbghui>a {
		text-decoration: none;
		color: #6dba42;
	}
	
	.mint-navbar .mint-tab-item.is-selected {
		border-bottom: 3px solid #6dba42;
		color: #6dba42;
		margin-bottom: 0px;
	}
	
	.wordtext>span {
		font-size: 22px;
		display: inline-block;
		margin-bottom: 0.8rem;
	}
	
	.wordtext>span>a {
		font-size: 16px;
		color: #666666;
		margin-left: 1rem;
	}
	
	.wordtext>p {
		width: 40%;
		height: 0.8rem;
		background: #ff6b3d;
		border-radius: 8px;
		margin: 0px;
	}
	
	.listbox:first-of-type .wordtext>p {
		width: 40%;
		background: #ff6b3d;
	}
	
	.listbox:nth-of-type(2) .wordtext>p {
		width: 60%;
		background: #cdcdcd;
	}
	
	.listbox:nth-of-type(3) .wordtext>p {
		width: 50%;
		background: #cdcdcd;
	}
	
	.listbox:nth-of-type(4) .wordtext>p {
		width: 80%;
		background: #cdcdcd;
	}
	
	.wordtextss>span {
		font-size: 22px;
		color: #f08c34;
		padding-left: 2rem;
	}
	
	.wordtextss {
		padding-top: 1rem;
	}
	
	.wordtextss>a {
		font-size: 22px;
		color: #cacaca;
	}
	
	.mint-tab-item {
		border-bottom: 3px solid white;
	}
	#headertitle{
		padding-bottom:7px;
	}
	#glyphicon:nth-of-type(2){
		display: block;
		height: 40px;
		line-height: 40px;
		margin-bottom: 0px;
		/*text-align: center;*/
	}
	#glyphicon:nth-of-type(1){
		display: block;
		margin-bottom: 0px;
		height: 40px;
		line-height: 40px;
		/*text-align: center;*/
		border-bottom: 1px solid #e6e6e6;
	}
	.glyphicon-qrcode:before{
		margin-left: 1rem;
		margin-right: 1rem;
		color: #6dba42;
	}
	.glyphicon-user:before{
		margin-left: 1rem;
		margin-right: 1rem;
		color: #ffa94c;
	}
	#glyphicon{
		color: black;
		font-size: 12px;
	}
	.inde{
		position: absolute;
		top: 40px;
		right:0px;
		background: #ffffff;
		z-index: 99;
		width: 130px;
		/*display: none;*/
		height: 80px;
		p{
			display: block;
			height: 40px;
			line-height: 40px;
			color: black;
		}
	}
</style>