// promesas: yo le prometo que le voy a rotornar algo
// cuando? ni idea, solo sepa que no es de una (no es inmediato)

const getValuesSP = (name) => {
  const newName = String(name).replace("a", "");
  console.log("GetValues fue llamada");
  return "Nombre:" + newName;
};

const getAllSP = () => {
  console.log("antes de llamar la función");
  const values = getValuesSP("cristian");
  console.log("después de llamar la función");
  console.log("de inmediato -> ", values);
};

// todo es de inmediato
/* getAllSP(); */

const getValues = (name) => {
  const newName = String(name).replace("a", "");
  console.log("GetValues fue llamada");
  return "Nombre:" + newName;
};

const getAll = () => {
  console.log("antes de llamar la función");
  const values = getValuesSP("cristian");
  console.log("después de llamar la función");
  console.log("de inmediato -> ", values);
};

/* getAll(); */

const prueba = (numero) => {
  const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numero % 2 === 0) {
        resolve(numero);
      } else {
        reject("esto falló " + numero);
      }
    }, 3000);
  });
  console.log("antes de ejecutarla");
  miPromesa
    .then((resultado) => {
      // console.log("esto se ejecuta si todo sale bien", resultado);
      console.log("mi resultado: ", resultado, resultado + 13);
      console.log("después de ejecutarla");
      miPromesa
        .then((resultado) => {
          // console.log("esto se ejecuta si todo sale bien", resultado);
          console.log("mi resultado: ", resultado, resultado + 13);
          console.log("después de ejecutarla");
          miPromesa
            .then((resultado) => {
              // console.log("esto se ejecuta si todo sale bien", resultado);
              console.log("mi resultado: ", resultado, resultado + 13);
              console.log("después de ejecutarla");
              miPromesa
                .then((resultado) => {
                  // console.log("esto se ejecuta si todo sale bien", resultado);
                  console.log("mi resultado: ", resultado, resultado + 13);
                  console.log("después de ejecutarla");
                })
                .catch((error) => {
                  console.log("esto se ejecuta cuando algo sale mal", error);
                });
            })
            .catch((error) => {
              console.log("esto se ejecuta cuando algo sale mal", error);
            });
        })
        .catch((error) => {
          console.log("esto se ejecuta cuando algo sale mal", error);
        });
    })
    .catch((error) => {
      console.log("esto se ejecuta cuando algo sale mal", error);
    });
  // algo
};

const prueba2 = async (numero) => {
  const getNewPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (numero % 2 === 0) {
          resolve(numero);
        } else {
          reject("esto falló " + numero);
        }
      }, 1000);
    });
  };
  try {
    const resultado = await getNewPromise();
    console.log(resultado);
    const resultado2 = await getNewPromise();
    console.log(resultado2);
    const resultado3 = await getNewPromise();
    console.log(resultado3);
    const resultado4 = await getNewPromise();
    console.log(resultado4);
  } catch (error) {
    console.log("pum, algo falló", error);
  }
  console.log("si lo pongo después, es como un finaly");

  // async: hace que una función sea asincrona, o sea que puede esperar
  // await: RESUELVE una promesa y pone una espera en una función asincrona
};

prueba2(12);

/* 
TAREA: 
1. crear un proyecto con lo que quieras
2. instalar axios
3. ejercicio A: consumir un api (https://pokeapi.co/api/v2/pokemon/{N}) una vez 
    con then y con async/await
4. ejercicio B: consumir un api (https://pokeapi.co/api/v2/pokemon/{N}) 6 veces
    con then y con async/await, esperando la ejecución de cada uno, o sea, 
    el segundo espera al primero, el tercero espera al segundo, etc.
5. ejercicio C: consumir un api (https://pokeapi.co/api/v2/pokemon/{N}) 6 veces
    con then y con async/await, esperando la ejecución de todos, pero, todos deben
    ejecutarse al mismo tiempo.
6. Aclaración: para cada punto, poner un log de "inicio de ejecución" y un log de 
  "finalización de ejecución"
*/
