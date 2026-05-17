/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#E26D14',       // Official Middleman Orange
          orangeDark: '#C85A0F',   // Rich deeper orange for active/hover states
          orangeLight: '#F38A3A',  // Lighter orange for accents
          lightBg: '#F4F6F8',      // Very light slate-gray for main page background (TD style)
          whiteCard: '#FFFFFF',    // Crisp white for content cards
          lightBorder: '#E2E8F0',  // Subtle light border for grid separation
          textPrimary: '#1E293B',  // Deep charcoal/slate for high-contrast readable text
          textSecondary: '#64748B',// Medium slate gray for descriptions
          goldAccent: '#D97706',   // Warning/safety gold yellow accent
          darkBg: '#0F172A',       // Dark navy slate for footers and specific inverted sections
        }
      },
      fontFamily: {
        sans: ['"Outfit"', '"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDQwdjQwSDBWMHptMSAxaDM4djM4SDFWMXoiIGZpbGw9IiMyMzI5M2MiIGZpbGwtb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')",
        'dots-pattern': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMSIgZmlsbD0iIzM3NDFiNSIgZmlsbC1vcGFjaXR5PSIwLjE1Ii8+PC9zdmc+')",
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-glow': 'pulseGlow 2s infinite ease-in-out',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      }
    },
  },
  plugins: [],
}
