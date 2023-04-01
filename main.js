import { Octokit } from "https://cdn.skypack.dev/octokit";

const octokit = new Octokit({
  auth: "YOUR_KEY",
});

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const users = await octokit.rest.users.list();
    const usersContainer = document.getElementById("users-container");
    const organizationsContainer = document.getElementById(
      "organizations-container"
    );

    usersContainer.innerHTML = "";
    organizationsContainer.innerHTML = "";

    for (const user of users.data) {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");

      const avatar = document.createElement("img");
      avatar.src = user.avatar_url;
      userDiv.appendChild(avatar);

      const name = document.createElement("div");
      name.textContent = user.name;
      userDiv.appendChild(name);

      const nickname = document.createElement("div");
      nickname.textContent = user.login;
      userDiv.appendChild(nickname);

      const reposCount = document.createElement("div");
      reposCount.textContent = `Repos: ${user.public_repos}`;
      userDiv.appendChild(reposCount);

      const followersCount = document.createElement("div");
      followersCount.textContent = `Followers: ${user.followers}`;
      userDiv.appendChild(followersCount);

      usersContainer.appendChild(userDiv);

      const orgs = await octokit.rest.users.listOrgsForUser({
        username: user.login,
      });

      for (const org of orgs.data) {
        const orgImg = document.createElement("img");
        orgImg.src = org.avatar_url;
        organizationsContainer.appendChild(orgImg);
      }
    }
  } catch (error) {
    console.error(error);
  }
});
