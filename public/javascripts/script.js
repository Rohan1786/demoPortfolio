// Select all elements with class "skilling" and tag "h1"
const h1Elements = document.querySelectorAll(".skilling h1");

// Iterate over each h1 element
h1Elements.forEach(h1Element => {
    // Add mousemove event listener to each h1 element
    h1Element.addEventListener("click", () => {
        // Create a new h5 element
        console.log("is it working")
        const h5Element = document.createElement("h5");
        // Add some message to the h5 element
        h5Element.textContent = "Your message here";

        // Append the h5 element to the parent of the h1 element
        h1Element.parentNode.appendChild(h5Element);
    });
});
