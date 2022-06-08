const nbLignes = 10;
const nbColonnes = 10;
let x,
  y = 0;

for (let i = 0; i < nbLignes; i++) {
  let trElt = document.createElement("tr");
  trElt.id = `line-${i}`;
  document.getElementById("myTable").appendChild(trElt);

  for (let j = 0; j < nbLignes; j++) {
    let tdElt = document.createElement("td");
    tdElt.id = `${x}-${y}`;
    tdElt.innerHTML = `${i}-${j}`;
    document.getElementById(`line-${i}`).appendChild(tdElt);
    x++;
    if (document.getElementById(`line-${i}`).children.length === nbColonnes) {
      y++;
      x = 0;
    }
  }
}
