import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
    maxWidth: "100vw",
    overflowX: "hidden"
});

globalStyle('*', {
    boxSizing: "border-box",
    padding: 0,
    margin: 0
});

globalStyle('a', {
    color: "inherit",
    textDecoration: "none"
})