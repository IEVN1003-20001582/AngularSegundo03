export class ZodiacoChino {
  anioN: number = 0;
  mesN: number = 0;
  diaN: number = 0;
  nombreU: string = '';
  apPaternoU: string = '';
  apMaternoU: string = '';
  sexoU: boolean = false;

  obtenerSigno(): string {
    const signos = [
      "Rata",
      "Buey",
      "Tigre",
      "Conejo",
      "Dragón",
      "Serpiente",
      "Caballo",
      "Cabra",
      "Mono",
      "Gallo",
      "Perro",
      "Cerdo"
    ];
    const indice = (this.anioN - 4) % 12;
    return signos[indice < 0 ? indice + 12 : indice];
  }

obtenerEdad(): number {
  const hoy = new Date();
  const añoA = hoy.getFullYear();
  const mesA = hoy.getMonth() + 1;
  const diaA = hoy.getDate();

  let edad = añoA - this.anioN;

  if (mesA < this.mesN || (mesA === this.mesN && diaA < this.diaN)) {
    edad--;
  }

  return edad;
}


  obtenerImagen(signo: string): string {
    const imagenes: Record<string, string> = {
      "Rata": "https://www.hola.com/horizon/landscape/5db37370df98-rata-horoscopo-chino.jpg?",
      "Buey": "https://www.hola.com/horizon/landscape/f1d1b606decd-toro-horoscopo-chino.jpg?",
      "Tigre": "https://www.hola.com/horizon/landscape/97f5c03765f7-tigre-horoscopo-chino.jpg?",
      "Conejo": "https://www.hola.com/horizon/landscape/9e8db141791f-conejo-horoscopo-chino.jpg?",
      "Dragón": "https://www.hola.com/horizon/landscape/22c61acbffb2-dragon-horoscopo-chino.jpg?",
      "Serpiente": "https://www.hola.com/horizon/landscape/f3716734bf9d-serpiente-horoscopo-chino.jpg?",
      "Caballo": "https://www.hola.com/horizon/landscape/bf0763ab3aa2-caballo-horoscopo-chino.jpg?",
      "Cabra": "https://www.hola.com/horizon/landscape/9d812aee23d6-cabra-horoscopo-chino.jpg?",
      "Mono": "https://www.hola.com/horizon/landscape/2d10e56a60a0-mono-horoscopo-chino.jpg?",
      "Gallo": "https://www.hola.com/horizon/landscape/c49624adf2ee-gallo-horoscopo-chino.jpg?",
      "Perro": "https://www.hola.com/horizon/landscape/c7bc2d117093-perro-horoscopo-chino.jpg?",
      "Cerdo": "https://www.hola.com/horizon/landscape/634be1452678-cerdo-horoscopo-chino.jpg?"
    };
    return imagenes[signo] || '';
  }
}
