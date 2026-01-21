<script setup lang="ts">
import { ref, onMounted } from "vue";
import logoImage from "~/assets/images/fabel_tiyatro_logo.png";

const isMobileMenuOpen = ref(false);

const navigation = [
  { name: "Oyunlarımız", href: "/oyun" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "İletişim", href: "/iletisim" },
];

const openMobileMenu = () => {
  const html = document.documentElement;
  const dialog = document.getElementById("menu-dialog") as HTMLDialogElement;

  if (html && dialog) {
    html.classList.add("has-menu-open");
    dialog.setAttribute("open", "");
  }
};

const closeMobileMenu = () => {
  const html = document.documentElement;
  const dialog = document.getElementById("menu-dialog") as HTMLDialogElement;

  if (html && dialog) {
    html.classList.remove("has-menu-open");
    dialog.removeAttribute("open");
  }
};

onMounted(() => {
  const openButton = document.getElementById("js-menu-open");
  const closeButton = document.getElementById("js-menu-close");

  if (openButton) {
    openButton.addEventListener("click", openMobileMenu);
  }

  if (closeButton) {
    closeButton.addEventListener("click", closeMobileMenu);
  }
});
</script>

<template>
  <header id="site-header" class="c-site-header o-grid">
    <div class="c-site-header__container">
      <a href="/" class="c-site-header__logo">
        <img :src="logoImage" alt="Fabel Tiyatro" class="logo-image" />
      </a>
      <nav class="c-site-header__nav--primary o-nav" aria-label="Main">
        <ul class="o-nav__list">
          <li class="o-nav__item h-hide-desktop" v-for="item in navigation" :key="item.name">
            <NuxtLink :to="item.href" class="o-nav__link">{{
              item.name
              }}</NuxtLink>
          </li>
          <li class="o-nav__item c-site-header__trigger h-hide-desktop--gt">
            <button class="o-nav__link" id="js-menu-open" aria-label="Open menu">
              <span class="icon o-nav__icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="52" fill="currentColor" viewBox="0 0 70 52">
                  <path
                    d="M67.742 45.217A2.26 2.26 0 0 1 70 47.478v2.261A2.26 2.26 0 0 1 67.742 52H2.258A2.26 2.26 0 0 1 0 49.74v-2.262a2.26 2.26 0 0 1 2.258-2.26h65.484Zm0-22.608A2.26 2.26 0 0 1 70 24.869v2.261a2.26 2.26 0 0 1-2.258 2.261H2.258A2.26 2.26 0 0 1 0 27.131V24.87a2.26 2.26 0 0 1 2.258-2.261h65.484Zm0-22.609A2.26 2.26 0 0 1 70 2.26v2.262a2.26 2.26 0 0 1-2.258 2.26H2.258A2.26 2.26 0 0 1 0 4.523V2.26A2.26 2.26 0 0 1 2.258 0h65.484Z">
                  </path>
                </svg>
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <dialog class="c-site-menu" id="menu-dialog">
    <div class="c-site-header o-grid c-site-header--menu">
      <div class="c-site-header__container">
        <a href="/" class="c-site-header__logo">
          <img :src="logoImage" alt="Fabel Tiyatro" class="logo-image" />
        </a>
        <nav class="c-site-header__nav--primary o-nav" aria-label="Main">
          <ul class="o-nav__list">
            <li class="o-nav__item h-hide-desktop" v-for="item in navigation" :key="item.name">
              <NuxtLink :to="item.href" class="o-nav__link">{{
                item.name
                }}</NuxtLink>
            </li>
            <li class="o-nav__item c-site-header__trigger">
              <button class="o-nav__link" id="js-menu-close" aria-label="Close menu">
                <span class="icon o-nav__icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="54" fill="currentColor"
                    viewBox="0 0 70 54">
                    <path
                      d="M60.55 47.753a2.26 2.26 0 0 1-.003 3.196l-1.598 1.598a2.26 2.26 0 0 1-3.196.002L9.45 6.245a2.26 2.26 0 0 1 .002-3.195l1.598-1.6a2.26 2.26 0 0 1 3.195-.002L60.55 47.753Z">
                    </path>
                    <path
                      d="M55.754 1.45a2.26 2.26 0 0 1 3.196.002l1.598 1.598a2.26 2.26 0 0 1 .002 3.196L14.246 52.55a2.26 2.26 0 0 1-3.195-.002l-1.599-1.599a2.26 2.26 0 0 1-.002-3.195L55.754 1.45Z">
                    </path>
                  </svg>
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <nav class="c-site-menu__body o-nav o-grid">
      <ul class="o-nav__list c-site-menu__primary">
        <li class="o-nav__item" v-for="item in navigation" :key="item.name" @click="closeMobileMenu">
          <NuxtLink :to="item.href" class="o-nav__link">{{
            item.name
            }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </dialog>
</template>

<style scoped>
.c-site-header {
  --nav-list-direction: row;
  --nav-link-display: flex;
  width: 100%;
  -webkit-overflow-scrolling: touch;
  color: var(--text-color-light);
  position: relative;
  z-index: 3;
  font-size: var(--text-size-heading-3);
}

.c-site-header__logo {
  grid-area: logo;
}

.logo-image {
  width: auto;
  height: 4rem;
}

.c-site-header__nav--primary {
  grid-area: nav--primary;
}

.c-site-header__nav--secondary {
  grid-area: nav--secondary;
}

.c-site-header:not(.c-site-header--menu) {
  background-color: #0a0a0a;
  color: var(--text-color-light);
  /* background-image: url(/dist/images/texture-black-1400.jpg); */
  background-size: min(1400px, 100%) auto;
  background-position: center bottom;
}

@media (min-width: 72.01rem) {
  .c-site-header {
    font-size: 1.25rem;
    position: sticky;
    top: -10px;
    z-index: 10;
  }
}

.c-site-header__container {
  padding: 1rem 0;
  display: grid;
  grid-area: 1/3/1/15;
  align-items: center;
  grid-template-columns: 1fr max-content 1fr;
  grid-template-areas: "nav--secondary logo nav--primary";
}

@media (min-width: 72.01rem) {
  .c-site-header__container {
    grid-template-areas: "nav--account logo nav--secondary" "nav--primary nav--primary nav--primary";
  }
}

@media (min-width: 60.01rem) {
  .c-site-header__logo {
    font-size: 2rem;
  }
}

@media (min-width: 72.01rem) {
  .c-site-header__logo {
    font-size: 2.75rem;
  }
}

.c-site-header__nav--primary {
  justify-self: end;
}

@media (min-width: 72.01rem) {
  .c-site-header__nav--primary {
    --nav-list-justify: space-between;
    justify-self: center;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
}

.c-site-header__nav--secondary {
  --nav-link-active-color: transparent;
  justify-self: start;
}

@media (min-width: 72.01rem) {
  .c-site-header__nav--secondary {
    justify-self: end;
    font-size: var(--text-size-small);
  }
}

.c-site-header__nav--account {
  --nav-link-active-color: transparent;
}

@media (min-width: 72.01rem) {
  .c-site-header__nav--account {
    font-size: var(--text-size-small);
  }
}

.c-site-header__trigger {
  --nav-link-active-color: transparent;
}
</style>
