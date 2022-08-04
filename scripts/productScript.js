const buildProjectCard = (project) => {
  let card = $(
    `
      <article class="grey-section flex-column gap-12 projects">
        <figure class="image-box projects"> 
          <img class="image projects" src="${project.image}" alt="Preview of Tribute Page project">
        </figure>
        <h3>${project.title}</h3>
        <ul class="list flex-column gap-42 projects">
          <li>
            <p>
              ${project.info}
            </p>
          </li>
          <li>
            <ul class="sub-list flex-row gap-12 projects">
              <li class="sub-list-item projects">${project.tech[0]}</li>
              <li class="sub-list-item projects">${project.tech[1]}</li>
              <li class="sub-list-item projects">${project.tech[2]}</li>
              <li class="sub-list-item link projects">
                <a class="link" href="${project.href[0]}">${project.href[1]}</a>
              </li>
            </ul>
          </li>
        </ul>
      </article>
    `
    );
  return card;
}

$(document).ready(function() {
  console.log('ready!')
  
  $.ajax({url: "../data/projects.json", success: (data) => {
    for (let i = 0; i < data.length; i++) {
      let card = buildProjectCard(data[i]);
      $('.container').append(card)
    }
  }})
})

