/* Sets up event listeners for homepage buttons */

document.getElementById("HomeButtonGitea").addEventListener('click', async () => {
    alert("Gitea is not setup yet");
});

document.getElementById("HomeButtonPortfolio").addEventListener('click', async () => {
    window.location.href = 'portfolio/portfolio.html';
});

document.getElementById("HomeButtonGames").addEventListener('click', async () => {
    window.location.href = 'games/games.html';
});

document.getElementById("HomeButtonDocs").addEventListener('click', async () => {
    window.location.href = 'docs/docs.html';
});

document.getElementById("HomeButtonLogIn").addEventListener('click', async () => {

    if (sessionStorage.getItem("sessionID") === null) {
        window.location.href = 'login/login.html';
    } else {
        window.location.href = 'admin-page.html?page=admin.html&checklogin=1';
    }
});
