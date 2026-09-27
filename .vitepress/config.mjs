import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SMS Game Maker",
  description: "A simple game maker for SMS and GG games.",
  base: '/',
  cleanUrls: true,
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 100
      }
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Documentación', link: '/doc/' }
    ],

    sidebar: {
      '/doc/': [
        {
          text: 'Overview',
          items: [
            { text: 'Presentación', link: '/' },
            { text: 'Créditos', link: '/doc/00_Overview/credits' }
          ]
        },
        {
          text: 'Comenzando',
          items: [
            { text: 'Cómo empezar', link: '/doc/01_install/getting-started' },
            { text: 'Guía de instalación', link: '/doc/01_install/install' }
          ]
        },
        {
          text: 'Imágenes base',
          items: [
            { text: 'Pantallas', link: '/doc/02_images/screens' },
            { text: 'Editor de imágenes y paletas', link: '/doc/02_images/image-editor' },
            { text: 'Tileset', link: '/doc/02_images/tileset' },
            { text: 'Spriteset', link: '/doc/02_images/spriteset' },
            { text: 'Bala', link: '/doc/02_images/bullet' }
          ]
        },
        {
          text: 'Diseñando el juego',
          items: [
            { text: 'Introducción', link: '/doc/03_tiled/overview' },
            { text: 'Configuración general', link: '/doc/03_tiled/general-configuration' },
            { text: 'Crear el mapa', link: '/doc/03_tiled/create-map' },
            { text: 'Preferencias', link: '/doc/03_tiled/preferences' },
            { text: 'Tilesets', link: '/doc/03_tiled/tilesets' },
            { text: 'Dibujando el mapa', link: '/doc/03_tiled/drawing-map' },
            { text: 'Añadiendo enemigos', link: '/doc/03_tiled/adding-enemies' },
            { text: 'Añadiendo objetos', link: '/doc/03_tiled/adding-objects' },
            { text: 'Añadiendo plataformas móviles', link: '/doc/03_tiled/adding-platforms' },
            { text: 'Arcade mode', link: '/doc/03_tiled/arcade-mode' },
            { text: 'Traducir juego', link: '/doc/03_tiled/localization' }
          ]
        },
        {
          text: 'Sonido',
          items: [
            { text: 'Efectos FX', link: '/doc/04_sound/fx' },
            { text: 'Música', link: '/doc/04_sound/music' }
          ]
        },
        {
          text: 'Uso del motor',
          items: [
            { text: 'SMS Game Maker Studio', link: '/doc/05_engine/use' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rtorralba/sms-game-maker' }
    ]
  }
})
