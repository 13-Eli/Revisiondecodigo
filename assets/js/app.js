const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) {
  $n.textContent = 'cargando...';
  try{
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); //Obtener Json
    console.log(data);
    $n.textContent = `${data.name}`; // modificar ' por `
    $b.textContent = `${data.blog}`; // modificar ' por `
    $l.textContent = `${data.location}`; // modificar ' por `
  } catch (err) {
 
  function handleError(err) {
    console.log('OH NO!');
    console.log(err);
    n.textContent = `Algo salió mal: ${err}`
  }
  
  displayUser('stolinski').catch(handleError);
}
}