const copyDcName = document.querySelector(".disc_animation");

copyDcName.addEventListener("click", () => {
  const text = document.querySelector(".discordName").innerText;
  navigator.clipboard.writeText(text).then(() => {
    const msg = document.getElementById("copied");
    msg.classList.add("show");
    setTimeout(() => msg.classList.remove("show"), 1500);
  });
});
