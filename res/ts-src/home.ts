/* Captures the subpage buttons */

const giteaButton       = document.getElementById("HomeButtonGitea");
const portfolioButton   = document.getElementById("HomeButtonPortfolio");
const gamesButton       = document.getElementById("HomeButtonGames");
const docsButton        = document.getElementById("HomeButtonDocs");
const loginButton       = document.getElementById("HomeButtonLogin");

/* Adds event listeners (if they are not null) */

if (giteaButton instanceof HTMLButtonElement) {
    giteaButton.addEventListener('click', async () => {
        alert("Gitea is not setup yet");
    });
} else {
    alert("Could not find Gitea button");
}

if (portfolioButton instanceof HTMLButtonElement) {
    portfolioButton.addEventListener('click', async () => {
        window.location.href = "subpages/portfolio.html";
    });
} else {
    alert("Could not find portfolio button");
}

if (gamesButton instanceof HTMLButtonElement) {
    gamesButton.addEventListener('click', async () => {
        window.location.href = "subpages/games.html";
    });
} else {
    alert("Could not find games button");
}

if (docsButton instanceof HTMLButtonElement) {
    docsButton.addEventListener('click', async () => {
        window.location.href = "subpages/docs.html";
    });
} else {
    alert("Could not find docs button");
}

if (loginButton instanceof HTMLButtonElement) {
    loginButton.addEventListener('click', async () => {
        if (sessionStorage.getItem("sessionID") == null) {
            window.location.href = "subpages/login.html";
        } else {
            window.location.href = "subpages/admin-page.html?page=admin.html&checklogin=1";
        }
    });
} else {
    alert("Could not find login button");
}
