const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

let socialPost = document.querySelector('.posts-list');

function creaPost(author,created,content,media,likes,id){

    const immagineProfilo = getImgProfilo(author);

    socialPost.innerHTML +=`
<div class="post">
<div class="post__header">
    <div class="post-meta">                    
        <div class="post-meta__icon">
            ${immagineProfilo}
        
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author">${author.name}</div>
            <div class="post-meta__time">${created}</div>
        </div>                    
    </div>
</div>
<div class="post__text">${content}</div>
<div class="post__image">
    <img src=${media} alt="">
</div>
<div class="post__footer">
    <div class="likes js-likes">
        <div class="likes__cta">
            <a class="like-button  js-like-button" href="#!" data-postid="1">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
            </a>
        </div>
        <div class="likes__counter">
            Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
        </div>
    </div> 
</div>            
</div>
`
}//funzione che crea il post social.

function getImgProfilo (author){
    if(author.image){
        return ` <img class="profile-pic" src=${author.image} alt=${author.name}>`
    }else{
        return `<div class="profile-pic-default"><span>??</span></div>`
    }
}//funzione che gestisce IMG PROFILO.

for(let i=0; i<posts.length; i++){
    creaPost(posts[i].author,posts[i].created,posts[i].content,posts[i].media,posts[i].likes,posts[i].id);
}//inietto i vari posts nel social con ciclo for.

let btnLike = document.querySelectorAll('.like-button');//recupero i buttoLike dei post.

for(let i=0; i<posts.length; i++){

    btnLike[i].addEventListener('click',function(){

        if(!this.classList.contains('like-button--liked')){
            
            //se NON è like
            this.classList.add('like-button--liked');
            x=i+1;
            document.getElementById('like-counter-' + x).innerHTML = ++posts[i].likes;

        }else{

            //se è GIA' like
            this.classList.remove('like-button--liked');
            x=i+1;
            document.getElementById('like-counter-' + x).innerHTML = --posts[i].likes;
        
        }
    })
} //ciclo for che gestisce evento click sul button like.









