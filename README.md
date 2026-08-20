# liquid-glass-with-no-refraction

面向网页的 iOS 27 Liquid Glass 毛玻璃套件：**模糊、染色、边缘高光**。不做折射。

没有 SVG `feDisplacementMap`，没有 WebGL 镜头，没有色散。玻璃看起来像霜，而不是放大镜。

这套东西从 OMusic 网站顶栏 / 底栏已经在用的 `backdrop-filter: saturate(180%) blur(20px)` 抽出来，补上顶缘高光、厚度阴影和渐变描边，做成可复用的 CSS。

打开 [`index.html`](./index.html) 看演示。

## 为什么不做折射

多数 Liquid Glass 网页实现会用位移贴图或 WebGL 去“弯”背后的内容。那套效果：

- 主要只在 Chromium 里像样
- 合成成本高
- 和 iOS 27 更克制、更霜化的方向也不一致

本仓库只保留跨浏览器稳定的那一层：`blur` + `saturate` + 高光。

## 快速开始

```html
<link rel="stylesheet" href="src/liquid-glass.css" />

<div class="lg lg--regular lg-panel">毛玻璃内容</div>
```

可选：给 `.lg--interactive` 加上指针高光。

```html
<script type="module">
  import { attachLiquidGlassPointer } from "./src/liquid-glass-pointer.js";
  attachLiquidGlassPointer();
</script>
```

## 变体

| 类名 | 用途 |
| --- | --- |
| `.lg--regular` | 默认。中等霜化，叠在任何内容上都可读。 |
| `.lg--clear` | 更透。只适合封面 / 照片上方，并配合 `.lg-dim`。 |
| `.lg--grounded` | iOS 27 式贴边：直角、轻投影。适合顶栏和播放条。 |
| `.lg--capsule` | 全圆角。 |

主题挂在根节点：

```html
<html data-lg-theme="dark">
<!-- 或 data-lg-theme="light" -->
```

## 组件

- `.lg-panel` 卡片 / 面板
- `.lg-nav` 顶栏
- `.lg-tabbar` 底栏 / 播放条
- `.lg-button` / `.lg-button--prominent` / `.lg-button--icon`
- `.lg-pill` 小标签
- `.lg-sheet` 底部面板

## CSS 变量

在元素或主题上覆盖即可：

```css
.lg {
  --lg-blur: 20px;
  --lg-saturate: 180%;
  --lg-tint: 255 255 255;
  --lg-tint-opacity: 0.14;
  --lg-radius: 20px;
}
```

## 无障碍

- 没有 `backdrop-filter` 时退回更实的底色，文字仍然可读
- `prefers-reduced-transparency` 会关掉模糊
- `prefers-contrast: more` 会加厚底色
- 按钮有 `:focus-visible` 描边

## 刻意不做的事

- SVG / CSS 位移折射
- WebGL / WebGPU 玻璃
- 色边色散
- 把整页所有卡片都做成玻璃（`backdrop-filter` 很贵）

## License

MIT
