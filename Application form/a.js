

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 
    
    const name = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const position = document.getElementById("position").value;
    const resume = document.getElementById("file").value;
    const message = document.getElementById("message").value;


    const applicationData = {
      name,
      email,
      phone,
      position,
      resume,
      message
    };

    localStorage.setItem("JobApplication", JSON.stringify(applicationData));

    console.log("Form submitted successfully:");
    console.log(applicationData);

    document.querySelector(".container").innerHTML = `
      <h2>Thank You!</h2>
      <p>Your application has been submitted successfully.</p>
    `;
  });
});

