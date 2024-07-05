const searchParams = new URLSearchParams(window.location.search);
    const blogId = searchParams.get('blogID');

    async function getData() {
        fetch(`https://66840b3456e7503d1adf2353.mockapi.io/men_mental_health/blogs/${blogId}`, {
            method: 'GET',
            headers: {'content-type':'application/json'},
          })
          .then(data => {return data.json()})
          .then(blogs => {
    
               console.log("data", blog)
                      
                const container = document.getElementById("blogContainer")
                console.log("container", container)
                
                blog((blog, index) => {
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
    