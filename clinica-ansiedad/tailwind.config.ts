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
    			cream: '#F9FBFB',
    			navy: {
    				DEFAULT: '#2C5F78',
    				light: '#3a7a99'
    			},
    			gold: {
    				DEFAULT: '#7FB685',
    				light: '#98c79d'
    			},
    			sage: {
    				DEFAULT: '#E5DACE',
    				light: '#f0e8df'
    			},
    			text: '#333333',
    			muted: '#8c9ba5'
    		},
    		fontFamily: {
    			sans: [
    				'Inter',
    				'sans-serif'
    			],
    			serif: [
    				'Playfair Display',
    				'serif'
    			]
    		},
    		boxShadow: {
    			glass: '0 8px 32px 0 rgba(44, 95, 120, 0.05)',
    			'glass-hover': '0 8px 32px 0 rgba(127, 182, 133, 0.1)'
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
