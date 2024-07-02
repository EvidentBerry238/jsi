const apiDataMusicURL = "https://spotify23.p.rapidapi.com/search?type=albums&offset=0&limit=20&numberOfTopResults=5&q=pop"

const headers = {
    'x-rapidapi-key': "4d952e47a3msh292a1e13b2877f5p1fad39jsne22fa14e7c20",
    'x-rapidapi-host': "spotify23.p.rapidapi.com"
}
const getData = async () => {
    try {
        await axios({
            method: 'get',
            headers: headers,
            url: apiDataMusicURL
          })
        .then(function (response) {
            const albumsDataArray = response.data.albums.items
            
            const container = document.getElementById("albumsContainer")
            albumsDataArray.forEach((album, index) => {

                const data = album.data


                const albumCard = document.createElement('div')

                albumCard.className = `col-md-2 album-card album-${index}`

                albumCard.innerHTML = `
                <div class="card">
                    <a href="https://open.spotify.com/album/${data.uri.split(':')[2]}" class="card-img-top album-cover"><img src=${data.coverArt.sources[0].url} style="width: 158px; padding: 10px 10px 0 10px;"></a>
                    <div class="card-body">
                        <div class="card-text">${data.artists.items[0].profile.name}</p>
                    </div>
                </div>`

                container.appendChild(albumCard);
            })
            
        });
    }catch(errors) {
        console.log(errors);
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    getData()
  });

// Search albums
function searchByName(search) {
    if (search != '') {
        const container = document.querySelector("#albumsContainer")
        const itemsAlbum = container.querySelectorAll(".album-card") 

        itemsAlbum.forEach(element => {
            element.style.display = 'none';
        });

        movieDataArray.forEach((album, index) => {
            if (album.data.artists.items[0].profile.name.includes(search)) {
                const a = document.querySelector(`.album-${index}`).style.display = 'block'
            }
        })
    }
    else {
        const container = document.querySelector("#albumsContainer")
        const itemsAlbum = container.querySelectorAll(".album-card")
        itemsAlbum.forEach(element => {
            element.style.display = 'block';
        });
    }
    
}

document.getElementById("input-search-albums").addEventListener("input", function(e) {
  e.preventDefault()
  let inputSearch = document.getElementById("input-search-albums").value.trim()
  searchByName(inputSearch)
})