document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector(".submit");
    const assignmentForm = document.getElementById("assignmentForm");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        const fileInput = document.getElementById("fileInput");
        const selectedFile = fileInput.files[0];

        if (selectedFile) {
            const formData = new FormData();
            formData.append("assignmentFile", selectedFile);

            // Simulate file upload and show success message
            setTimeout(() => {
                alert("Assignment submitted with file: " + selectedFile.name);
                assignmentForm.reset();
            }, 1000);
        } else {
            alert("Please select a file to upload.");
        }
    });
});
