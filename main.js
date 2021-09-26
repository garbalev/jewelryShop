let menuButton = $(".menuButton");
let spButtons = $(".secondPageContentButtons a");

menuButton.click(() => {
  $(".burgerMenu").toggle();
  if (menuButton.hasClass("openBurgerMenu")) {
    menuButton.addClass("closeBurgerMenu");
  } else {
    menuButton.removeClass("closeBurgerMenu");
  }
  menuButton.toggleClass("openBurgerMenu");
});

function newSecondPageContent(newSrc, newP) {
  $(".secondPageContentBlocks").html(`
            <a><img src="./images/secondPage/${newSrc}.png" alt="" /><p>${newP}</p></a>
            <a><img src="./images/secondPage/${newSrc}.png" alt="" /><p>${newP}</p></a>
            <a><img src="./images/secondPage/${newSrc}.png" alt="" /><p>${newP}</p></a>
            <a><img src="./images/secondPage/${newSrc}.png" alt="" /><p>${newP}</p></a>
            <a><img src="./images/secondPage/${newSrc}.png" alt="" /><p>${newP}</p></a>
            <a><img src="./images/secondPage/${newSrc}.png" alt="" /><p>${newP}</p></a>
            `);
}

spButtons.click(function () {
  spButtons.removeClass("focus");
  switch ($(this).text()) {
    case "Свадьба":
      $(this).addClass("focus");
      $(".secondPageContentBlocks").html(`
        <a href="">
        <img src="./images/secondPage/Rings.png" alt="" />
        <p>КОЛЬЦА</p>
      </a>
      <a href="">
        <img src="./images/secondPage/Earrings.png" alt="" />
        <p>СЕРЬГИ</p>
      </a>
      <a href="">
        <img src="./images/secondPage/Pendants.png" alt="" />
        <p>ПОДВЕСКИ</p>
      </a>
      <a href="">
        <img src="./images/secondPage/Cufflinks.png" alt="" />
        <p>ЗАПОНКИ</p>
      </a>
      <a href="">
        <img src="./images/secondPage/Bracelets.png" alt="" />
        <p>БРАСЛЕТЫ</p>
      </a>
      <a href="">
        <img src="./images/secondPage/Watches.png" alt="" />
        <p>ЧАСЫ</p>
            `);
      break;
    case "Мужу":
      $(this).addClass("focus");
      newSecondPageContent("Cufflinks", $(this).text());
      break;
    case "Жене":
      $(this).addClass("focus");
      newSecondPageContent("Bracelets", $(this).text());
      break;
    case "Партнёру":
      $(this).addClass("focus");
      newSecondPageContent("Watches", $(this).text());
      break;
    case "Коллекции":
      $(this).addClass("focus");
      newSecondPageContent("Earrings", $(this).text());
      break;
    case "Редкость":
      $(this).addClass("focus");
      newSecondPageContent("Pendants", $(this).text());
      break;
  }
});
