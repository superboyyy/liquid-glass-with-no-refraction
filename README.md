# Liquid Glass with No Refraction

Unofficial frosted-glass CSS kit in the **iOS 27 Liquid Glass** vein: blur, saturation, and inner highlights. **No displacement maps, no IOR, no refraction.**

This is not an Apple product and is not affiliated with Apple. The name describes the look — frosted marketing-site glass without the refractive material.

## Use it

```html
<link rel="stylesheet" href="css/nrg.css" />
<script type="module" src="css/nrg.js"></script>
<body class="nrg-root">
  <div class="nrg-glass">Hello, frosted world.</div>
</body>
```

Class prefix is `nrg-`. Accent color is `--nrg-accent` (default `#fa2d48`). Dark mode: `data-nrg-theme="dark"` on `<html>`.

## What ships

| File | Role |
| --- | --- |
| `css/nrg.css` | Tokens, glass, buttons, nav, hero, carousel, compare, reviews, plans, modal |
| `css/nrg.js` | Reveal-on-view, snap carousel, hero pause/parallax, hash modals |

Glass is `backdrop-filter: blur() saturate()`. Pull requests that add `feDisplacementMap`, WebGL, or chromatic aberration will stay out of the default stylesheet.

## License

MIT. Apple, iOS, and Liquid Glass are trademarks of Apple Inc.
