let mainContainer = document.querySelector(".container");
let takeDescription = 'posted';
// Get references to the input file element and the image element
const imageInput = document.getElementById("post_image");
const selectedImage = document.getElementsByClassName("post_image");
let imageURL;
let storeImgURLTemprary;

// event listner when user click on what on your mind and form appear to take input
document.querySelector("#new_post_div").addEventListener("click", () => {
  document.querySelector("#new_post_form").style.display = "block";
});

// event listner for when user change description so it take description from the form
document.querySelector("#post_description").addEventListener("change", () => {
  takeDescription = document.querySelector("#post_description").value;
});

// event listner when user click on post button and create post
document.querySelector("#post_btn").addEventListener("click", () => {
  post(storeImgURLTemprary);
});

// function for creating post
let post = (storeImgURLTemprary) => {
  // create a new post container for new post
  let newPostContainerDiv = document.createElement("div");
  newPostContainerDiv.classList.add("post_container"); // class added
  mainContainer.appendChild(newPostContainerDiv); // append new post container in main container

  // user profile with every post
  let userProfile = document.createElement("div");
  userProfile.classList.add("user_profile");

  // profile image
  let profileImg = document.createElement("img");
  profileImg.setAttribute("class", "profile_img");
  profileImg.src = "images/dp3.jpg"; // profile image src
  profileImg.setAttribute("alt", "profile_img");
  userProfile.appendChild(profileImg); // append profile image in user profile div

  // profile name div
  let profileNameAndTimeDiv = document.createElement("div"); // div for name and date and time with every post
  let profileNameH5 = document.createElement("h5"); // profile name
  profileNameH5.classList.add("profile_name"); // profile class added
  profileNameH5.innerHTML = "Muhammad Sahil"; // ser profile name here
  let postTimeP = document.createElement("p"); // p tag for post time
  postTimeP.classList.add("post_time");
  let postTime = new Date(); // taking the current date
  postTimeP.innerHTML = `Date:${postTime.getDate()}/${postTime.getMonth()} Time:${postTime.getHours()}:${postTime.getMinutes()}`; // setting the current date and time
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
  takeDescription = ''

  postContentsDiv.appendChild(descriptionP); // description append in postContentDiv
  // post image
  let postImg = document.createElement("img");
  postImg.setAttribute("class", "post_image");

  postImg.src = storeImgURLTemprary; // this the argument come from post function and is assigned

  postImg.setAttribute("alt", "post image");
  postContentsDiv.appendChild(postImg); // append profile image in user profile div

  // post actions div for like comment and share
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
  document.querySelector("#post_description").value = "";
  document.querySelector("#new_post_form").style.display = "none";
  //   }
};
// Listen for changes in the input file element
imageInput.addEventListener("change", function (event) {
  // Check if files are selected
  if (event.target.files && event.target.files[0]) {
    // Get the selected file

    const selectedFile = event.target.files[0];

    // Create a URL for the selected image
    const imageURL = URL.createObjectURL(selectedFile);

    // Set the source of the image element to the URL
    store(imageURL);
  }
});

function store(imageURL) {
  storeImgURLTemprary = imageURL;
}
