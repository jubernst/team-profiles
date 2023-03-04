function createManagerCard(manager) {
  return `
<div class="card">
  <h5 class="card-title bg-primary">${manager.name}</h5>
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
  const engCards = ``;
  for (var e of engineers) {
    engCards += `
<div class="card">
    <h5 class="card-title bg-primary">${e.name}</h5>
    <h6 class="card-subtitle">${e.role}</h6>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${e.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${e.email}">${e.email}</a></li>
      <li class="list-group-item">Github: <a href="https://github.com/${e.github}">${e.github}</a></li>
    </ul>
</div>`;
  }
  return engCards;
}

function createInternCards(interns) {
  const internCards = ``;
  for (var i of interns) {
    internCards += `
<div class="card">
    <h5 class="card-title bg-primary">${i.name}</h5>
    <h6 class="card-subtitle">${i.role}</h6>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${i.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${i.email}">${i.email}</a></li>
      <li class="list-group-item">School: ${i.school}</li>
    </ul>
</div>`;
  }
  return internCards;
}

// try it like this for now
// figure out formatting later
function createHTML(manager, engineers, interns) {
  const managerCard = createManagerCards(manager);
  const engineerCards = createEngineerCards(engineers);
  const internCards = createInternCards(interns);

  return `
<!DOCTYPE html>
<html lang="en-us">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <!-- Bootstrap -->
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossorigin="anonymous"
      />
      <!-- My CSS -->
      <link rel="stylesheet" href="style.css" />
      <title>Team Profiles</title>
    </head>
  
    <body>
      <header class="header bg-info">
        <h1>My Team</h1>
      </header>

    <div class="teamCards">
        ${managerCard}
        ${engineerCards}
        ${internCards}
    </div>

    </body>
</html>`;
}

module.exports = createHTML;
