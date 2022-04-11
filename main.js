// Modal window
const signUpBtn = document.querySelector(".signup");
const loginBtn = document.querySelector(".login");
const modalWindow = document.querySelector(".modal");
const signUpModal = document.querySelector(".signup-modal");
const loginModal = document.querySelector(".login-modal");

//Открываем модалку signup
signUpBtn.addEventListener("click", ()=>{
  modalWindow.classList.add("modal_active");
  signUpModal.classList.add("modal__signup_active");
  document.body.style.overflow = "hidden"; //Запрещаем скролить страницу пока открыто модальное окно
}
)


//Открываем модалку login
loginBtn.addEventListener("click", ()=>{
  modalWindow.classList.add("modal_active");
  loginModal.classList.add("modal__login_active");
  document.body.style.overflow = "hidden"; //Запрещаем скролить страницу пока открыто модальное окно
}
)


// Если кликнули по пустому месту - закрыть модалку
modalWindow.addEventListener("click", (e)=>{
  if(e.target.classList.contains("modal")){
    modalWindow.classList.remove("modal_active");
    signUpModal.classList.remove("modal__signup_active");
    loginModal.classList.remove("modal__login_active");
    document.body.style.overflowY = "scroll"; // Возвращаем возможность скролла
  }
  
})

// --------------------------------- Табы

const tabLinkList = document.querySelectorAll(".nav-tabs__item"); 
const tabPaneList = document.querySelectorAll(".tab-pane");

for (const tab of tabLinkList) {
  tab.addEventListener("click", (e)=>{
    e.preventDefault(); //Убираем поведение по дефолту
    const currentTab = e.target.dataset.tab; // достаем текущее значение атрибута tab
    for (let i = 0; i< tabPaneList.length; i++) {
      if(currentTab === tabPaneList[i].dataset.tabContent){ // если значение атрибута tab и значение tabContent равны то творим магию
        tabPaneList[i].classList.add("tab-pane_active"); // добавляем другие стили для ссылки 
        tabLinkList[i].classList.add("nav-tabs__item_active"); // показываем нужную вкладку
      }
      else{
        tabPaneList[i].classList.remove("tab-pane_active"); 
        tabLinkList[i].classList.remove("nav-tabs__item_active");
      }
    }
    
  })
}