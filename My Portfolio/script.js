const msgForm = document.querySelector("#b2cnt");

if (msgForm) {
    msgForm.addEventListener("submit", function(e){
        e.preventDefault();
        const name = document.querySelector("#name").value.trim();
        const mail = document.querySelector("#mail").value.trim();
        const msg = document.querySelector("#msg").value.trim();
        const error = document.querySelector("#err");

        if(name == "" || mail == "" || msg == ""){
            error.classList.add("errormsg"); // FIXED (no dot)
            error.innerText = "All fields are required*";
            return;
        }
        if(!mail.includes("@")){
            error.classList.add("errormsg");
            error.innerText = "Invalid email !";
            return;
        }
        error.innerText = "Form Submitted Successfully ✅";
    });
}

const projects = document.querySelectorAll(".prj");

projects.forEach((project) => {
    project.addEventListener("click", () => {
    console.log("Project clicked:", project.querySelector("h3").innerText);
    });
});
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.getElementById("close");

if (modal && closeBtn) {
    projects.forEach((project) => {
        project.addEventListener("click", () => {
            const title = project.querySelector("h3").innerText;
            const desc = project.querySelectorAll("p")[0].innerText;

            modalTitle.innerText = title;
            modalDesc.innerText = desc;

            modal.style.display = "block";
        });
    });

    closeBtn.onclick = () => modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("menu-btn");
    const dropdown = document.getElementById("dropdown");

    if (btn && dropdown) {
        btn.addEventListener("click", () => {
            dropdown.style.display =
                dropdown.style.display === "block" ? "none" : "block";
        });
    }
});