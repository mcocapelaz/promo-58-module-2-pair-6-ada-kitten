"use strict";

const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="https://dev.adalab.es/gato-siames.webp"
    alt="gatito"
  />
  <h3 class="card_title">Anastacio</h3>
  <h4 class="card_race">Siamés</h4>
  <p class="card_description">
            Porte elegante, su patrón de color tan característico y sus ojos
            de un azul intenso, pero su historia se remonta a Asía al menos
            hace 500 años, donde tuvo su origen muy posiblemente.
   </p>
</article>
</li>`;

const kittenTwo = `<li class="card">
<article>
                    <img class="card_img" src="https://dev.adalab.es/sphynx-gato.webp" alt="sphynx-cat" />
                    <h3 class="card_title">Fiona</h3>
                    <h4 class="card_race">Sphynx</h4>
                    <p class="card_description">
                        Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
                        hasta con pinta de alienígena han llegado a definir a esta raza
                        gatuna que se caracteriza por la «ausencia» de pelo.
                    </p>
                    </article>
                </li>`;

const kittenThree = `<li class="card">
<article>
                    <img class="card_img" src="https://dev.adalab.es/maine-coon-cat.webp" alt="maine-coon-cat" />
                    <h3 class="card_title">Cielo</h3>
                    <h4 class="card_race">Maine Coon</h4>
                    <p class="card_description">
                        Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
                        bella mirada se ha convertido en una de sus señas de identidad.
                        Sus ojos son grandes y las orejas resultan largas y en punta.
                    </p>
                    </article>
                </li>`;

document.querySelector(".list").innerHTML = kittenOne + kittenTwo + kittenThree;
/* Lógica: Vamos a pensar que necesitamos hacer: Que la usuaria cuando pinche en el "boton" de +, se abra un formulario y cuando le de al botón de cancelar, se cierre.
 ¿Entonces qué elementos de nuestro HTML tenemos que seleccionar? El botón de +, el formulario que queremos que se abra y cierre y el botón de cancelar */
const logoImg =
  document.querySelector(
    ".js-btn-add"
  ); /*Con esto seleccionamos el botón de +. Podríamos haber usado fas, como antes, pero ya que hemos creado especificamente esta clase para seleccionar esta parte, pues la vamos a usar*/
const formSection =
  document.querySelector(".new-form"); /*Con esto seleccionamos el formulario*/
const cancelButton =
  document.querySelector(
    ".button-cancel"
  ); /*Con esto seleccionamos el botón de cancelar*/
const form = document.getElementById(".form"); // Creo que he dado con el paso de limpiar los inputs. Primero seleccionamos el formulario cuyos inputs queremos devolver a su estado inicial (vacíos)

/*EVENTOS*/

logoImg.addEventListener("click", (ev) => {
  /*Lógica en este punto: Ahora usamos las variables que hemos creado ¿Dónde tiene que hacer click la usuaria para que se abra el formulario? En el botón de +. ¿Qué tiene qué hacer? click*/
  formSection.classList.remove(
    "collapsed"
  ); /*¿Qué codigo se tiene que ejecutar cuando haga click? Ahora mismo, si te fijas en el CSS, el formulario está oculto gracias a collapsed. Tenemos que conseguir que se quite*/
}); /*Utilizamos el formulario que hemos seleccionado arriba gracias a formSection y con classList.remove le estamos quitando el collapsed*/

cancelButton.addEventListener("click", (ev) => {
  /*Ahora bien, lo mismo pero para que se nos cierre el formulario, la usuaria tiene que hacer click al botón de cancelar. Utilizamos el botón que hemos seleccionado antes con cancelButton*/
  formSection.classList.add(
    "collapsed"
  ); /*Utilizamos de nuevo el formulario que hemos seleccionado y esta vez, le añadimos la clase collapsed gracias a .classList.add*/
});

form.reset(); /*Con esta orden, el formulario vuelve a su estado inicial*/
