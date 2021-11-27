window.addEventListener("DOMContentLoaded", function () {
  let $moreBtn = document.querySelector(".more_btn");

  $moreBtn.addEventListener("click", (e) => {
    console.log("더보기 버튼 클릭");
    $moreBtn.innerText = "더보기 (2 / 2)";
    handleMoreBtn(firstListGroup);
    $moreBtn.disabled = true;
  });
});

const firstListGroup = document.querySelector(".section_list_group");
for (let i = 1; i <= 6; i++) {
  firstListGroup.innerHTML += `<li class="list">
          <div class="list_element">
              <a href="#" class="image_link">
                  <div class="image_wrap">
                    <img src="img/empty_image.png" class="list_image" alt="">
                  </div>
                  <p class="image_text first">이미지 리스트 ${i}</p>
              </a>
              <a href="#" class="image_dim"></a>
          </div>
      </li>`;
}

function handleMoreBtn(listgroup) {
  let moreListGroup = "";

  for (let i = 7; i <= 12; i++) {
    moreListGroup += `<li class="list">
        <div class="list_element">
            <a href="#" class="image_link">
                <div class="image_wrap">
                  <img src="img/empty_image.png" class="list_image" alt="">
                </div>
                <p class="image_text first">이미지 리스트 ${i}</p>
            </a>
            <a href="#" class="image_dim"></a>
        </div>
    </li>`;
  }

  return listgroup.insertAdjacentHTML("beforeend", moreListGroup);
}
