[← Back to Main README](../README.md)

## 🧩 SCSS Mixins
Here are some key SCSS mixins used in the project. These help keep the styles modular, reusable, and maintainable across the entire stylesheet.

---

**Text Styling**
A mixin to apply consistent text styles including font size, weight, spacing, line height, and color.

```scss
@mixin text-style(
  $font-size: $text-font-size-medium,
  $font-weight: $font-weight-regular,
  $line-height: 100%,
  $text_color: $color-dark-gray,
  $letter-spacing: 0
) {
  font-size: $font-size;
  font-weight: $font-weight;
  letter-spacing: $letter-spacing;
  line-height: $line-height;
  color: $text_color;
}
```
**Text size**
The text-size mixin is used to conveniently set the font size (font-size) and line spacing (line-height) of elements.

```scss
@mixin text-size($font-size, $line-height) {
  font-size: $font-size;
  line-height: $line-height;
}
```

---

**Flexbox Layout**
A flexible mixin to quickly set up flexbox containers with customizable alignment, direction, and wrapping options.

```scss
@mixin flex($justify: center, $align: center, $direction: row, $wrap: nowrap) {
  display: flex;
  justify-content: $justify;
  align-items: $align;
  flex-flow: $direction $wrap;
}
```

---

**Grid Layout**
A reusable grid layout mixin that allows setting the number of columns and spacing between rows and columns.
```scss
@mixin grid(
  $columns: $grid-columns-desktop,
  $column-gap: $grid-gutter-desktop,
  $row-gap: 0
) {
  display: grid;
  grid-template-columns: repeat($columns, 1fr);
  gap: $row-gap $column-gap;
}

```

---

**Responsive Media Queries**
A powerful mixin to handle media queries for different device breakpoints, making the layout responsive and adaptive.

```scss
@mixin respond-to($device1, $device2: null) {
  @if $device1 == phone or $device2 == phone {
    @media (max-width: #{$breakpoint-tablet}) {
      @content;
    }
  }

  @if $device1 == tablet or $device2 == tablet {
    @media (min-width: #{ $breakpoint-tablet + 1 }) and (max-width: #{$breakpoint-desktop}) {
      @content;
    }
  }

  @if $device1 == desktop or $device2 == desktop {
    @media ((min-width: #{ $breakpoint-desktop + 1})) {
      @content;
    }
  }
}
```
