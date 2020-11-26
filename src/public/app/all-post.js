
function loadPosts(){
    $.get ('/api/posts',(posts)=>{
        for (let p of posts )
        {
            $('#post-container').append(
                $(
                    `
                    <div class="card col-4" style="widows: 18rem;">
                     <div class="card-body">
                         <h5 class="card-title">${p.title}</h5>
                         <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
                         <p class="card-text">
                         ${p.body.substring(0,50)}
                         <a href="#" class="card-link">... readmore</a>
                         </p>
                         <a href="#" class="card-link">Comment</a>
                         <a href="#" class="card-link">like</a>
                     </div>
                    </div>
                  `
                )
            )
        }
    })
 }
 