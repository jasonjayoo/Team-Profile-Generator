// creates Manager info card
const createManager = function (manager) {
  return `
    <div class="column is-one-third-desktop">
        <div class="card">
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                    <h3>${manager.name}</h3>
                    <h4>Manager</h4><span class="material-icons">manage_accounts</span>
                    </div>
                </div>
                <hr>
                <div class="content">
                    <p class="id">ID: ${manager.id}</p>
                    <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                    <p class="office">Office Number: ${manager.officeNumber}</p>
                </div>
            </div>
        </div>
    </div>
    `;
};

// creates Engineer info card
const createEngineer = function (engineer) {
  return `
    <div class="column is-one-third-desktop">
        <div class="card">
            <div class="card-content">
                <div class="media">
                    <div class="media-right">
                        <h3>${engineer.name}</h3>
                        <h4>Engineer</h4><span class="material-icons">desktop_mac</span>
                    </div>
                </div>
                <hr>
                <div class="content">
                    <p class="id">ID: ${engineer.id}</p>
                    <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
                </div>
            </div>
        </div>
    </div>
    `;
};

// creates Intern info card
const createIntern = function (intern) {
  return `
    <div class="column is-one-third-desktop">
        <div class="card">
            <div class="card-content">

                <div class="media">
                    <div class="media-right">
                        <h3>${intern.name}</h3>
                        <h4>Intern</h4><span class="material-icons">directions_run</span>
                    </div>
                </div>
                <hr>
                <div class="content">
                    <p class="id">ID: ${intern.id}</p>
                    <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                    <p class="school">School: ${intern.school}</p>
                </div>
            </div>
        </div>
    </div>`;
};

// pushes the data array to the webpage
generateHTML = (data) => {
  // empty array that employee info cards will be pushed to
  htmlInfo = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const position = employee.getRole();

    // calls the manager function
    if (position === "Manager") {
      const managerInfo = createManager(employee);
      // pushes manager info to the htmlInfo array
      htmlInfo.push(managerInfo);
    }

    // calls the engineer function
    if (position === "Engineer") {
      const engineerInfo = createEngineer(employee);
      // pushes engineer info to the htmlInfo array
      htmlInfo.push(engineerInfo);
    }

    // calls the intern function
    if (position === "Intern") {
      const internInfo = createIntern(employee);
      // pushes intern info to the htmlInfo array
      htmlInfo.push(internInfo);
    }
  }

  // takes all the pushed employee info that been stored in the htmlInfo array and joins them together.
  const employeeInfo = htmlInfo.join("");

  // takes all input employee info and returns to generated the page
  const generateTeam = generateTeamPage(employeeInfo);
  return generateTeam;
};

// this generates the html page using bulma css framework and other extensions via temperate literal.
const generateTeamPage = function (employeeInfo) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  <title>Team Profile Generator</title>
  </head>
  <body>
      <header>
      <section class="hero is-info is-bold">
      <div class="hero-body">
          <div class="container">
              <h1 class="title">Team Profile</h1>
          </div>
      </div>
  </section>
  <main class="m-6">
      <div class="columns is-flex is-flex-wrap-wrap is-flex-direction-row is-justify-content-center">${employeeInfo}</div>
          </div>
      </main>
      
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  </html>


`;
};

// exports the html template to the index.js
module.exports = generateHTML;
