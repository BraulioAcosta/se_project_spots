const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

console.log(initialCards);

let editModal = document.querySelector("#edit-modal");
let content = document.querySelector(".content");
let profileEditBtn = content.querySelector(".profile__edit-button");
let editModalCloseBtn = document.querySelector(".modal__close");

function toggleModal() {
  editModal.classList.toggle("modal--modal_opened");
}

function showModal() {
  editModal.classList.add("modal--modal_opened");
}

function hideModal() {
  editModal.classList.remove("modal--modal_opened");
}

// toggleModal(editModal);

// profileEditBtn.addEventListener("click", toggleModal);
// editModalCloseBtn.addEventListener("click", toggleModal);

profileEditBtn.addEventListener("click", showModal);
editModalCloseBtn.addEventListener("click", hideModal);
