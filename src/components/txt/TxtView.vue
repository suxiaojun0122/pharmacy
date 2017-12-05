<template>
	<div class="app">
		<mt-header title="眼科医疗设备进口替代将提速,进口化替代步伐正在加快" fixed id="headertitle">
			<mt-button icon="back" slot="left" @click='returns' id="top">
			</mt-button>
			<mt-button icon="more" slot="right" id="hahah"></mt-button>
		</mt-header>
		
		<div class="banner">
			<h1>眼科医疗设备进口替代将提速,进口化替代步伐正在加快</h1>
			<span>发布日期：2015-12-21</span><span>阅读量：1000</span>
			<p>医药网3月18日讯　17日，第十六届国际眼科学学术会议在上海举行，此次会议全面展示眼科诊断、治疗新技术，其中涉及器材设备以及临床眼科等，为眼科医疗设备技术的发展起到重要作用。另外，随着电子产品的普及、老龄化加剧以及青少年近视等，导致相关眼疾患病率呈上升趋势，促使患者对眼科医疗服务的需求逐年增加。我国目前患有视力损害的大约为3亿人，其中有4500万例盲症，视力损害患者较多，约占68%。市场需求不断扩大将带动眼科医疗器械快速发展。</p>
			<p>全球医疗器械市场规模正逐年扩大，眼科器械占比有望快速增长。据欧盟医疗器械委员会的统计显示，全球医疗器械市场销售总额已从2006 年的2900亿美元迅速上升至2014年的5591亿美元，年复合增速达8.82%。目前，美国、日本等国占据了超过80%的全球医疗器械市场。其中，美国是世界上最大的医疗器械生产国和消费国，其消费量占全球市场的40%左右。</p>
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
	#hahah{
		margin-top: 0.8rem;
	}
	.banner{
		margin-top: 40px;
		h1{
			padding: 0px 1rem;
			font-size: 16px;
			font-weight: bold;
			padding-top: 1rem;
		}
		span{
			font-size: 12px;
			color: #999999;
			width: 46%;
			display: inline-block;
			margin-bottom: 1rem;
			
		}
		span:first-of-type{
			padding-left: 3%;
		}
		span:last-of-type{
			text-align: right;
			padding-right: 2%;
		}
		p{
			font-size: 14px;
			text-indent: 2rem;
			margin-bottom: 0px;
			padding-left: 1rem;
			padding-right: 1rem;
		}
		p:last-of-type{
			padding-bottom: 3rem;
		}
	}
</style>