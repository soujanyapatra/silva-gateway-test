import { breakpointsVuetify } from '@vueuse/core'

import { VIcon } from 'vuetify/components/VIcon'
import doubleCircle from './src/assets/images/svg/double-circle.svg'

// ❗ Logo SVG must be imported with ?raw suffix
import logo from './src/assets/images/signin-logo.png'

import { defineThemeConfig } from '@core'
import { RouteTransitions, Skins } from '@core/enums'
import { AppContentLayoutNav, ContentWidth, FooterType, NavbarType } from '@layouts/enums'

export const { themeConfig, layoutConfig } = defineThemeConfig({
  app: {
    title: '',
    logo: h('img', { src: logo, style: 'max-height: 160px; max-width: 160px; margin-top: 10px; margin-bottom: 5px; line-height:0; color: rgb(var(--v-global-theme-primary))' }),
    contentWidth: ContentWidth.Boxed,
    contentLayoutNav: AppContentLayoutNav.Vertical,
    overlayNavFromBreakpoint: breakpointsVuetify.md + 16, // 16 for scrollbar. Docs: https://next.vuetifyjs.com/en/features/display-and-platform/
    enableI18n: false,
    theme: 'light',
    isRtl: false,
    skin: Skins.Default,
    routeTransition: RouteTransitions.Fade,
    iconRenderer: VIcon,
  },
  navbar: {
    type: NavbarType.Sticky,
    navbarBlur: true,
  },
  footer: { type: FooterType.Static },
  verticalNav: {
    isVerticalNavCollapsed: false,
    defaultNavItemIconProps: { icon: 'tabler-circle', size: 10 },
    isVerticalNavSemiDark: true,
  },
  horizontalNav: {
    type: 'sticky',
    transition: 'slide-y-reverse-transition',
  },
  icons: {
    chevronDown: { icon: 'tabler-chevron-down' },
    chevronRight: { icon: 'tabler-chevron-right', size: 18 },
    close: { icon: 'tabler-x', size: 22, style: 'margin-top: 19px; margin-left: 7px;' },
    verticalNavPinned: { icon: h('img', { src: doubleCircle, style: 'height: 21px; width: 21px; margin-top: 17px; margin-left: 5px;' })},
    verticalNavUnPinned: { icon: 'tabler-circle', style: 'height: 21px; width: 21px; margin-top: 17px; margin-left: 5px;' },
    sectionTitlePlaceholder: { icon: 'tabler-separator' },
  },
})