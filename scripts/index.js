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

const editModal = document.querySelector("#edit-modal");
const profileEditBtn = document.querySelector(".profile__edit-button");
const profileNameElement = document.querySelector(".profile__name");
const profileJobElement = document.querySelector(".profile__desc");
const profileFormElement = document.querySelector("#profile-form");
const nameInput = profileFormElement.querySelector("#name");
const jobInput = profileFormElement.querySelector("#description");
const editModalCloseBtn = editModal.querySelector(".modal__close");

const cardEditModal = document.querySelector("#card-modal");
const cardEditBtn = document.querySelector(".profile__post-button");
const cardCloseBtn = cardEditModal.querySelector(".modal__close");
const cardForm = document.querySelector("#card-form");
const cardNameInput = cardForm.querySelector("#card-name");
const cardLinkInput = cardForm.querySelector("#card-link");
const cardTemplate = document.querySelector("#card__template");
const cardContainer = document.querySelector(".cards");
const popoutModal = document.querySelector("#popout-modal");
const popoutModalCloseBtn = popoutModal.querySelector(
  ".modal__close_type_preview"
);
const modalCaption = popoutModal.querySelector(".modal__caption");
const modalImage = popoutModal.querySelector(".modal__image");

function showModal(modal) {
  modal.classList.add("modal_opened");
}

function hideModal(modal) {
  modal.classList.remove("modal_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileNameElement.textContent = nameInput.value;
  profileJobElement.textContent = jobInput.value;

  hideModal(editModal);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const inputValues = { name: cardNameInput.value, link: cardLinkInput.value };
  const cardElement = getCardElement(inputValues);
  cardContainer.prepend(cardElement);

  hideModal(cardEditModal);
}

function getCardElement(data) {
  const cardElement = cardTemplate.content.cloneNode(true);
  const cardName = cardElement.querySelector(".card__name");
  const cardImage = cardElement.querySelector(".card__image");
  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  const cardDeleteBtn = cardElement.querySelector(".card__delete-btn");

  cardImage.src = data["link"];
  cardImage.alt = data["name"];
  cardName.textContent = data["name"];

  cardImage.addEventListener("click", () => {
    showModal(popoutModal);

    modalImage.src = data["link"];
    modalCaption.textContent = data["name"];
  });

  cardDeleteBtn.addEventListener("click", (evt) => {
    const card = evt.target.closest(".card");
    if (card) {
      card.remove();
    }
  });

  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("card__like-button_like");
  });

  return cardElement;
}

profileEditBtn.addEventListener("click", () => {
  nameInput.value = profileNameElement.textContent;
  jobInput.value = profileJobElement.textContent;
  showModal(editModal);
});

editModalCloseBtn.addEventListener("click", () => {
  hideModal(editModal);
});

cardEditBtn.addEventListener("click", () => {
  showModal(cardEditModal);
});

cardCloseBtn.addEventListener("click", () => {
  hideModal(cardEditModal);
});

profileFormElement.addEventListener("submit", handleProfileFormSubmit);
cardForm.addEventListener("submit", handleCardFormSubmit);

popoutModalCloseBtn.addEventListener("click", () => {
  hideModal(popoutModal);
});

initialCards.forEach(function (cardItem) {
  const cardElement = getCardElement(cardItem);
  cardContainer.append(cardElement);
});

// function handleCardFormSubmit(evt) {
//   evt.preventDefault();

//   cardForm.textContent = cardNameInput.value;
//   profileJobElement.textContent = cardLinkInput.value;

//   hideModal(editModal);
// }
