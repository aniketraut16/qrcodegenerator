function isValidURL(url) {
  const urlPattern =
    /^(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:[a-zA-Z0-9.-]+)(?::\d{1,5})?(?:\/\S*)?(?:\?(?:[a-zA-Z0-9-._~%]+=(?:[a-zA-Z0-9-._~%]+)?(?:&[a-zA-Z0-9-._~%]+=(?:[a-zA-Z0-9-._~%]+)?)*)?)?(?:#[a-zA-Z0-9-._~%!$&'()*+,;=:@-]*)?(?:\.(?:com|net|edu)|\.\S+)$/;
  return urlPattern.test(url);
}
const url = document.getElementById("imgurl");
const submitbtn = document.getElementById("submitbtn");
const imgdiv = document.querySelector(".imgdiv");
const styletag = document.querySelector("style");
const modalbox = document.querySelector(".modal");
const modalbutton = document.querySelector(".btn-close");
const reloadbtn = document.querySelector("#reload");
reloadbtn.addEventListener("click", () => {
  location.reload();
});
submitbtn.addEventListener("click", () => {
  console.log(url.value);
  if (url.value === "" || !isValidURL(url.value)) {
    modalbox.style.display = "block";
    modalbutton.addEventListener("click", () => {
      modalbox.style.display = "none";
    });
  } else {
    console.log(url);
    imgdiv.style.display = "flex";
    imgdiv.classList.add("qrdis");
    const spinnerelement = `<span id="spinner"><div class="spinner-border" role="status" id="spinner">
    <span class="visually-hidden">Loading...</span>
  </div> </span>`;
    imgdiv.insertAdjacentHTML("beforeend", spinnerelement);

    const imgtag = ` <p>QR Code Generated for ${url.value}</p>
    <img src="https://api.qrserver.com/v1/create-qr-code/?data=${url.value}&amp;size=150x150" alt="" title="" />"
    `;
    imgdiv.insertAdjacentHTML("beforeend", imgtag);
    const imgElement = imgdiv.querySelector("img");
    imgElement.onload = function () {
      const spindisplay = ` #spinner{
          display:none !important;
      }`;
      styletag.insertAdjacentHTML("beforeend", spindisplay);
      reloadbtn.style.display = "block";
    };
  }
});