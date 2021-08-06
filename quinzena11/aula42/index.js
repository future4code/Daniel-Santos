
// Exercício 1

this.Add = function(dado, indice) {

  if (indice === -1) {
      this.AddFirst(dado);
  }

  else if (indice > -1 && indice < contador) {
      let node = {
          dado: dado,
          proximo: null
      };
      let anterior;
      let atual = head;
      let i = 0;

      while (i++ < indice) {
          anterior = atual;
          atual = atual.proximo;
      }
      anterior.proximo = node;
      node.proximo = atual;
      contador++;
  } else {
      alert("fora de alcance");
  }
}
