function createManagerCard(manager) {
  return `
<div class="card">
  <h5 class="card-title">${manager.name}</h5>
  <h6 class="card-subtitle">${manager.role}</h6>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${manager.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
    <li class="list-group-item">Office number: ${manager.officeNumber}</li>
  </ul>
</div>
`;
}

function createEngineerCards(engineers) {
  const engCards = [];
  for (var e of engineers) {
    var card = `
<div class="card">
    <h5 class="card-title">${e.name}</h5>
    <h6 class="card-subtitle">${e.role}</h6>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${e.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${e.email}">${e.email}</a></li>
      <li class="list-group-item">Github: <a href="https://github.com/${e.github}">${e.github}</a></li>
    </ul>
</div>`;
    engCards.push(card);
  }
  return engCards;
}

function createInternCards(interns) {
  const internCards = [];
  for (var i of interns) {
    var card = `
<div class="card">
    <h5 class="card-title">${i.name}</h5>
    <h6 class="card-subtitle">${i.role}</h6>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${i.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${i.email}">${i.email}</a></li>
      <li class="list-group-item">School: ${i.school}</li>
    </ul>
</div>`;
    internCards.push(card);
  }
  return internCards;
}

module.exports(createManagerCard, createEngineerCards, createInternCards);
