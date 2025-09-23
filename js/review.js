// To access the stars
let stars = document.getElementsByClassName("star");
let output = document.getElementById("output");
let rating = 0;

// Funtion to update rating
function gfg(n) {
  remove();
  rating = n * 2;
  for (let i = 0; i < n; i++) {
    if (n == 1) cls = "one";
    else if (n == 2) cls = "two";
    else if (n == 3) cls = "three";
    else if (n == 4) cls = "four";
    else if (n == 5) cls = "five";
    stars[i].className = "star " + cls;
  }
  output.innerText = "Rating is: " + n * 2 + "/10";
}

// To remove the pre-applied styling
function remove() {
  let i = 0;
  while (i < 5) {
    stars[i].className = "star";
    i++;
  }
}

function openModal() {
  document.getElementById("reviewModal").style.display = "block";
}

function closeModal() {
  document.getElementById("reviewModal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("reviewForm").addEventListener("submit", function (e) {
    e.preventDefault();
    if (rating === 0) {
      Swal.fire("Error!", "Silakan pilih rating.", "error");
    } else {
      Swal.fire({
        title: "Konfirmasi",
        text: "Apakah Anda yakin untuk mengirim ulasan ini?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, kirim!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Berhasil!", "Ulasan Anda telah berhasil ditambahkan.", "success");
          closeModal();
          document.getElementById("reviewForm").reset();
          remove();
          rating = 0;
          output.innerText = "Rating is: 0/10";
        }
      });
    }
  });
});
