# Pseudo-classes

É um tipo de seletor que irá selecionar um elemento que estiver em um estado específico.
Exemplo: É o primeiro elemento dentro de uma caixa, ou, o elemento está com o ponteiro do mouse sobre ele.
Pseudo-classes começam com 2 pontos seguido do nome da pseudo class :pseudo-class-name

# First-child
É quando queremos selecionar o primeiro filho de um grupo de elementos.

HTML

<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
</ul>
CSS

ul li:first-child {
  font-weight: bold;
}

# :Nth-of-type()
Pega o elemento por tipo e posição

HTML

<ul>
  <h3>Palavras bonitas</h3>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
</ul>
CSS

ul li:nth-of-type(1) {
  font-weight: bold;
}

# :Nth-child()
É quando queremos selecionar o primeiro filho de um grupo de elementos.

HTML

<ul>
	<h3>Palavras bonitas</h3>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
</ul>
CSS

ul li:nth-child(2) {
  font-weight: bold;
}

# :Nth-child(odd) e :Nth-child(even)
even - números pares
odd - números ímpares
HTML

<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
  <li>Liberdade</li>
</ul>
CSS

ul li:nth-child(odd) {
  color: gray;
}