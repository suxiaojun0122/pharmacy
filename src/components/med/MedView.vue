<template>
	<div id="app">
		<mt-header title="进药申请" fixed id="headertitle">
			<mt-button icon="back" slot="left" @click='returns' id="top">
			</mt-button>
			<mt-button icon="more" slot="right" id="hahah"></mt-button>
		</mt-header>
		<div class="banner">
			<div class="apply first" id="banner">
				<div class="apply-cont clearfix">
					<div class="apply-img">
						<img src="../img/ganmao.png">
					</div>
					<div class="apply-word">
						<h3>白云山伤风感冒胶囊</h3>
						<p>购买时间: 2015-12-15<span>两个疗程</span></p>

						<span>药品疗程:</span>
						<input type="button" value="-" id="jian" /><input type="text" id="txt" /><input type="button" value="+" id="jia" />
					</div>
				</div>
				<div class="apply-bot clearfix">
					<span>总价:<i>￥800.45</i></span>
					
						<input type="button" id="qr" value="确认" />
			
				</div>
			</div>
			<div class="apply">
				<div class="apply-cont clearfix">
					<div class="apply-img">
						<img src="../img/ganmao.png">
					</div>
					<div class="apply-word">
						<h3>白云山伤风感冒胶囊</h3>
						<p>购买时间: 2015-12-15<span>两个疗程</span></p>

						<span>药品疗程:</span>
						<input type="button" value="-" id="jian" /><input type="text" id="txt" /><input type="button" value="+" id="jia" />
					</div>
				</div>
				<div class="apply-bot clearfix">
					<span>总价:<i>￥800.45</i></span>
					
						<input type="button" id="qr" value="确认" />
				
				</div>
			</div>

			<div class="apply end">
				<div class="apply-cont clearfix">
					<div class="apply-img">
						<img src="../img/ganmao.png">
					</div>
					<div class="apply-word">
						<h3>白云山伤风感冒胶囊</h3>
						<p>购买时间: 2015-12-15<span>两个疗程</span></p>

						<span>药品疗程:</span>
						<input type="button" value="-" id="jian" /><input type="text" id="txt" /><input type="button" value="+" id="jia" />
					</div>
				</div>
				<div class="apply-bot clearfix">
					<span>总价:<i>￥800.45</i></span>
					
						<input type="button" id="qr" value="确认" />
					
				</div>
			</div>

		</div>
	</div>

</template>
<script>
	export default {
		methods: {
			returns() {
				window.history.go(-1)
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
	
	#hahah {
		margin-top: 0.8rem;
	}
	
	.apply {
		/*padding-bottom: 3rem;*/
		border-bottom: 1px solid #e1e1e1;
		border-top: 1px solid #e1e1e1;
		background: #f5f4f9;
		background: white;
		margin-top: 1rem;
	}
	
	.apply-cont {
		width: 94%;
		margin: auto;
		padding: 1rem 0;
		border-bottom: 1px solid #e1e1e1;
	}
	
	.apply-word {
		width: 67%;
		float: right;
	}
	
	.apply-word {
		h3 {
			font-size: 1.5rem;
			color: #333333;
			margin-top: 0px;
		}
	}
	
	.apply-word {
		span {
			font-size: 1.3rem;
			color: #b6b6b6;
		}
	}
	
	.apply-word {
		p {
			color: #626368;
			font-size: 1.3rem;
		}
	}
	
	.apply-word {
		p {
			span {
				margin-left: 1rem;
				display: inline-block;
				color: #626368;
				font-size: 1.3rem;
			}
		}
	}
	
	.apply-img {
		border: 1px solid #e1e1e1;
		width: 7rem;
		height: 6.3rem;
		float: left;
		padding: 1.0rem 0.8rem 0;
	}
	
	.apply-img {
		img {
			width: 100%;
		}
	}
	
	.price {
		font-size: 1.4rem;
		color: #a8a8a8;
	}
	
	#txt {
		width: 3rem;
		height: 2rem;
	
	}
	
	#jian {
		height: 2rem;
		width: 2rem;
		padding-bottom: 0.5rem;
		padding: 0;
	}
	
	#jia {
		height: 2rem;
		width: 2rem;
		padding-bottom: 0.5rem;
		padding: 0;
	}
	.banner{
		background: #f5f4f9;
		padding-bottom: 4rem;
	}
	.apply-bot {
		width: 94%;
		margin: auto;
		padding: 1rem 0;
	}
	
	.apply-bot {
		span {
			display: inline-block;
			font-size: 1.5rem;
			float: left;
			margin-top: 0.3rem;
		}
	}
	
	.apply-bot {
		span {
			i {
				color: #ff6b3d;
				font-style: normal;
			}
		}
	}
	
	#qr {
		background: #f08c34;
		border-radius: 20px;
		width: 6rem;
		color: white;
		float: right;
		border: none;
		outline: none;
	}
	
	.end {
		margin-bottom: 6rem;
	}
	
	.first {
		margin-top: 4.8rem;
	}
	
	#txt {
		height: 20px;
		outline: none;
		display: inline-block;
		position: relative;
		bottom: 0.1rem;
		border: 1px solid #d2d2d2;
	}
	
	#jia {
		outline: none;
		display: inline-block;
		width: 20px;
		height: 20px;
		background: white;
		border: 1px solid #d2d2d2;
		border-radius:0px 3px 3px 0px ;
		
	}
	
	#jian {
		border-radius:3px 0px 0px 3px ;
		outline: none;
		background: white;
		border: 1px solid #d2d2d2;
		display: inline-block;
		width: 20px;
		height: 20px;
	}
</style>