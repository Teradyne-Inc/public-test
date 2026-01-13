---
theme: ./ # Use the theme in the current directory
layout: intro
title: Welcome to C#RA Training 
info: |
  ## Training slides for C#RA 
class: text-center
drawings:
  persist: false
transition: slide-up
colorSchema: 'dark'
mdc: true
seoMeta:
  ogImage: auto
export: 
  format: pdf 
  dark: true
  withToc: true
exportFilename: csra-training-slides
hideInToc: true
---

# Welcome to C#RA 
Dive in and learn at your own pace!

<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  Press Space for next page <kbd>space</kbd>
</div>

<div class="abs-br m-6 text-xl">
  <!-- <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button> -->
  <a href="https://github.com/TER-SEMITEST-InnerSource/cs-reference-architecture" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

---
layout: two-cols-header
hideInToc: true
---

# Table of Contents

<Toc />

<!-- Main -------------------------------------------------------------------->

<!--
Intro & Training Overview
-->

---
src: ./sections/intro-overview.md
---

---
src: ./sections/getting-started.md
---

---
src: ./sections/project-structure.md
---

---
src: ./sections/environment-configuration.md
---

---
src: ./sections/using-csra.md
---

---
src: ./sections/advanced-usage.md
---

---
src: ./sections/unit-testing.md
---

---
src: ./sections/troubleshooting.md
---

---
src: ./sections/hands-on-labs.md
---

---
src: ./sections/next-steps.md
---

<!-- Learn more -------------------------------------------------------------->

---
layout: end
level: 1
---

# Learn More

[Documentation](https://solid-adventure-nv3z2qy.pages.github.io/) · [GitHub](https://github.com/TER-SEMITEST-InnerSource/cs-reference-architecture) · [Showcases / Demo](https://github.com/TER-SEMITEST-InnerSource/cs-reference-architecture/tree/main/src/Demo)

<img src="./media/logo-csra.svg" alt="CSRA Logo" class="mx-auto my-6 h-20 w-auto" />
