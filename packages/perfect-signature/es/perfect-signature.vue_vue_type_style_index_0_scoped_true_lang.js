var M='\n.signature-box[data-v-41d66205] {\n  position: fixed;\n  overflow: hidden;\n  background-color: #fbfbfb;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n}\n.signature-box *[data-v-41d66205] {\n  user-select: none;\n}\n.signature-box .top-bar[data-v-41d66205] {\n  flex-grow: 0;\n  display: flex;\n  align-items: center;\n  padding: 10px;\n  background-color: white;\n  border-bottom: 1px solid var(--border-color);\n  box-sizing: border-box;\n}\n.top-bar .title[data-v-41d66205] {\n  text-align: center;\n  flex-grow: 1;\n  color: var(--title-color);\n  font-size: 16px;\n}\n.top-bar > div[data-v-41d66205] {\n  flex-basis: 40px;\n}\n.top-bar .back .icon[data-v-41d66205] {\n  display: block;\n  width: 18px;\n  height: 18px;\n  background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjI3ODkzMTAzNDkyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwMzkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEwLjQxNzk2ODc1IDkwMy4yMDExNzE4OGMtOC45NjQ4NDM3NSAwLTE4LjAxNzU3ODEzLTMuNDI3NzM0MzgtMjQuODczMDQ2ODgtMTAuMjgzMjAzMTNMMTI4Ljk3MjY1NjI1IDUzNi4yNTc4MTI1Yy02LjU5MTc5Njg4LTYuNTkxNzk2ODgtMTAuMjgzMjAzMTMtMTUuNTU2NjQwNjMtMTAuMjgzMjAzMTMtMjQuODczMDQ2ODhzMy42OTE0MDYyNS0xOC4yODEyNSAxMC4yODMyMDMxMy0yNC44NzMwNDY4N0w0ODUuNTQ0OTIxODcgMTI5LjkzOTQ1MzEyYzEzLjcxMDkzNzUtMTMuNzEwOTM3NSAzNS45NDcyNjU2My0xMy43MTA5Mzc1IDQ5Ljc0NjA5Mzc2IDFlLTggMTMuNzEwOTM3NSAxMy43MTA5Mzc1IDEzLjcxMDkzNzUgMzUuOTQ3MjY1NjMgMCA0OS43NDYwOTM3NUwyMDMuNTAzOTA2MjUgNTExLjM4NDc2NTYybDMzMS42OTkyMTg3NSAzMzEuNjk5MjE4NzZjMTMuNzEwOTM3NSAxMy43MTA5Mzc1IDEzLjcxMDkzNzUgMzUuOTQ3MjY1NjMgMCA0OS43NDYwOTM3NC02Ljc2NzU3ODEzIDYuOTQzMzU5MzgtMTUuODIwMzEyNSAxMC4zNzEwOTM3NS0yNC43ODUxNTYyNSAxMC4zNzEwOTM3NXoiIHAtaWQ9IjEwNDAiIGZpbGw9IiM4YThhOGEiPjwvcGF0aD48L3N2Zz4=") no-repeat center;\n  background-size: cover;\n}\n.signature-box .canvas[data-v-41d66205] {\n  background-color: #ffffff;\n  max-width: 100%;\n  max-height: 100%;\n}\n.signature-box .canvas-wrapper[data-v-41d66205] {\n  font-size: 0;\n}\n.signature-box .bottom-bar[data-v-41d66205] {\n  box-sizing: border-box;\n  display: flex;\n  gap: 10px;\n  background-color: white;\n  padding: 10px;\n  border-top: 1px solid var(--border-color);\n  align-items: center;\n  justify-content: space-between;\n}\n.signature-box .bottom-bar .cancel-btn[data-v-41d66205] {\n  background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjI3ODk0Mjk4NzI0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIwNDUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODk5LjEgODY5LjZsLTUzLTMwNS42SDg2NGMxNC40IDAgMjYtMTEuNiAyNi0yNlYzNDZjMC0xNC40LTExLjYtMjYtMjYtMjZINjE4VjEzOGMwLTE0LjQtMTEuNi0yNi0yNi0yNkg0MzJjLTE0LjQgMC0yNiAxMS42LTI2IDI2djE4MkgxNjBjLTE0LjQgMC0yNiAxMS42LTI2IDI2djE5MmMwIDE0LjQgMTEuNiAyNiAyNiAyNmgxNy45bC01MyAzMDUuNmMtMC4zIDEuNS0wLjQgMy0wLjQgNC40IDAgMTQuNCAxMS42IDI2IDI2IDI2aDcyM2MxLjUgMCAzLTAuMSA0LjQtMC40IDE0LjItMi40IDIzLjctMTUuOSAyMS4yLTMwek0yMDQgMzkwaDI3MlYxODJoNzJ2MjA4aDI3MnYxMDRIMjA0VjM5MHogbTQ2OCA0NDBWNjc0YzAtNC40LTMuNi04LTgtOGgtNDhjLTQuNCAwLTggMy42LTggOHYxNTZINDE2VjY3NGMwLTQuNC0zLjYtOC04LThoLTQ4Yy00LjQgMC04IDMuNi04IDh2MTU2SDIwMi44bDQ1LjEtMjYwSDc3Nmw0NS4xIDI2MEg2NzJ6IiBmaWxsPSIjNTk1OTU5IiBwLWlkPSIyMDQ2Ij48L3BhdGg+PC9zdmc+") no-repeat center;\n  background-size: cover;\n  width: 18px;\n  height: 18px;\n}\n.signature-box .bottom-bar .save-btn[data-v-41d66205] {\n  display: flex;\n  gap: 5px;\n  align-items: center;\n}\n.signature-box .bottom-bar .save-btn i[data-v-41d66205] {\n  display: inline-block;\n  background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjI3ODk0NDg3ODcyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE4MDQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjk3LjE3MzMzMyAxLjE5NDY2N0g5Ny4yOEM0NC4xNDU3NzggMS4xOTQ2NjcgMS4xMzc3NzggNDQuMTQ1Nzc4IDEuMTM3Nzc4IDk3LjI4VjkyNy44NTc3NzhjMCA1My4wNzczMzMgNDIuOTUxMTExIDk2LjAyODQ0NCA5Ni4wMjg0NDQgOTYuMDI4NDQ0SDkyNy44NTc3NzhjNTMuMDc3MzMzIDAgOTYuMDI4NDQ0LTQyLjk1MTExMSA5Ni4wMjg0NDQtOTYuMDI4NDQ0VjMyNy42OEw2OTcuMTczMzMzIDEuMjUxNTU2ek0yNjkuMDg0NDQ0IDk3LjI4aDI4OS4zMzY4ODl2Mjc0LjQ4ODg4OWE0Ny45NTczMzMgNDcuOTU3MzMzIDAgMCAxLTQ4LjAxNDIyMiA0OC4wMTQyMjJIMzE3LjA0MTc3OGE0Ny45NTczMzMgNDcuOTU3MzMzIDAgMCAxLTQ3Ljk1NzMzNC00OC4wMTQyMjJWOTcuMjh6TTkyNy44NTc3NzggOTI3Ljg1Nzc3OEg5Ny4yOFY5Ny4yOGg3NS44MzI4ODl2Mjc0LjQ4ODg4OWExNDQuMDk5NTU2IDE0NC4wOTk1NTYgMCAwIDAgMTQzLjk4NTc3OCAxNDQuMDQyNjY3aDE5My4zNjUzMzNhMTQ0LjA5OTU1NiAxNDQuMDk5NTU2IDAgMCAwIDE0My45ODU3NzgtMTQ0LjA0MjY2N1Y5Ny4yOGgzLjA3MmwyNzAuMjIyMjIyIDI3MC4yMjIyMjJ2NTYwLjQxMjQ0NWgwLjE3MDY2N3pNNDU1LjY4IDMyMy42OTc3NzhhNDcuOTU3MzMzIDQ3Ljk1NzMzMyAwIDAgMCA0OC4wNzExMTEtNDcuOTU3MzM0VjIxOC4zOTY0NDRhNDcuOTU3MzMzIDQ3Ljk1NzMzMyAwIDEgMC05Ni4wMjg0NDQgMHY1Ny4zNDRjMCAyNi41MTAyMjIgMjEuNTA0IDQ4LjAxNDIyMiA0OC4wMTQyMjIgNDguMDE0MjIzeiIgcC1pZD0iMTgwNSIgZmlsbD0iIzcwNzA3MCI+PC9wYXRoPjwvc3ZnPg==") no-repeat center;\n  background-size: cover;\n  width: 18px;\n  height: 18px;\n}\n.bottom-bar .back[data-v-41d66205] {\n  background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjI3ODk1MDkxMjQzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI4NTYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMTgwLjg2NCAyNzcuNTgwOGMtMTYuMjUwODggMTIuMjg4LTE2LjI1MDg4IDM2LjcxMDQgMCA0OC45OTg0TDMyMS45NDU2IDQzMy4zMTA3MmMyMC4yMzQyNCAxNS4zMDg4IDQ5LjI1NDQgMC44NzU1MiA0OS4yNTQ0LTI0LjQ5OTJWMzQzLjA0aDIwMS43NzQwOGMxMTguNDgxOTIgMCAyMTQuNTMzMTIgODkuMzk1MiAyMTQuNTMzMTIgMTk5LjY4IDAgMTEwLjI3OTY4LTk2LjA1MTIgMTk5LjY4LTIxNC41MzMxMiAxOTkuNjhIMjQwLjY0YTMwLjcyIDMwLjcyIDAgMCAwLTMwLjcyIDMwLjcydjIwLjQ4YTMwLjcyIDMwLjcyIDAgMCAwIDMwLjcyIDMwLjcyaDMzMi4zMzQwOEM3NDAuMDY1MjggODI0LjMyIDg3NS41MiA2OTguMjQ1MTIgODc1LjUyIDU0Mi43MnMtMTM1LjQ1NDcyLTI4MS42LTMwMi41NDU5Mi0yODEuNkgzNzEuMlYxOTUuMzQ4NDhjMC0yNS4zNzQ3Mi0yOS4wMjAxNi0zOS44MDgtNDkuMjU0NC0yNC40OTkyTDE4MC44NjQgMjc3LjU4MDh6IiBmaWxsPSIjNzA3MDcwIiBwLWlkPSIyODU3Ij48L3BhdGg+PC9zdmc+") no-repeat center;\n  background-size: cover;\n  width: 18px;\n  height: 18px;\n}\n.bottom-bar .bar-left[data-v-41d66205] {\n  display: flex;\n}\n.bottom-bar .gap-line[data-v-41d66205] {\n  margin: 0 10px;\n  width: 1px;\n  background-color: var(--border-color);\n}\n@media (orientation: portrait) {\n.signature-box[data-v-41d66205] {\n    transform-origin: bottom left;\n}\n}\n@media (orientation: landscape) {\n}\n';export{M as default};
