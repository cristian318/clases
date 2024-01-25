const caja1 = document.getElementById("caja1");

const cajas = document.querySelectorAll(".caja");

/* console.log(caja1); */

// ELEMENTO.addEventListener(NOMBRE_DEL_EVENTO,calllback)
/* caja1.addEventListener("click", (event) => {
  console.log({ event });
  console.log("alguien dio click en la caja 1");
});
 */

const getPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    });
  });
};

const p1 = getPromise();
const p2 = getPromise();

// p1 !== p2
/* console.log(p1 === p2); */

/* console.log(cajas); */

const fnEventoClick = (event) => {
  console.log({ event });
  console.log("alguien dio click en la caja", event.target);
};

const f1 = fnEventoClick;
const f2 = fnEventoClick;

// f1 === f2
/* console.log(f1 === f2); */

const agregarEventos = () => {
  for (let i = 0; i < cajas.length; i += 1) {
    const element = cajas[i];
    element.addEventListener("click", fnEventoClick);
    element.addEventListener("click", () => {
      console.log("el otro evento click");
    });
    setTimeout(() => {
      element.removeEventListener("click", fnEventoClick);
    }, 2000);
  }
};

agregarEventos();
agregarEventos();
agregarEventos();
agregarEventos();
agregarEventos();

/// input file

const input = document.querySelector("input");

console.log(input);

const fnEventoClickInput = (event) => {
  console.log("click en el input", event.target);
  // validar y si sí, deje seguir el proceso cotidiano.

  /*  if (true) { */
  event.preventDefault();
  console.log("ahora haré yo otra cosa");
  /* } */
};

input.addEventListener("click", fnEventoClickInput);
