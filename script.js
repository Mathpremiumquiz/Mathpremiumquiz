document.getElementById("downloadBtn").addEventListener("click", function () {
    // Create a link element
    const link = document.createElement("a");
    
    // Set the link's attributes
    link.href = "FREE.pdf"; // Path to the PDF file
    link.download = "FREE.pdf"; // Suggested filename for the downloaded file
    
    // Trigger the download
    link.click();
});