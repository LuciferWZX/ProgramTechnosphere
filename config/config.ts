import {defineConfig} from "umi";

export default defineConfig({
    npmClient: 'pnpm',
    title:'技术分享圈',
    metas:[
        //如果要设置特定资源安全策略，要通过以下方式
        {'http-equiv':'Content-Security-Policy',content:"default-src 'self'"}
    ]
})