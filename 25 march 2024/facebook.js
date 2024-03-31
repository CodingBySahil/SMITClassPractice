let mainContainer = document.querySelector(".container");
let takeDescription;
// Get references to the input file element and the image element
const imageInput = document.getElementById("post_image");
const selectedImage = document.getElementsByClassName("post_image");
let imageURL;
// let postImg;
// let flag = false;

document.querySelector("#new_post_div").addEventListener("click", () => {
  console.log("arrow function");
  document.querySelector("#new_post_form").style.display = "block";
//   takeDescription = document.querySelector("#post_description").value;
//   console.log("taking", takeDescription);
});
document.querySelector("#post_description").addEventListener("change", () => {
  takeDescription = document.querySelector("#post_description").value;
  console.log(takeDescription);
});

// // Listen for changes in the input file element
// imageInput.addEventListener("change", function (event) {
//   // Check if files are selected
//   if (event.target.files && event.target.files[0]) {
//     // Get the selected file
//     const selectedFile = event.target.files[0];

//     // Create a URL for the selected image
//     const imageURL = URL.createObjectURL(selectedFile);

//     // Set the source of the image element to the URL
//     postImg.src = imageURL;
//     console.log(imageURL);
//   }
// });

document.querySelector("#post_btn").addEventListener("click", () => {
  //   if (postImg.src && takeDescription) {
  //   }
//   flag = true;
//   setTimeout(() => {
//     flag = false;
//   }, 1000);
  post();
//   alert("post done");
});

function post() {
//   if (flag) {
    // new post container
    let newPostContainerDiv = document.createElement("div");
    newPostContainerDiv.classList.add("post_container");
    mainContainer.appendChild(newPostContainerDiv); // append new post container in main container

    // user profile with every post
    let userProfile = document.createElement("div");
    userProfile.classList.add("user_profile");

    // profile image
    let profileImg = document.createElement("img");
    profileImg.setAttribute("class", "profile_img");
    profileImg.src = "images/post_img_1.jpg";
    profileImg.setAttribute("alt", "profile_img");
    userProfile.appendChild(profileImg); // append profile image in user profile div

    // profile name div
    let profileNameAndTimeDiv = document.createElement("div");
    let profileNameH5 = document.createElement("h5");
    profileNameH5.classList.add("profile_name");
    profileNameH5.innerHTML = "Muhammad Sahil";
    let postTimeP = document.createElement("p");
    postTimeP.classList.add("post_time");
    postTimeP.innerHTML = "Sunday 1hr";
    profileNameAndTimeDiv.appendChild(profileNameH5); //append profile name
    profileNameAndTimeDiv.appendChild(postTimeP); // append post timing
    userProfile.appendChild(profileNameAndTimeDiv); // append name and time in user profile div
    newPostContainerDiv.appendChild(userProfile); // append user profile div in new post container div

    // post contents div description post and action (like, comment, share)
    let postContentsDiv = document.createElement("div"); // post contents div created
    postContentsDiv.classList.add("post_contents");
    mainContainer.appendChild(postContentsDiv); // post contents div append in main container
    // post description
    let descriptionP = document.createElement("p"); // post description p
    descriptionP.innerHTML = takeDescription;
    console.log("desc", takeDescription);
    //   "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, optio? Dolores praesentium ex aliquid officia sint, sapiente tempore corporis deserunt accusamus cum quo sequi amet voluptatum pariatur nam tenetur voluptates aspernatur minus architecto beatae nisi debitis est totam perspiciatis? Quasi iusto ex non, consequatur soluta expedita hic sapiente cum unde?"; // description
    postContentsDiv.appendChild(descriptionP); // description append in postContentDiv
    // post image
    let postImg = document.createElement("img");
    postImg.setAttribute("class", "post_image");

    // Listen for changes in the input file element
    imageInput.addEventListener("change", function (event) {
      // Check if files are selected
      if (event.target.files && event.target.files[0]) {
        // Get the selected file
        console.log('con true')
        const selectedFile = event.target.files[0];

        // Create a URL for the selected image
        const imageURL = URL.createObjectURL(selectedFile);

        // Set the source of the image element to the URL
        postImg.src = imageURL;
        console.log(imageURL);
      }else{
        console.log('cond fale')
      }
    });

    //   postImg.src = "images/post_img_1.jpg";
    //   postImg.src = imageURL;
    postImg.setAttribute("alt", "post image");
    postContentsDiv.appendChild(postImg); // append profile image in user profile div
    // post actions
    let postActionDiv = document.createElement("div");
    postContentsDiv.appendChild(postActionDiv);
    postActionDiv.classList.add("actions");
    // like action div
    let likeDiv = document.createElement("div");
    postActionDiv.appendChild(likeDiv);
    likeDiv.innerHTML =
      '<div class="like"><i class="fa fa-thumbs-up" aria-hidden="true"></i> Like</div>';
    // comment action div
    let commentDiv = document.createElement("div");
    postActionDiv.appendChild(commentDiv);
    commentDiv.innerHTML =
      '<div class="comment"> <i class="fa-solid fa-comment"></i> comment</div>';
    // share action div
    let shareDiv = document.createElement("div");
    postActionDiv.appendChild(shareDiv);
    shareDiv.innerHTML =
      '<div class="share"><i class="fa-solid fa-share"></i> share</div>';
    // line
    let hr = document.createElement("hr");
    mainContainer.appendChild(hr);
    document.querySelector("#post_description").value = ''
    document.querySelector("#new_post_form").style.display = "none";
//   }
}

// document.addEventListener('DOMContentLoaded', function(){

// })
