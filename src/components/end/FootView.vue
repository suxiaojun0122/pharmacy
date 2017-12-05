<template>

	<div class="app">
		
		<mt-tabbar fixed v-model="selected">
			<mt-tab-item>
				<router-link to='/home'>
					<p class="glyphicon glyphicon-home"></p>
					<p>首页</p>
				</router-link>
			</mt-tab-item>
			<mt-tab-item>
				<router-link to='/lecture'>
					<p class="glyphicon glyphicon-book"></p>
					<p >讲堂</p>		
				</router-link>
			</mt-tab-item>
			<mt-tab-item>
				<router-link to='/me'>
					<p class="glyphicon glyphicon-user is-active"></p>
					<p>我的</p>
				</router-link>
			</mt-tab-item>
		</mt-tabbar>

	</div>

</template>

<script>
export default{
	data(){
		return {
			selected:""
		}
	}
}
</script>

<style>
a{
	color: #999999;
}
a:hover{
	color: #2ca7d8;
	text-decoration: none;
}
.mint-tabbar.is-fixed{
	bottom:-1rem
}

.mint-tabbar{
	background: white;
	border-top: 1px solid #d7dce7;
}
.mint-tabbar > .mint-tab-item.is-selected{
	background: white;
}
.mint-tab-item-label>a>p{
	text-decoration: none;
}

</style>