//  #################### class time code #########################
//  ############################################################## 
// "use strict"  // well check error strickly we use it for debuging || The "use strict" directive enables JavaScript's strict mode. JavaScript's strict mode was introduced in ECMAScript 5. It enforces stricter parsing and error handling on the code at runtime. It also helps you write cleaner code and catch errors and bugs that might otherwise go unnoticed.


// Creating H1 and put content and attributes by JS
// let newElm = document.createElement('h1'); // create h1 in newElm
// newElm.setAttribute('id','helo'); // setting id = "helo"
// newElm.innerHTML = 'hello world' //
// document.body.appendChild(newElm)
// console.log(newElm);
// let image = document.createElement('img');
// image.setAttribute('src','images/pic.jpg');
// image.setAttribute('style','width : 500px; height : auto');
// document.body.appendChild(image)
// console.log(image);

//  #################### task time code #########################
//  ############################################################## 

let containerDiv = document.createElement('div');
    document.body.appendChild(containerDiv)
    containerDiv.classList.add('container');
    containerDiv.setAttribute('id','container')
for(let i = 0; i<30; i++){
    let infoDescriptionDiv = document.createElement('div');
    infoDescriptionDiv.classList.add('infoDescription')
    containerDiv.appendChild(infoDescriptionDiv)
    
    let DPImage = document.createElement('img');
    DPImage.src = "images/accountDP.jpeg"
    DPImage.classList.add('accountDP')
    infoDescriptionDiv.appendChild(DPImage)
    
    let nameOfAccount = document.createElement('h2');
    nameOfAccount.classList.add('accountName')
    nameOfAccount.innerHTML = "Muhammad Sahil"
    infoDescriptionDiv.appendChild(nameOfAccount)
    
    let postDiv = document.createElement('div');
    postDiv.classList.add("dataImage");
    containerDiv.appendChild(postDiv);
    
    let postDescriptionDiv = document.createElement('div');
    let descriptionText = document.createElement('p')
    descriptionText.innerHTML = "This post is done by Muhammad Sahil by using javaScript There is nothing included by HTML in this page. Everything here is come by javascript and styling are from the css style sheet."
    descriptionText.classList.add("description")
    let postImage = document.createElement("img");
    postImage.src = "images/pic.jpg"
    postDescriptionDiv.appendChild(descriptionText);
    postDiv.appendChild(postDescriptionDiv)
    postDiv.appendChild(postImage)
    
    let reactionDiv = document.createElement('div');
    reactionDiv.classList.add('feelings');
    containerDiv.appendChild(reactionDiv);
    let likeDiv = document.createElement('div');
    likeDiv.innerHTML = "Like";
    likeDiv.classList.add('like')
    reactionDiv.appendChild(likeDiv)
    let commentDiv = document.createElement('div');
    commentDiv.innerHTML = "comment";
    commentDiv.classList.add('comment')
    reactionDiv.appendChild(commentDiv)
    let shareDiv = document.createElement('div');
    shareDiv.innerHTML = "share";
    shareDiv.classList.add('share')
    reactionDiv.appendChild(shareDiv)

}    
