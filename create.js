const db = require ('./db');

function addEtudiant(id, matricule, prenom, nom, filiere, niveau){
    const sql = 'insert into Personne (prenom, nom, login, pwd) values (?,?,?,?)';
    db.query(sql,[prenom, nom, login, pwd],(err,result)=>{

    if (err) {
        console.error('Erreur requete :', err.message);
        return;
      }
      console.log('Insertion réussie à MySQL !');
});}

function delPersonne(ID){
const sql = 'delete from Personne where ID=?';
db.query(sql,[ID],(err,result)=>{
  if (err){
    console.error('Erreur sur la requete suppression:',err.message);
    return;
  }
  console.log('Suppression effectuee avec succee');
});
}

module.exports = {addPersonne,delPersonne};
