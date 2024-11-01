document
  .getElementById("resumeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Capture form data
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let hobbies = document.getElementById("hobbies").value;
    let skills = document.getElementById("skills").value;

    let education = document.getElementById("education").value;

    // Display the resume
    document.getElementById("resumeName").innerText = name;
    document.getElementById("resumeAddress").innerText = address;
    document.getElementById("resumeMobile").innerText = mobile;
    document.getElementById("resumeEmail").innerText = email;
    document.getElementById("resumeHobbies").innerText = hobbies;
    document.getElementById("resumeSkills").innerText = skills;
    // document.getElementById('resumePhoto').src = photo;

    document.getElementById("resumeEducation").innerText = education;

    // Show the resume section
    // document.getElementById('resume').style.display = 'flex';
    var element = document.getElementById("resume");
    element.classList.toggle("resume");
    document.getElementById("resumeForm").style.display = "none";
    document.getElementById("resumeHeading").style.display = "none";
  });

let button = document.getElementById("hideButton");
// download the resume as a PDF
function downloadResume() {
  button.style.display = "none";
  window.print();
}

let photo = document.getElementById("photo");
let profilePic = document.getElementById("resumePhoto");
let upload = document.getElementsByClassName("photo");
let labelPhoto = document.getElementById("labelPhoto");

// uploading photo code
photo.onchange = () => {
  labelPhoto.innerText = "✅ Photo Uploaded Successfully";
  upload[0].classList.add("photoUploaded");
  profilePic.src = URL.createObjectURL(photo.files[0]);
};
