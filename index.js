let htmlProduct = "";
async function getData() {
    fetch('https://66840b3456e7503d1adf2353.mockapi.io/men_mental_health/blogs', {
        method: 'GET',
        headers: {'content-type':'application/json'},
      })
      .then(data => {return data.json()})
      .then(blogs => {

           console.log("data", blogs)
                  
            const container = document.getElementById("blogContainer")
            console.log("container", container)
            
            blogs.forEach((blog, index) => {
                console.log("blog data title: ", blog.title, " blog content: ", blog.content)
      
                const blogCard = document.createElement('div')
      
                blogCard.className = "blog-card"
      
                blogCard.innerHTML = `
                <div class="card">
                    <h5>Blog ${index+1}</h5>
                    <img src="${blog.img}" width="400" height="265">
                    <p><b>TITLE: ${blog.title}</b></p>
                    <div class="">
                        <div class="card-text">CONTENT: ${blog.content}</p>
                    </div>
                    <button onclick="window.location.href='detail.html?blogID=${blog.id}'">Learn more</button>
                </div>`
      
                container.appendChild(blogCard);
            })
       })
       .catch(error => {
        // handle error
      })
}
getData()
function contact() {
    window.location.href= "login.html";
}



// const apiDataMusicURL = "https://66840b3456e7503d1adf2353.mockapi.io/men_mental_health/blogs"

// const headers = {
//     'x-rapidapi-key': "7cd104ad20msh28b6680a418ada0p183699jsnf3c804eed11b",
//     'x-rapidapi-host': "spotify23.p.rapidapi.com"
// }
// const getData = async () => {
//     try {
//         await axios({
//             method: 'get',
//             headers: headers,
//             url: apiDataMusicURL
//           })
//         .then(function (response) {
//             const albumsDataArray = response.data.albums.items
            
//             const container = document.getElementById("albumsContainer")
//             albumsDataArray.forEach((album) => {

//                 const data = album.data


//                 const albumCard = document.createElement('div')

//                 albumCard.className = "blog-card"

//                 albumCard.innerHTML = `
//                 <div class="card">
//                     <a href="https://open.spotify.com/album/${data.uri.split(':')[2]}" class="card-img-top album-cover"><img src=${data.coverArt.sources[0].url} style="width: 158px; padding: 10px 10px 0 10px;"></a>
//                     <div class="card-body">
//                         <div class="card-text">${data.artists.items[0].profile.name}</p>
//                     </div>
//                 </div>`

//                 container.appendChild(albumCard);
//             })
            
//         });
//     }catch(errors) {
//         console.log(errors);
//     }
// }

    function contact() {
      window.location.href= "login.html";
  }
  


