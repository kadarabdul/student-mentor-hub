document.addEventListener("DOMContentLoaded", function () {
    console.log("Mentor Student Hub loaded successfully!");

    // Welcome button
    window.showWelcome = function () {
        alert(
            "Welcome to Mentor Student Hub! 🎓\n\n" +
            "Connect with mentors, track academic progress, " +
            "and achieve your learning goals."
        );
    };

    // Connect with a mentor
    window.showMentors = function () {
        const mentorSection = document.getElementById("mentors");

        if (mentorSection) {
            mentorSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            alert(
                "Available Mentors:\n\n" +
                "1. Dr. Arun Kumar - Computer Science\n" +
                "2. Prof. Priya Sharma - Mathematics\n" +
                "3. Mr. Rahul Kumar - Web Development\n\n" +
                "Contact your administrator to confirm a mentor."
            );
        } else {
            alert("Mentor section is currently unavailable.");
        }
    };

    // Request a mentoring session
    window.bookSession = function () {
        const mentorName = prompt(
            "Enter the mentor name you want to meet:"
        );

        if (mentorName === null) {
            return;
        }

        if (mentorName.trim() === "") {
            alert("Please enter a mentor name.");
            return;
        }

        const sessionDate = prompt(
            "Enter your preferred session date (DD/MM/YYYY):"
        );

        if (sessionDate === null) {
            return;
        }

        if (sessionDate.trim() === "") {
            alert("Please enter a preferred session date.");
            return;
        }

        const confirmed = confirm(
            "Session Request Details\n\n" +
            "Mentor: " + mentorName.trim() + "\n" +
            "Preferred Date: " + sessionDate.trim() +
            "\n\nSubmit this request?"
        );

        if (confirmed) {
            alert(
                "Your session request has been prepared! ✅\n\n" +
                "Mentor: " + mentorName.trim() + "\n" +
                "Date: " + sessionDate.trim() + "\n\n" +
                "Note: This is a demo. The request has not been " +
                "saved to a database or sent to your mentor."
            );
        }
    };

    // Smooth scrolling for navigation links
    document.querySelectorAll('.navbar a[href^="#"]').forEach(
        function (link) {
            link.addEventListener("click", function (event) {
                const targetId = this.getAttribute("href");
                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            });
        }
    );

    // Animate academic progress bars
    const progressBars = document.querySelectorAll(".progress-bar");

    progressBars.forEach(function (bar) {
        const width = bar.style.width;

        bar.style.width = "0%";
        bar.style.transition = "width 1.2s ease-in-out";

        requestAnimationFrame(function () {
            bar.style.width = width;
        });
    });
});
