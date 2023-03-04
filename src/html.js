// try it like this for now
function createHTML(managerCard, engineerCards, internCards) {
  // parse engineerCards
  // parse internCards

  //   for (var i = 0; i < engineerCards.length; i++) {
  //     //engineerCards[i] will be each card
  //   }
  return `<!DOCTYPE html>
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
      <title>My Team</title>
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

module.exports(createHTML);
