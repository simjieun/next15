import { style } from '@vanilla-extract/css';

export const page = style({
    display: 'grid',
    gridTemplateRows: '20px 1fr 20px',
    alignItems: 'center',
    justifyItems: 'center',
    minHeight: '100svh',
    padding: 80,
    gap: 64,
    fontSynthesis: 'none'
})