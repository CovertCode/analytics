var Links = document.getElementsByTagName("a");

Links.forEach((link) => {
  link.addEventListener("click", (data) => {
    console.log(data.target.href);
    NextLink = data.target.href;
  });
});