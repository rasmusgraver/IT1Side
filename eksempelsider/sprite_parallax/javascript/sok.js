document.getElementById('searchForm').addEventListener('submit', function (event) {
  event.preventDefault(); 

  var searchTerm = document.getElementById('searchInput').value.toLowerCase(); 

  handleSearchTerm(searchTerm);
});

function handleSearchTerm(term) {
  switch (term) {
      case "spritesheet":
          window.location.href = "spritesheet-om.html";
          break;
      case "spritesheet bruksmåte":
          window.location.href = "spritesheet-bruksmate.html";
          break;
      case "spritesheet eksempler":
          window.location.href = "spritesheet-eksempler.html";
          break;
      case "parallax":
          window.location.href = "parallax-om.html";
          break;
      case "parallax bruksmåte":
          window.location.href = "parallax-bruksmate.html";
          break;
      case "parallax eksempler":
          window.location.href = "parallax-eksempler.html";
          break;
      case "hjem":
          window.location.href = "index.html";
          break;
      case "spill":
          window.location.href = "spill.html";
          break;
      default:
          console.log("Søket ga ingen treff.");
  }
}