<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title c-underline" @click="goLoin">去登录</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			// 登录校验
			this.$utils.isLogin();
			
			this.$http.get("overviewInfo").then(
				res => {
					console.log(res);
				},
				err => {
					console.log(err);
				}
			);
		},
		methods: {
			goLoin() {
				uni.navigateTo({
				    url: '/pages/login/login.vue'
				});
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50upx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
=======
