document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const getCardButton = document.getElementById("getCard");
    const cardForm = document.querySelector(".cardForm form");
    const mainIDCard = document.querySelector(".mainIDCard");

    // Add event listener to the "Get Card" button
    getCardButton.addEventListener("click", function () {
        // Create the ID card
        createIDCard();
    });

    // Function to create the ID card
    function createIDCard() {
        // Get input values
        const studentName = getInputValue("studentName");
        const fatherName = getInputValue("fatherName");
        const className = getInputValue("className");
        const rollNo = getInputValue("rollNo");
        const contact = getInputValue("contact");
        const address = getInputValue("address");
        const imageFile = document.getElementById("image").files[0];

        // Create elements for ID card content
        const institueName = createElement("div", "institueName");
        institueName.innerHTML = "<p>University Of Peshawar</p>";

        const studentImage = createElement("div", "studentImage");
        const image = createElement("img");
        image.src = URL.createObjectURL(imageFile);
        image.alt = "student Image";
        studentImage.appendChild(image);

        const studentInfo = createElement("div", "studentInfo");
        studentInfo.innerHTML = `
            <p>${studentName}</p>
            <p>${fatherName}</p>
            <p>${className}</p>
            <p>${rollNo}</p>
            <p>${contact}</p>
            <p>${address}</p>
        `;

        // Append elements to main ID card container
        mainIDCard.innerHTML = "";
        mainIDCard.appendChild(institueName);
        mainIDCard.appendChild(studentImage);
        mainIDCard.appendChild(studentInfo);
    }

    // Function to get input value by ID
    function getInputValue(id) {
        return document.getElementById(id).value;
    }

    // Function to create element with class
    function createElement(elementType, className) {
        const element = document.createElement(elementType);
        element.classList.add(className);
        return element;
    }
});
