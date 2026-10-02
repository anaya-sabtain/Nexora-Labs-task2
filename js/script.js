document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       PASSWORD SHOW / HIDE
    =============================== */

    const passwordToggles =
        document.querySelectorAll(".password-toggle");

    passwordToggles.forEach((button) => {

        button.addEventListener("click", () => {

            const input =
                button.parentElement.querySelector("input");

            const icon =
                button.querySelector("i");

            if (!input) return;

            if (input.type === "password") {

                input.type = "text";

                icon.classList.remove("bi-eye");
                icon.classList.add("bi-eye-slash");

            } else {

                input.type = "password";

                icon.classList.remove("bi-eye-slash");
                icon.classList.add("bi-eye");

            }

        });

    });



    /* ===============================
       LOGIN
    =============================== */

    const loginForm =
        document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const email =
                document.getElementById("email");

            const password =
                document.getElementById("password");


            if (
                email.value.trim() === "" ||
                password.value.trim() === ""
            ) {

                alert(
                    "Please fill in all required fields."
                );

                return;
            }


            if (!email.value.includes("@")) {

                alert(
                    "Please enter a valid email address."
                );

                return;
            }


            if (password.value.length < 6) {

                alert(
                    "Password must contain at least 6 characters."
                );

                return;
            }


            window.location.href =
                "dashboard.html";

        });

    }



    /* ===============================
       SIGNUP
    =============================== */

    const signupForm =
        document.getElementById("signupForm");

    if (signupForm) {

        signupForm.addEventListener("submit", (event) => {

            event.preventDefault();


            const fullName =
                document.getElementById("fullName");

            const email =
                document.getElementById("signupEmail");

            const password =
                document.getElementById("signupPassword");

            const confirmPassword =
                document.getElementById("confirmPassword");

            const terms =
                document.querySelector(
                    ".terms-label input"
                );


            if (
                fullName.value.trim() === "" ||
                email.value.trim() === "" ||
                password.value.trim() === "" ||
                confirmPassword.value.trim() === ""
            ) {

                alert(
                    "Please fill in all required fields."
                );

                return;
            }


            if (!email.value.includes("@")) {

                alert(
                    "Please enter a valid email address."
                );

                return;
            }


            if (password.value.length < 6) {

                alert(
                    "Password must contain at least 6 characters."
                );

                return;
            }


            if (
                password.value !==
                confirmPassword.value
            ) {

                alert(
                    "Passwords do not match."
                );

                return;
            }


            if (!terms.checked) {

                alert(
                    "Please accept the Terms & Conditions."
                );

                return;
            }


            window.location.href =
                "dashboard.html";

        });

    }



    /* ===============================
       MOBILE SIDEBAR
    =============================== */

    const mobileMenuButton =
        document.querySelector(
            ".mobile-menu-btn"
        );

    const sidebar =
        document.querySelector(
            ".dashboard-sidebar"
        );


    if (
        mobileMenuButton &&
        sidebar
    ) {

        mobileMenuButton.addEventListener(
            "click",
            () => {

                sidebar.classList.toggle(
                    "mobile-sidebar-open"
                );

            }
        );

    }

});