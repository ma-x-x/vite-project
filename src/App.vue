<template>
	<div class="h-full">
		<n-config-provider :theme="theme.naiveTheme" :theme-overrides="theme.naiveThemeOverrides" :locale="zhCN"
			:date-locale="dateZhCN" class="h-full">
			<naive-provider>
				<router-view />
			</naive-provider>
		</n-config-provider>
	</div>
</template>

<script setup lang="ts">
import { NConfigProvider, zhCN, dateZhCN } from 'naive-ui'
import { subscribeStore, useThemeStore } from '@/store';
import { useGlobalEvents } from '@/composables';

const theme = useThemeStore();

subscribeStore();
useGlobalEvents();
</script>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
}

.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
