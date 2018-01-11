function main() {
  const profileId = window.location.search.substring(1);
  const user = {
    _id: 'anonid',
    name: 'Anonymous',
    last_post: 'Anon was here',
  };
  renderUserData(user);
  renderNavbar(user);
}

function newDoge() {
  const doge = document.createElement("div");
  doge.className = "doge-font rainbow";
  doge.innerHTML = document.getElementById("doge-status").value;
  document.getElementById("doge-placement").appendChild(doge);
  //document.getElementById("doge-status").value = "";
}

button = document.getElementById("doge-btn");
button.addEventListener("click", newDoge);

function renderUserData(user) {
	// rendering name
	const nameContainer = document.getElementById('name-container');
	const nameHeader = document.createElement('h1');
	nameHeader.innerHTML = user.name;
	nameContainer.appendChild(nameHeader);

	// rendering profile image
	const profileImage = document.getElementById('profile-image2');
	profileImage.style = 'background-image:url(https://alagoasalerta.com.br/admin/wp-content/uploads/2018/01/BBI5GsO-420x236.jpg)';

	// rendering latest post
	const latestPostCard = document.getElementById('latest-post-card');

  const creatorSpan = document.createElement('a');
  creatorSpan.className = 'story-creator card-title';
  creatorSpan.innerHTML = user.name;
  creatorSpan.setAttribute('href', '/u/profile?'+user._id);
  latestPostCard.appendChild(creatorSpan);

	const latestPost = document.createElement('p');
	latestPost.className = 'story-content card-text';
  latestPost.innerHTML = user.last_post;
  latestPostCard.appendChild(latestPost);
}

main();
