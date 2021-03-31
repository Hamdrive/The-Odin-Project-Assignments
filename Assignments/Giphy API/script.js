let img = document.querySelector("img");

// fetch(
//   "https://api.giphy.com/v1/gifs/translate?api_key=o6TrRlu0XXORwd6tLPE2wEPqNAHFCBhT&s=cats",
//   { mode: "cors" }
// )
//   .then((response) => response.json())
//   .then((response) => {img.src = response.data.images.original.url;});

const getCats = async () => {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=o6TrRlu0XXORwd6tLPE2wEPqNAHFCBhT&s=random",
      { mode: "cors" }
    );
    const catGIF = await(response.json());
    img.src = catGIF.data.images.original.url;
}

getCats()
    