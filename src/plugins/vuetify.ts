/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import * as components from "vuetify/components"

const darkColor = {
  dark: true,
  colors: {
    primary: "#681e87",
    background: "#1f110f",
    structure: "#342787",
    cursor: "#21b8ae"
  }
}
const lightColor = {
  dark: false,
  colors: {
    primary: "#21b8ae",
    background: "#99abbd",
    structure: "#0b78de",
    cursor: "#681e87"
  }
}
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components,
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: lightColor,
      dark: darkColor
    }
  },
})
