export class AporB {
  a: number = 0;
  b: number = 0;

  calcularMult(){
  let resultado = 0;
  const numb = Math.abs(this.b);
  for (let i = 0; i < numb; i++) {
    resultado += this.a;
  }

  return resultado;
  } 

}


