import {
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

const paypalSvg =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAxcHgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAxMDEgMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHhtbG5zPSJodHRwOiYjeDJGOyYjeDJGO3d3dy53My5vcmcmI3gyRjsyMDAwJiN4MkY7c3ZnIj48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDEyLjIzNyAyLjggTCA0LjQzNyAyLjggQyAzLjkzNyAyLjggMy40MzcgMy4yIDMuMzM3IDMuNyBMIDAuMjM3IDIzLjcgQyAwLjEzNyAyNC4xIDAuNDM3IDI0LjQgMC44MzcgMjQuNCBMIDQuNTM3IDI0LjQgQyA1LjAzNyAyNC40IDUuNTM3IDI0IDUuNjM3IDIzLjUgTCA2LjQzNyAxOC4xIEMgNi41MzcgMTcuNiA2LjkzNyAxNy4yIDcuNTM3IDE3LjIgTCAxMC4wMzcgMTcuMiBDIDE1LjEzNyAxNy4yIDE4LjEzNyAxNC43IDE4LjkzNyA5LjggQyAxOS4yMzcgNy43IDE4LjkzNyA2IDE3LjkzNyA0LjggQyAxNi44MzcgMy41IDE0LjgzNyAyLjggMTIuMjM3IDIuOCBaIE0gMTMuMTM3IDEwLjEgQyAxMi43MzcgMTIuOSAxMC41MzcgMTIuOSA4LjUzNyAxMi45IEwgNy4zMzcgMTIuOSBMIDguMTM3IDcuNyBDIDguMTM3IDcuNCA4LjQzNyA3LjIgOC43MzcgNy4yIEwgOS4yMzcgNy4yIEMgMTAuNjM3IDcuMiAxMS45MzcgNy4yIDEyLjYzNyA4IEMgMTMuMTM3IDguNCAxMy4zMzcgOS4xIDEzLjEzNyAxMC4xIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDM1LjQzNyAxMCBMIDMxLjczNyAxMCBDIDMxLjQzNyAxMCAzMS4xMzcgMTAuMiAzMS4xMzcgMTAuNSBMIDMwLjkzNyAxMS41IEwgMzAuNjM3IDExLjEgQyAyOS44MzcgOS45IDI4LjAzNyA5LjUgMjYuMjM3IDkuNSBDIDIyLjEzNyA5LjUgMTguNjM3IDEyLjYgMTcuOTM3IDE3IEMgMTcuNTM3IDE5LjIgMTguMDM3IDIxLjMgMTkuMzM3IDIyLjcgQyAyMC40MzcgMjQgMjIuMTM3IDI0LjYgMjQuMDM3IDI0LjYgQyAyNy4zMzcgMjQuNiAyOS4yMzcgMjIuNSAyOS4yMzcgMjIuNSBMIDI5LjAzNyAyMy41IEMgMjguOTM3IDIzLjkgMjkuMjM3IDI0LjMgMjkuNjM3IDI0LjMgTCAzMy4wMzcgMjQuMyBDIDMzLjUzNyAyNC4zIDM0LjAzNyAyMy45IDM0LjEzNyAyMy40IEwgMzYuMTM3IDEwLjYgQyAzNi4yMzcgMTAuNCAzNS44MzcgMTAgMzUuNDM3IDEwIFogTSAzMC4zMzcgMTcuMiBDIDI5LjkzNyAxOS4zIDI4LjMzNyAyMC44IDI2LjEzNyAyMC44IEMgMjUuMDM3IDIwLjggMjQuMjM3IDIwLjUgMjMuNjM3IDE5LjggQyAyMy4wMzcgMTkuMSAyMi44MzcgMTguMiAyMy4wMzcgMTcuMiBDIDIzLjMzNyAxNS4xIDI1LjEzNyAxMy42IDI3LjIzNyAxMy42IEMgMjguMzM3IDEzLjYgMjkuMTM3IDE0IDI5LjczNyAxNC42IEMgMzAuMjM3IDE1LjMgMzAuNDM3IDE2LjIgMzAuMzM3IDE3LjIgWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMDMwODciIGQ9Ik0gNTUuMzM3IDEwIEwgNTEuNjM3IDEwIEMgNTEuMjM3IDEwIDUwLjkzNyAxMC4yIDUwLjczNyAxMC41IEwgNDUuNTM3IDE4LjEgTCA0My4zMzcgMTAuOCBDIDQzLjIzNyAxMC4zIDQyLjczNyAxMCA0Mi4zMzcgMTAgTCAzOC42MzcgMTAgQyAzOC4yMzcgMTAgMzcuODM3IDEwLjQgMzguMDM3IDEwLjkgTCA0Mi4xMzcgMjMgTCAzOC4yMzcgMjguNCBDIDM3LjkzNyAyOC44IDM4LjIzNyAyOS40IDM4LjczNyAyOS40IEwgNDIuNDM3IDI5LjQgQyA0Mi44MzcgMjkuNCA0My4xMzcgMjkuMiA0My4zMzcgMjguOSBMIDU1LjgzNyAxMC45IEMgNTYuMTM3IDEwLjYgNTUuODM3IDEwIDU1LjMzNyAxMCBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny43MzcgMi44IEwgNTkuOTM3IDIuOCBDIDU5LjQzNyAyLjggNTguOTM3IDMuMiA1OC44MzcgMy43IEwgNTUuNzM3IDIzLjYgQyA1NS42MzcgMjQgNTUuOTM3IDI0LjMgNTYuMzM3IDI0LjMgTCA2MC4zMzcgMjQuMyBDIDYwLjczNyAyNC4zIDYxLjAzNyAyNCA2MS4wMzcgMjMuNyBMIDYxLjkzNyAxOCBDIDYyLjAzNyAxNy41IDYyLjQzNyAxNy4xIDYzLjAzNyAxNy4xIEwgNjUuNTM3IDE3LjEgQyA3MC42MzcgMTcuMSA3My42MzcgMTQuNiA3NC40MzcgOS43IEMgNzQuNzM3IDcuNiA3NC40MzcgNS45IDczLjQzNyA0LjcgQyA3Mi4yMzcgMy41IDcwLjMzNyAyLjggNjcuNzM3IDIuOCBaIE0gNjguNjM3IDEwLjEgQyA2OC4yMzcgMTIuOSA2Ni4wMzcgMTIuOSA2NC4wMzcgMTIuOSBMIDYyLjgzNyAxMi45IEwgNjMuNjM3IDcuNyBDIDYzLjYzNyA3LjQgNjMuOTM3IDcuMiA2NC4yMzcgNy4yIEwgNjQuNzM3IDcuMiBDIDY2LjEzNyA3LjIgNjcuNDM3IDcuMiA2OC4xMzcgOCBDIDY4LjYzNyA4LjQgNjguNzM3IDkuMSA2OC42MzcgMTAuMSBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC45MzcgMTAgTCA4Ny4yMzcgMTAgQyA4Ni45MzcgMTAgODYuNjM3IDEwLjIgODYuNjM3IDEwLjUgTCA4Ni40MzcgMTEuNSBMIDg2LjEzNyAxMS4xIEMgODUuMzM3IDkuOSA4My41MzcgOS41IDgxLjczNyA5LjUgQyA3Ny42MzcgOS41IDc0LjEzNyAxMi42IDczLjQzNyAxNyBDIDczLjAzNyAxOS4yIDczLjUzNyAyMS4zIDc0LjgzNyAyMi43IEMgNzUuOTM3IDI0IDc3LjYzNyAyNC42IDc5LjUzNyAyNC42IEMgODIuODM3IDI0LjYgODQuNzM3IDIyLjUgODQuNzM3IDIyLjUgTCA4NC41MzcgMjMuNSBDIDg0LjQzNyAyMy45IDg0LjczNyAyNC4zIDg1LjEzNyAyNC4zIEwgODguNTM3IDI0LjMgQyA4OS4wMzcgMjQuMyA4OS41MzcgMjMuOSA4OS42MzcgMjMuNCBMIDkxLjYzNyAxMC42IEMgOTEuNjM3IDEwLjQgOTEuMzM3IDEwIDkwLjkzNyAxMCBaIE0gODUuNzM3IDE3LjIgQyA4NS4zMzcgMTkuMyA4My43MzcgMjAuOCA4MS41MzcgMjAuOCBDIDgwLjQzNyAyMC44IDc5LjYzNyAyMC41IDc5LjAzNyAxOS44IEMgNzguNDM3IDE5LjEgNzguMjM3IDE4LjIgNzguNDM3IDE3LjIgQyA3OC43MzcgMTUuMSA4MC41MzcgMTMuNiA4Mi42MzcgMTMuNiBDIDgzLjczNyAxMy42IDg0LjUzNyAxNCA4NS4xMzcgMTQuNiBDIDg1LjczNyAxNS4zIDg1LjkzNyAxNi4yIDg1LjczNyAxNy4yIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDA5Y2RlIiBkPSJNIDk1LjMzNyAzLjMgTCA5Mi4xMzcgMjMuNiBDIDkyLjAzNyAyNCA5Mi4zMzcgMjQuMyA5Mi43MzcgMjQuMyBMIDk1LjkzNyAyNC4zIEMgOTYuNDM3IDI0LjMgOTYuOTM3IDIzLjkgOTcuMDM3IDIzLjQgTCAxMDAuMjM3IDMuNSBDIDEwMC4zMzcgMy4xIDEwMC4wMzcgMi44IDk5LjYzNyAyLjggTCA5Ni4wMzcgMi44IEMgOTUuNjM3IDIuOCA5NS40MzcgMyA5NS4zMzcgMy4zIFoiPjwvcGF0aD48L3N2Zz4";
const venmoSvg =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAxIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTAxIDMyIiB4bWxucz0iaHR0cDomI3gyRjsmI3gyRjt3d3cudzMub3JnJiN4MkY7MjAwMCYjeDJGO3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+PGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgaWQ9IkJsdWUiIGZpbGw9IiNmZmZmZmYiPjxnIGlkPSJMb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgNi4wMDAwMDApIj48cGF0aCBkPSJNMTYuNjY2MDQ4NCwwLjE4IEMxNy4zNDY2NjI2LDEuMzM5MDk5MSAxNy42NTM1MDY5LDIuNTMyOTcyOTcgMTcuNjUzNTA2OSw0LjA0MTA4MTA4IEMxNy42NTM1MDY5LDguODUxMTcxMTcgMTMuNjcxMzQ2LDE1LjA5OTgxOTggMTAuNDM5MzQ2LDE5LjQ4NzU2NzYgTDMuMDU3MjU5NTIsMTkuNDg3NTY3NiBMMC4wOTY2MzE0ODc5LDEuMjMzMTUzMTUgTDYuNTYwNDU2NzUsMC42MDAzNjAzNiBMOC4xMjU3ODIwMSwxMy41ODk1NDk1IEM5LjU4ODM1OTg2LDExLjEzMjYxMjYgMTEuMzkzMjU0Myw3LjI3MTUzMTUzIDExLjM5MzI1NDMsNC42MzkwOTkxIEMxMS4zOTMyNTQzLDMuMTk4MTk4MiAxMS4xNTM4NTk5LDIuMjE2NzU2NzYgMTAuNzc5NzQwNSwxLjQwODY0ODY1IEwxNi42NjYwNDg0LDAuMTggWiBNMjQuOTA3MTU5MiwxMS42OTM4NzM5IEMyNC45MDcxNTkyLDEzLjgzNjc1NjggMjYuMDYyNzE4LDE0LjY3NzQ3NzUgMjcuNTk0NjY3OCwxNC42Nzc0Nzc1IEMyOS4yNjI5MTUyLDE0LjY3NzQ3NzUgMzAuODYwMjE4LDE0LjI1NzExNzEgMzIuOTM2MzA5NywxMy4xNjkxODkyIEwzMi4xNTQzNDYsMTguNjQ0NTA0NSBDMzAuNjkxNTkzNCwxOS4zODE0NDE0IDI4LjQxMTkyOTEsMTkuODczMTUzMiAyNi4xOTkxOTAzLDE5Ljg3MzE1MzIgQzIwLjU4NjM1MTIsMTkuODczMTUzMiAxOC41Nzc1MzQ2LDE2LjM2MzI0MzIgMTguNTc3NTM0NiwxMS45NzUzMTUzIEMxOC41Nzc1MzQ2LDYuMjg4MTA4MTEgMjEuODQ1MTgxNywwLjI0OTM2OTM2OSAyOC41ODE5NTE2LDAuMjQ5MzY5MzY5IEMzMi4yOTA5OTMxLDAuMjQ5MzY5MzY5IDM0LjM2NDk4NzksMi4zOTIwNzIwNyAzNC4zNjQ5ODc5LDUuMzc1Njc1NjggQzM0LjM2NTMzNzQsMTAuMTg1NTg1NiAyOC4zNzgzNzg5LDExLjY1OTA5OTEgMjQuOTA3MTU5MiwxMS42OTM4NzM5IFogTTI1LjA0MzQ1NjcsOC4yMTgxOTgyIEMyNi4yMzI5MTUyLDguMjE4MTk4MiAyOS4yMjc0NDI5LDcuNjU3MTE3MTIgMjkuMjI3NDQyOSw1LjkwMjE2MjE2IEMyOS4yMjc0NDI5LDUuMDU5NDU5NDYgMjguNjQ5NTc2MSw0LjYzOTA5OTEgMjcuOTY4NjEyNSw0LjYzOTA5OTEgQzI2Ljc3NzIzMTgsNC42MzkwOTkxIDI1LjIxMzgyODcsNi4xMTIyNTIyNSAyNS4wNDM0NTY3LDguMjE4MTk4MiBaIE01My4wMTg3MDkzLDQuNDYzNjAzNiBDNTMuMDE4NzA5Myw1LjE2NTU4NTU5IDUyLjkxNTQzNzcsNi4xODM3ODM3OCA1Mi44MTI2OTAzLDYuODQ5MTg5MTkgTDUwLjg3MzA3MDksMTkuNDg3Mzg3NCBMNDQuNTc5MDkzNCwxOS40ODczODc0IEw0Ni4zNDgzNDA4LDcuOTAyMTYyMTYgQzQ2LjM4MTg5MSw3LjU4NzkyNzkzIDQ2LjQ4NDk4NzksNi45NTUzMTUzMiA0Ni40ODQ5ODc5LDYuNjA0MzI0MzIgQzQ2LjQ4NDk4NzksNS43NjE2MjE2MiA0NS45NzQzOTYyLDUuNTUxMzUxMzUgNDUuMzYwNTMyOSw1LjU1MTM1MTM1IEM0NC41NDUxOTM4LDUuNTUxMzUxMzUgNDMuNzI3OTMyNSw1LjkzNzExNzEyIDQzLjE4MzYxNTksNi4yMTg3Mzg3NCBMNDEuMTc2ODk2MiwxOS40ODc1Njc2IEwzNC44NDc0NDY0LDE5LjQ4NzU2NzYgTDM3LjczOTA1MTksMC41NjU5NDU5NDYgTDQzLjIxNzE2NjEsMC41NjU5NDU5NDYgTDQzLjI4NjUzODEsMi4wNzYyMTYyMiBDNDQuNTc4OTE4NywxLjE5ODczODc0IDQ2LjI4MDcxNjMsMC4yNDk3Mjk3MyA0OC42OTUyODAzLDAuMjQ5NzI5NzMgQzUxLjg5NDI1NDMsMC4yNDkzNjkzNjkgNTMuMDE4NzA5MywxLjkzNDk1NDk1IDUzLjAxODcwOTMsNC40NjM2MDM2IFogTTcxLjcwMzcwOTMsMi4zMjA3MjA3MiBDNzMuNTA2MzMyMiwwLjk4ODEwODEwOCA3NS4yMDg0NzkyLDAuMjQ5MzY5MzY5IDc3LjU1NTQxODcsMC4yNDkzNjkzNjkgQzgwLjc4NzI0MzksMC4yNDkzNjkzNjkgODEuOTExMzQ5NSwxLjkzNDk1NDk1IDgxLjkxMTM0OTUsNC40NjM2MDM2IEM4MS45MTEzNDk1LDUuMTY1NTg1NTkgODEuODA4NDI3Myw2LjE4Mzc4Mzc4IDgxLjcwNTY3OTksNi44NDkxODkxOSBMNzkuNzY4MzMyMiwxOS40ODczODc0IEw3My40NzI2MDczLDE5LjQ4NzM4NzQgTDc1LjI3NTU3OTYsNy42NTcyOTczIEM3NS4zMDg3ODAzLDcuMzQxMDgxMDggNzUuMzc4NTAxNyw2Ljk1NTMxNTMyIDc1LjM3ODUwMTcsNi43MTA2MzA2MyBDNzUuMzc4NTAxNyw1Ljc2MTgwMTggNzQuODY3NzM1Myw1LjU1MTM1MTM1IDc0LjI1NDA0NjcsNS41NTEzNTEzNSBDNzMuNDcyMjU3OCw1LjU1MTM1MTM1IDcyLjY5MDgxODMsNS45MDIzNDIzNCA3Mi4xMTA2Nzk5LDYuMjE4NzM4NzQgTDcwLjEwNDMwOTcsMTkuNDg3NTY3NiBMNjMuODEwMTU3NCwxOS40ODc1Njc2IEw2NS42MTMxMjk4LDcuNjU3NDc3NDggQzY1LjY0NjMzMDQsNy4zNDEyNjEyNiA2NS43MTM5NTUsNi45NTU0OTU1IDY1LjcxMzk1NSw2LjcxMDgxMDgxIEM2NS43MTM5NTUsNS43NjE5ODE5OCA2NS4yMDMwMTM4LDUuNTUxNTMxNTMgNjQuNTkxNDIyMSw1LjU1MTUzMTUzIEM2My43NzQzMzU2LDUuNTUxNTMxNTMgNjIuOTU4ODIxOCw1LjkzNzI5NzMgNjIuNDE0NTA1Miw2LjIxODkxODkyIEw2MC40MDYyMTI4LDE5LjQ4Nzc0NzcgTDU0LjA3ODg1OTksMTkuNDg3NzQ3NyBMNTYuOTcwMTE1OSwwLjU2NjEyNjEyNiBMNjIuMzgxMzA0NSwwLjU2NjEyNjEyNiBMNjIuNTUxMzI3LDIuMTQ1NzY1NzcgQzYzLjgxMDE1NzQsMS4xOTkwOTkxIDY1LjUxMDU1NzEsMC4yNTAwOTAwOSA2Ny43OTAwNDY3LDAuMjUwMDkwMDkgQzY5Ljc2Mzc0MDUsMC4yNDkzNjkzNjkgNzEuMDU1OTQ2NCwxLjEyNzAyNzAzIDcxLjcwMzcwOTMsMi4zMjA3MjA3MiBaIE04My41NTA1OSwxMS43OTk4MTk4IEM4My41NTA1OSw1LjgzMjc5Mjc5IDg2LjYxMjA0MzMsMC4yNDkzNjkzNjkgOTMuNjU1ODMyMiwwLjI0OTM2OTM2OSBDOTguOTYzMzk5NywwLjI0OTM2OTM2OSAxMDAuOTAzNTQzLDMuNDc5ODE5ODIgMTAwLjkwMzU0Myw3LjkzODczODc0IEMxMDAuOTAzNTQzLDEzLjgzNjU3NjYgOTcuODc1MTE1OSwxOS45NDQzMjQzIDkwLjY2MTQ3OTIsMTkuOTQ0MzI0MyBDODUuMzE5NjYyNiwxOS45NDQzMjQzIDgzLjU1MDU5LDE2LjMyODEwODEgODMuNTUwNTksMTEuNzk5ODE5OCBaIE05NC40Mzc0NDY0LDcuODMyNzkyNzkgQzk0LjQzNzQ0NjQsNi4yODgxMDgxMSA5NC4wNjI4MDI4LDUuMjM0OTU0OTUgOTIuOTQwOTY4OSw1LjIzNDk1NDk1IEM5MC40NTcwMzI5LDUuMjM0OTU0OTUgODkuOTQ2OTY1NCw5Ljc2MzA2MzA2IDg5Ljk0Njk2NTQsMTIuMDc5NDU5NSBDODkuOTQ2OTY1NCwxMy44MzY3NTY4IDkwLjQyMzgzMjIsMTQuOTI0MzI0MyA5MS41NDUzMTY2LDE0LjkyNDMyNDMgQzkzLjg5MzEyOTgsMTQuOTI0MzI0MyA5NC40Mzc0NDY0LDEwLjE0OTAwOSA5NC40Mzc0NDY0LDcuODMyNzkyNzkgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg";

export const TipMe = () => {
  return (
    <Container paddingBottom={5}>
      <Heading as="h2">Tip Me?</Heading>

      <Text>
        If you found this site awesome and would like to pay for my next energy
        drink, I would <i>love</i> to take your money! You can send me money via
        the options below.
      </Text>

      <Container padding={5}>
        <Flex>
          <form
            action="https://www.paypal.com/donate"
            method="post"
            target="_top"
          >
            <input type="hidden" name="business" value="A93ZP7FUUJ6SC" />
            <input type="hidden" name="no_recurring" value="1" />
            <input type="hidden" name="currency_code" value="USD" />

            <Button
              variant="ghost"
              backgroundColor="#ffc439"
              borderRadius={23}
              width={200}
              type="submit"
            >
              <Image
                src={paypalSvg}
                title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button"
              />
            </Button>
            <img
              alt="paypal"
              src="https://www.paypal.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>

          <Button
            variant="link"
            backgroundColor="#008CFF"
            borderRadius={23}
            width={200}
            as="a"
            href="https://venmo.com/code?user_id=1532230992134144508"
          >
            <Image src={venmoSvg} alt="venmo" />
          </Button>

          <Button
            variant="link"
            width={200}
            padding={0}
            as="a"
            href="https://www.buymeacoffee.com/sabe12070S"
          >
            <Image
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee"
            />
          </Button>
        </Flex>
      </Container>
    </Container>
  );
};
