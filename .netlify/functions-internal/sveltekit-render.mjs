import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["necromunda-bg.png","necromunda-frame.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.QS4Cxe_N.js",app:"_app/immutable/entry/app.BUijHUkt.js",imports:["_app/immutable/entry/start.QS4Cxe_N.js","_app/immutable/chunks/DIZZuRiV.js","_app/immutable/chunks/CAYq3aLb.js","_app/immutable/chunks/DNgd5NhE.js","_app/immutable/entry/app.BUijHUkt.js","_app/immutable/chunks/DNgd5NhE.js","_app/immutable/chunks/CAYq3aLb.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/DFAwZzEG.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
