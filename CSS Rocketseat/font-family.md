# Font Types
A tipografia transmite uma mensagem, por exemplo, quando queremos dar uma ênfase no texto nós podemos escrever o mesmo em negrito.

Nós podemos transmitir uma mensagem diferente dependendo do estilo que escrevemos o texto.

Algumas das propriedades de fonts do CSS que podem nos ajudar a transmitir uma mensagem através dos textos da página são:

font-family
font-weight
font-style
font-size

# Font Family
Tipo de fonte de um elemento
Lista de fontes e ordem de prioridade
inclui fallback font

p {
  font-family: "Times New Roman", Times, serif;
}
Alguns tipos de fonts:
serif (com serifa)
sans-serif (sem serifa)

# Font-weight
Peso da fonte
Valores: normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
Dependendo da família da fonte não conseguimos utilizar todos os pesos de fonte

p {
	font-weight: bold;
}

# Font Style
É o estilo da fonte
Valores: normal | italic | oblique
Os valores que podem ser aplicados dependem da fonte usada
span {
	font-style: italic;
}

# Font Size
Tamanho da fonte
p {
	font-size: 18px;
}

# Web Fonts
## Fontes do sistema x Fontes da web
Fontes do sistema são as fontes que estão instaladas na máquina do usuário e nem sempre o cliente vai ter instalado as fontes usadas no projeto e isso pode fazer com que os estilos dos textos não sejam aplicados corretamente, mas para resolver esses casos podemos preparar nossas fonts para web ou usar fontes da web.

Como usar fontes para web?
@font-face
@import
link
Referência
https://fonts.google.com/

https://css-tricks.com/snippets/css/using-font-face/

# Font Variant
Faz variações na apresentação da fonte
p {
	font-variant: small-caps;
}
https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant

# Font Stretch
Alargamento ou encolhimento da fonte
Aceita palavras-chaves como: expanded, condensed, normal
Aceita porcentagens de 50% a 200%
Essa propriedade não vai funcionar em todas as fontes
p {
	font-stretch: expanded;
}
https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch

# Letter spacing
Define o espaçamento entre os caracteres
p {
	letter-spacing: 4px;
}
https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing

# Word spacing
Define o espaçamento entre palavras
p {
	word-spacing: 1em;
}
https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing

# Line height
Define os espaços entre linhas
Pode ser com unidades ou sem unidades de medida
Valores comuns: 1.5 ou 2
p {
	line-height: 1.5;
}
https://developer.mozilla.org/en-US/docs/Web/CSS/line-height

# Text transform
Transformação do texto
Valores podem ser: none | capitalize | uppercase | lowercase | full-width | full-size-kana
p {
	text-transform: uppercase;
}
https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform

# Text decoration
Aparência decorativa de um texto
line: underline | overline | line-through
podemos aplicar mais de 1 valor
style: wavy | dotted | double | dashed | solid
color: <color> values
h1 {
	text-decoration: underline; /* shorthand */
}

p {
  text-decoration: wavy overline blue; /* shorthand */
}

# Text align
Alinhamento de um texto
Valores: start | end | left | right | center | justify | match-parent
p {
	text-align: center;
}

# Text shadow
Sombra aplicada a um texto
Permite múltiplos valores
p {
  text-shadow: 1px 1px 1px red,
	       2px 2px 1px green; /* offset-x | offset-y | blur-radius | color */
}

# Shorthand
Podemos usar o shorthand font para determinar os seguintes valores: font-style, font-variant, font-weight, font-stretch, font-size, line-height e font-family
p {
  font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;
}