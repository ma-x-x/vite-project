<template>
	<n-layout has-sider>
		<n-layout-sider bordered content-style="padding: 24px;" v-if="bool">
			<global-sider />
		</n-layout-sider>
		<n-layout>
			<n-layout-header bordered class="h-14">
				<global-header v-bind="headerProps" />
			</n-layout-header>
			<n-layout-content content-style="padding: 24px;">
				<global-content @hide-main-overflow="setAddMainOverflowHidden" />
			</n-layout-content>
			<n-layout-footer bordered>
				<global-footer />
			</n-layout-footer>
		</n-layout>
	</n-layout>

	<global-back-top />
	<setting-drawer />
</template>

<script setup lang="ts">
import { useBasicLayout } from '@/composables';
import { useBoolean } from '@/hooks';
import {
	GlobalBackTop,
	GlobalContent,
	GlobalFooter,
	GlobalHeader,
	GlobalSider,
	SettingDrawer
} from '../common';

const { headerProps, } = useBasicLayout();

const { bool, setBool: setAddMainOverflowHidden } = useBoolean(true);
console.log('bool: ', bool);
</script>

<style scoped>

</style>
