import { defineConfig } from 'vite'
import type { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig(() => {
  return {
    css: {
      extract: true
    },
    build: {
      rollupOptions: {
        external: ['vue'],
        output: [
          {
            // 打包成 commonjs
            format: 'cjs',
            entryFileNames: '[name].js',
            preserveModules: true,
            dir: 'lib',
            preserveModulesRoot: 'src',
          },
           {
            // 打包成 es module
            format: 'es',
            entryFileNames: '[name].js',
            preserveModules: true,
            dir: 'es',
            preserveModulesRoot: 'src',
          },
        ],
      },
      lib: {
        entry: 'src/index.ts',
        name: 'GIE_COMPONENTS'
      },
    },
    plugins: [
      vue(),
      dts({
        // 输出目录
        outDir: ['types'],
        // 将动态引入转换为静态（例如：`import('vue').DefineComponent` 转换为 `import { DefineComponent } from 'vue'`）
        staticImport: true,
        // 将所有的类型合并到一个文件中
        rollupTypes: true
      })
    ],
  } as UserConfig
})