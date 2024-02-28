blague = document.querySelector("h1");
response = document.querySelector("h2");


fetch("https://api.blablagues.net/?rub=blagues")
  .then((res) => res.json())
  .then((data) => {
    blague.textContent = data.data.content.text_head;
    console.log(data.data.content);
    response.textContent =
      data.data.content.text_hidden == ""
        ? data.data.content.text
        : data.data.content.text_hidden;
  });
document.addEventListener('click', () => {
  
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      blague.textContent = data.data.content.text_head;
      console.log(data.data.content);
      response.textContent =
        data.data.content.text_hidden == ""
          ? data.data.content.text
          : data.data.content.text_hidden;
    });
})
