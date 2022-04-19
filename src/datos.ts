let numero1 = <HTMLInputElement>document.getElementById("numero1");
let numero2 = <HTMLInputElement>document.getElementById("numero2");
let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");

let meses: string[] = new Array("Enero", "febrero", "marzo");

console.log(meses[2]);

function nombrarMes(nroMes: number) {
  console.log("el mes " + nroMes + "es " + meses[nroMes - 1]);
}

btnEnviar.addEventListener("click", () => {
  let mes = Number(numero1.value);
  nombrarMes(mes);
});
