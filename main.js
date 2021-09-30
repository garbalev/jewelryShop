let menuButton = $(".menuButton"),
  spButtons = $(".secondPageContentButtons a"),
  catalogMenuFirstRow = $(".firstPageMenuBlock div").filter(":even"),
  catalogMenuSecondRow = $(".firstPageMenuBlock div").filter(":odd");

function catalogMaker(num) {
  for (let i = 0; i < num; i++) {
    $(".firstPageCatalog").append(`
        <div>
        <img src="./images/catalogFirstPage/ring.png" alt="ring">
        <p>Кольцо</p>
        <h3>Dolce & Gabanna</h3>
        <a href="">
        175 000 ₽
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 2138.327 2138.327"
          style="enable-background: new 0 0 2138.327 2138.327"
          xml:space="preserve">
          <path
          style="fill:"
          d="M1032.925,1852.654c0,98.076-79.506,177.583-177.583,177.583S677.76,1950.73,677.76,1852.654  c0-98.076,79.506-177.583,177.583-177.583S1032.925,1754.578,1032.925,1852.654z M1574.387,1675.072  c-98.076,0-177.583,79.507-177.583,177.583c0,98.076,79.507,177.583,177.583,177.583c98.076,0,177.583-79.507,177.583-177.583  C1751.969,1754.578,1672.463,1675.072,1574.387,1675.072z M2125.619,841.423l-218.512,649.464c0,0-18.088,96.383-110.247,96.383  s-993.407,0-1103.389,0s-114.604-120.809-114.604-120.809S461.624,596.637,455.814,544.088s-73.013-91.498-73.013-91.498  L93.651,317.522c-158.306-82.784-86.349-240.298,0-204.121c366.652,172.961,536.973,258.122,547.932,326.25  c11.091,68.26,30.367,232.64,30.367,232.64v1.056c2.245-0.66,3.829-1.056,3.829-1.056s1124.382,0,1351.477,0  C2190.447,672.291,2125.619,841.688,2125.619,841.423z M1809.535,1203.058l-2.245,0.132H737.57L759.619,1378h997.896  L1809.535,1203.058z M1913.708,850.534H693.339l23.502,186.825c234.092,0,919.601,0,1141.678,0L1913.708,850.534z"/>
        </svg>
        </a>
        </div>
  `);
  }
}
catalogMaker(6);

menuButton.click(() => {
  $(".burgerMenu").toggle();
  if (menuButton.hasClass("openBurgerMenu")) {
    menuButton.addClass("closeBurgerMenu");
    $(".firstPage h2").show();
  } else {
    menuButton.removeClass("closeBurgerMenu");
    $(".firstPage h2").hide();
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

// catalog

catalogMenuFirstRow.click(function () {
  let menuClass = "." + $(this).attr("class");
  $(menuClass + "Down").toggle("slow");
});

catalogMenuSecondRow.children().click(function () {
  let newText = $(this).text();
  let topBlock = $(this).parent().siblings().children().eq(0);
  if (newText === "-") {
    newText = topBlock.attr("data-name");
  }
  topBlock.html(newText);
  $(this).parent().hide("slow");
});

$(document).click(function (e) {
  if (
    !catalogMenuFirstRow.is(e.target) &&
    !catalogMenuFirstRow.children().is(e.target)
  ) {
    catalogMenuSecondRow.hide("slow");
  }
});

$(".firstPage h2").click(function () {
  catalogMaker(3);
  $(".firstPageRemove").css("display", "flex");
});

$(".firstPageRemove").click(function () {
  $(".firstPageRemove").hide();
  $(".firstPageCatalog").empty();
  catalogMaker(6);
});

$("#readMore").click(function () {
  $("#more").toggle('linear');
  if ($(this).text() === "читать полностью") {
    $(".secondPageBlock1 p").removeClass('halfBlur');
    $(this).text('скрыть');
  } else {
    $(".secondPageBlock1 p").addClass('halfBlur');
    $(this).text('читать полностью');
  }
});