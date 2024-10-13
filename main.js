import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
const obtenerNumeros = document.getElementById("Botonsumar");

const ObtenerSuma = () => {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    result = a + b;
    console.log("El resultado de a + b es "+ result);
};

obtenerNumeros.addEventListener("click", () => {
    ObtenerSuma();
});

const obtenerNombre = document.getElementById("BotonNombre");
obtenerNombre.addEventListener("click", () => {
    let nombre = prompt("Por favor, ingresa tu nombre:");
console.log("Hola "+nombre+"!");
});

const compararmayor = document.getElementById("BotonMayor");

const ObtenerGrande = () => {
    let c = +document.getElementById("c").value;
    let d = +document.getElementById("d").value;
    let e = +document.getElementById("e").value;
    let result = Math.max(c, d, e);
    console.log("El Mayor es:" + result);
};

compararmayor.addEventListener("click", () => {
    ObtenerGrande();
});

const PoI = document.getElementById("BotonPoI").addEventListener("click", () => {
    let numero = prompt("Por favor, ingresa un número: ");
    if (numero % 2 === 0) {
  console.log("El número "+numero + ", es par");
} else {
  console.log("El número "+numero + ", es impar");
}
});

const BucleNum = document.getElementById("Boton1a10").addEventListener("click", () => {
    let n = 10;
    while (n>0) {
        console.log(n);
        --n;
    }
});

const BucleNumeroMayor = document.getElementById("Boton100").addEventListener("click", () => {
 let numero=0;
 do {
    numero = prompt("Ingresa un número mayor a 100: ");
 } while (numero<=100);
 console.log("Ingresaste un número mayor a 100: "+ numero);
});

const esPar = (numero) => {
    return numero % 2 === 0;
};

const paridadfuncional = document.getElementById("parIdad").addEventListener("click", () => {
    let num = +document.getElementById("paridad").value;
    console.log("El número " + num +" es par: " + esPar(num));
} );

const convertirCelsiusAFahrenheit = (grados) => {
    return Fahrenheit = grados * 1.8 + 32;
};

const CelFah= document.getElementById("CF").addEventListener("click", () => {
    let grados = +document.getElementById("celafa").value;
    console.log(grados +"°C son equivalentes a "+convertirCelsiusAFahrenheit(grados)+"°F");
} );
let persona;
const Btpersona = document.getElementById("botonpersona").addEventListener("click", () => {
    persona = {
        nombre : document.getElementById("nombre").value,
        edad : +document.getElementById("edad").value,
        ciudad : document.getElementById("ciudad").value
    };
    console.log(persona);
})

const BTcambiarCiudad = document.getElementById("cambiarcui").addEventListener("click", () => {
            if (persona) {
                let nuevaciudad = prompt("Ingresa nueva ciudad: ");
                persona.ciudad = nuevaciudad;
                console.log(persona);
            } else {
                console.log("Primero debes guardar la persona.");
            }
        });


document.getElementById("botonlibro").addEventListener("click", () => {
    let libro = {
        titulo : document.getElementById("titulo").value,
        autor : document.getElementById("autor").value,
        anio : +document.getElementById("año").value
    };

    if (libro.anio>10) {
        console.log ("El libro \""+libro.titulo+"\" es antiguo: "+ true);
    } else {
         console.log ("El libro \""+libro.titulo+"\" es antiguo: "+ false);
    }
})

document.getElementById("array10").addEventListener("click", () => {
    let numerosa = [1,2,3,4,5,6,7,8,9,10];
    let numerosadoble = [];
    console.log("Números originales: "+ numerosa);
    for (let i = 0; i < numerosa.length; i++) {
        numerosadoble [i] = numerosa [i] * 2; 
    }
    console.log("Números multiplicados por 2: "+numerosadoble);
});

document.getElementById("arraypares").addEventListener("click", () => {
    let pares = [];
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        } 
    }
    console.log(pares);
});

let cambiarColor = () => {
    let parrafos = document.querySelectorAll("p.azul");
    parrafos.forEach(p => {
        p.classList.add('bluep');
    });
}

document.getElementById("cambiarcolor").addEventListener("click", cambiarColor);

document.getElementById("ingtext").addEventListener("click", () => {
    let texto = document.getElementById("textoin").value;
    alert("Has Ingresado: "+ texto);
});

document.getElementById("Ele1").addEventListener("click", () => {
    console.log("Elemento 1");
});

document.getElementById("Ele2").addEventListener("click", () => {
    console.log("Elemento 2");
});

document.getElementById("Ele3").addEventListener("click", () => {
    console.log("Elemento 3");
});
    let TextDes = document.getElementById("textoHaDes");
document.getElementById("Deshabilitar").addEventListener("click", () => {
    TextDes.disabled = true;
})
document.getElementById("Habilitar").addEventListener("click", () => {
    TextDes.disabled = false;
})

const Correo = () => {
    let email = document.getElementById("correoe").value;
    localStorage.setItem (
        "email",
         JSON.stringify ( {
            email
         })
    )
}

 const mostrarcorreo = () => {
            const emailguardado = JSON.parse(localStorage.getItem("email"));
if (emailguardado) {
    console.log("Correo guardado:", emailguardado.email);
}
        };

document.addEventListener("DOMContentLoaded", () => {
            mostrarcorreo();
        });

document.getElementById("guardaremail").addEventListener("click", () => {
    Correo();
    mostrarcorreo();
})

document.getElementById("borraremail").addEventListener("click", () => {
    localStorage.clear();
    console.log("Datos de email borrados");
})