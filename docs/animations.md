[← Back to Main README](../README.md)

# 🎬 Responsive Scroll Animations

This JavaScript module enables responsive animations for elements when they enter the viewport.
Animations vary by breakpoint (`desktop`, `tablet`, `mobile`), support delay, and can trigger once or repeatedly.

---

## ✅ Features

- 📱 Responsive: different animations per screen size
- ⏱️ Delay support for staggered animations
- 🔁 Modes: once or repeat when scrolling in/out
- 🧠 Auto-applies initial classes on load
- 🪶 Lightweight and dependency-free
- 🔄 Resets on window resize if breakpoint changes

---

## 📦 Usage

### 1. Import the module

```js
import {
  initResponsiveAnimations,
  resetObserversOnResize
} from './animation-module';

```
2. Create a configuration object (see below)
3. Initialize animations on page load

```js
  initResponsiveAnimations(config);
```
4. Optionally reset observers on resize

```js
window.addEventListener('resize', () => resetObserversOnResize());
```

---

## 🧩 Configuration Format (config JSON)

```json
[
  {
    "container": ".section-wrapper",
    "elements": [".item-1", ".item-2", ".item-3"],
    "animations": {
      "desktop": ["animate-left", "animate-top", "animate-right"],
      "tablet": ["animate-bottom"],
      "mobile": ["animate-zoom"]
    },
    "delays": [0, 200, 400],
    "mode": "once",
    "thresholds": {
      "large": 0.3,
      "medium": 0.2,
      "small": 0.1
    }
  },
  {
    "container": "#features",
    "elements": ".feature-box",
    "animations": {
      "desktop": ["animate-top"]
    },
    "mode": "repeat"
  }
]
```

## 🔍 Property Reference

## 🔍 Property Reference

| Property   | Type                 | Description                                                                 |
|------------|----------------------|-----------------------------------------------------------------------------|
| `container` | `string`             | CSS selector of the block to observe                                        |
| `elements`  | `string` or `string[]` | Target elements inside the container                                       |
| `animations`| `object`             | Animation classes by breakpoint (`desktop`, `tablet`, `mobile`)            |
| `delays`    | `number[]`           | *(Optional)* Delays per element in milliseconds                            |
| `mode`      | `'once'` \| `'repeat'` | Whether animation runs once or every time element scrolls into view        |
| `thresholds`| `object`             | Visibility thresholds: `large`, `medium`, `small`                           |
