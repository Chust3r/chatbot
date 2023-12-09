/* 

Flags 

g → global
i → insensitive
m → multiline
s → single line
u → unicode
y → sticky


*/

const flags = 'gmi'

const symbol = '@'

export const ubicacion = `/${symbol}((ubicaci[o,ó]n)|(direcci[o,ó]n))/${flags}`

export const horario = `/${symbol}horario/${flags}`

export const redes = `/${symbol}(redes|facebook|instagram|tiktok)/${flags}`

export const email = `/${symbol}((correo(\s(electr[o,ó]nico)?))|email)/${flags}`

export const telfono = `/${symbol}((n[u,ú]mero)|(tel[e,é]fono))/${flags}`
