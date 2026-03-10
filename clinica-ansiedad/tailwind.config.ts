import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			colors: {
				cream: '#F3F7F4',
				navy: {
					DEFAULT: '#2C6E8A',
					light: '#3D85A8'
				},
				gold: {
					DEFAULT: '#6B9E8B',
					light: '#8FBCAF'
				},
				sage: {
					DEFAULT: '#E5EEE9',
					light: '#F0F5F2'
				},
				text: '#1A3A48',
				muted: '#5E7A84'
			},
			fontFamily: {
				sans: [
					'var(--font-inter)',
					'system-ui'
				],
				serif: [
					'var(--font-figtree)',
					'sans-serif'
				]
			},
			boxShadow: {
				glass: '0 8px 32px 0 rgba(44, 110, 138, 0.06)',
				'glass-hover': '0 8px 32px 0 rgba(107, 158, 139, 0.12)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				blob: {
					'0%': {
						transform: 'translate(0px, 0px) scale(1)'
					},
					'33%': {
						transform: 'translate(30px, -50px) scale(1.1)'
					},
					'66%': {
						transform: 'translate(-20px, 20px) scale(0.9)'
					},
					'100%': {
						transform: 'translate(0px, 0px) scale(1)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				blob: 'blob 7s infinite',
				'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
			}
		}
	},
	plugins: [],
} satisfies Config;
