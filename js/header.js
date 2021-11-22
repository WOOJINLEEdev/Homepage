window.addEventListener("DOMContentLoaded", function () {
  const $gnbMenu = document.querySelector(".gnb_menu");
  const $searchLink = document.querySelector(".search_link");
  const $searchInput = document.querySelector(".search_input");

  let $backBtn = document.querySelector(".search_back");
  let $menu = document.querySelector(".header_nav");
  let $search = document.querySelector(".search");

  $gnbMenu.addEventListener("click", (e) => {
    handleGnbMenu($gnbMenu);
    openCloseMenu($menu);
  });

  $searchLink.addEventListener("click", (e) => {
    openSearch($search, $searchLink, $searchInput);
  });

  $backBtn.addEventListener("click", (e) => {
    closeSearch($search, $searchLink);
  });
});

function handleGnbMenu($menu) {
  if ($menu.classList.contains("active")) {
    $menu.classList.remove("active");
  } else {
    $menu.classList.add("active");
  }
}

function openCloseMenu($menu) {
  if ($menu.classList.contains("hide")) {
    $menu.classList.remove("hide");
  } else {
    $menu.classList.add("hide");
  }
}

function openSearch($search, $searchLink, $searchInput) {
  $search.classList.remove("hide");
  $searchLink.classList.add("hidden");
  $searchInput.focus();
}

function closeSearch($search, $searchLink) {
  $search.classList.add("hide");
  $searchLink.classList.remove("hidden");
}
