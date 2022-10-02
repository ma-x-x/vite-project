const dashboard: AuthRoute.Route = {
	name: "dashboard",
	path: "/dashboard",
	component: "basic",
	children: [
		{
			name: "dashboard_workbench",
			path: "/dashboard/workbench",
			component: "self",
			meta: {
				title: "工作台",
				icon: "icon-park-outline:workbench",
			},
		},
	],
	meta: {
		title: "仪表盘",
		icon: "mdi:monitor-dashboard",
		order: 1,
	},
};

export default dashboard;
