import { definePreset } from "@primeng/themes"
import Aura from "@primeng/themes/Aura"

// setting Aura as theme, and blue as primary color
const Preset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{blue.50}',
      100: '{blue.100}',
      200: '{blue.200}',
      300: '{blue.300}',
      400: '{blue.400}',
      500: '{blue.500}',
      600: '{blue.600}',
      700: '{blue.700}',
      800: '{blue.800}',
      900: '{blue.900}',
      950: '{blue.950}'
    }
  }
})

export const theme = {
  ripple: true, //enabling ripple effect
  theme: {
    preset: Preset,
    options: {
      darkModeSelector: '.dark', //dark mode class selector to activate dark mode in PrimeNG Components
      cssLayer: {
        name: 'primeng',
        order: 'tailwind-base, primeng, tailwind-utilities', //setting CSS styles
      }
    }
  }
}