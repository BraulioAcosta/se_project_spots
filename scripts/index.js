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
const profileNameElement = document.querySelector(".profile__name");
const profileJobElement = document.querySelector(".profile__desc");
const profileFormElement = document.querySelector(".modal__form");
const nameInput = profileFormElement.querySelector("#name");
const jobInput = profileFormElement.querySelector("#description");
let editModalCloseBtn = document.querySelector(".modal__close");
const cardTemplate = document.querySelector("#card__template");
let cardContainer = document.querySelector(".cards");

function showModal() {
  nameInput.value = profileNameElement.textContent;
  jobInput.value = profileJobElement.textContent;

  editModal.classList.add("modal--modal_opened");
}

function hideModal() {
  editModal.classList.remove("modal--modal_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileNameElement.textContent = nameInput.value;
  profileJobElement.textContent = jobInput.value;

  hideModal();
}

function getCardElement(data) {
  //object from array
  const cardElement = cardTemplate.content.cloneNode(true); // clone template element, store in cardElement - - tamplateelement.content.cloneNode(true)
  let cardName = cardElement.querySelector(".card__name");
  let cardImage = cardElement.querySelector(".card__image"); //select card image and store in variable

  cardImage.src = data["link"]; //set the image scr att to link field of object
  cardImage.alt = data["name"]; //set image alt to name field of object
  cardName.textContent = data["name"]; //set card title to name field of object

  return cardElement; //return the HTML element
}

profileEditBtn.addEventListener("click", showModal);
editModalCloseBtn.addEventListener("click", hideModal);
profileFormElement.addEventListener("submit", handleProfileFormSubmit);

for (let i = 0; i < initialCards.length; i++) {
  let card = getCardElement(initialCards[i]);

  cardContainer.append(card);
}
