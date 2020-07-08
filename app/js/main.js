
//раскрывающееся меню
var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--no-js");

navToggle.addEventListener("click", function(){
	if(navMain.classList.contains("main-nav--closed")){
		navMain.classList.remove("main-nav--closed");
		navMain.classList.add("main-nav--opened");
	} else{
		navMain.classList.add("main-nav--closed");
		navMain.classList.remove("main-nav--opened")
	}
});


//подробнее - открыть модалку
var modal = document.querySelector(".modal")
var buttonRoom = document.querySelector(".space__button--room");
var buttonHouse = document.querySelector(".space__button--house");
var buttonOffice = document.querySelector(".space__button--office");
var roomPopup = document.querySelector(".services__modal--room");
var housePopup = document.querySelector(".services__modal--house");
var officePopup = document.querySelector(".services__modal--office");
var servicesList = document.querySelector(".services__list");
var toggles = document.querySelector(".toggles")

buttonRoom.addEventListener("click", function(){
	roomPopup.classList.remove("not-show");
	modal.classList.remove("not-show")

	servicesList.classList.add("not-show")
	toggles.classList.add("not-show")
})
buttonHouse.addEventListener("click", function(){
	housePopup.classList.remove("not-show");
	modal.classList.remove("not-show");

	servicesList.classList.add("not-show");
	toggles.classList.add("not-show");
})
buttonOffice.addEventListener("click", function(){
	officePopup.classList.remove("not-show");
	modal.classList.remove("not-show");

	servicesList.classList.add("not-show")
	toggles.classList.add("not-show")
})

//закрыть модалку
var buttonModalRoom = document.querySelector(".services__modal-button--room");
var servicesModalRoom = document.querySelector(".services__modal--room");
var buttonModalHouse = document.querySelector(".services__modal-button--house");
var servicesModalHouse = document.querySelector(".services__modal--house");
var buttonModalOffice = document.querySelector(".services__modal-button--office");
var servicesModalOffice = document.querySelector(".services__modal--office");

buttonModalRoom.addEventListener("click", function(){
	servicesModalRoom.classList.add("not-show")
	servicesList.classList.remove("not-show")
	toggles.classList.remove("not-show")
});
buttonModalHouse.addEventListener("click", function(){
	servicesModalHouse.classList.add("not-show")
	servicesList.classList.remove("not-show")
	toggles.classList.remove("not-show")
}); 
buttonModalOffice.addEventListener("click", function(){
	servicesModalOffice.classList.add("not-show")
	servicesList.classList.remove("not-show")
	toggles.classList.remove("not-show")
}); 


//переключатели
var toggleOne = document.querySelector(".toggle-one");
var toggleTwo = document.querySelector(".toggle-two");
var toggleThree = document.querySelector(".toggle-three");
var spaceRoom = document.querySelector(".space--room");
var spaceHouse = document.querySelector(".space--house")
var spaceOffice = document.querySelector(".space--office")

toggleOne.addEventListener("click", function(){
	if(spaceRoom.classList.contains("not-show")){
		spaceRoom.classList.remove("not-show");
	}
	if(!spaceHouse.classList.contains("not-show")){
		spaceHouse.classList.add("not-show");
	}
	if(!spaceOffice.classList.contains("not-show")){
		spaceOffice.classList.add("not-show");
	}
})
toggleTwo.addEventListener("click", function(){
	if(spaceHouse.classList.contains("not-show")){
		spaceHouse.classList.remove("not-show");
	}
	if(!spaceRoom.classList.contains("not-show")){
		spaceRoom.classList.add("not-show");
	}
	if(!spaceOffice.classList.contains("not-show")){
		spaceOffice.classList.add("not-show");
	}
})
toggleThree.addEventListener("click", function(){
	if(spaceOffice.classList.contains("not-show")){
		spaceOffice.classList.remove("not-show");
	}
	if(!spaceRoom.classList.contains("not-show")){
		spaceRoom.classList.add("not-show");
	}
	if(!spaceHouse.classList.contains("not-show")){
		spaceHouse.classList.add("not-show");
	}
})

//виды уборок - подробнее
var typeOfCleaningSupportive = document.querySelector(".types-of-cleaning__item--supportive");
var typeOfCleaningDescriptionSupportive = document.querySelector(".types-of-cleaning__description-container--supportive")
var typeOfCleaningDesctopSupportive = document.querySelector(".types-of-cleaning__list-desctop-of-works--supportive")
var spanSupportive = document.querySelector(".span--supportive")

var typeOfCleaningComplex = document.querySelector(".types-of-cleaning__item--complex");
var typeOfCleaningDescriptionComplex = document.querySelector(".types-of-cleaning__description-container--complex")
var typeOfCleaningDesctopComplex = document.querySelector(".types-of-cleaning__list-desctop-of-works--complex")
var spanComplex = document.querySelector(".span--complex")

var typeOfCleaningGeneral = document.querySelector(".types-of-cleaning__item--general");
var typeOfCleaningDescriptionGeneral = document.querySelector(".types-of-cleaning__description-container--general")
var typeOfCleaningDesctopGeneral = document.querySelector(".types-of-cleaning__list-desctop-of-works--general")
var spanGeneral = document.querySelector(".span--general")

var typeOfCleaningAfterRepair = document.querySelector(".types-of-cleaning__item--after-repair");
var typeOfCleaningDescriptionAfterRepair = document.querySelector(".types-of-cleaning__description-container--after-repair")
var typeOfCleaningDesctopAfterRepair = document.querySelector(".types-of-cleaning__list-desctop-of-works--after-repair")
var spanAfterRepair = document.querySelector(".span--after-repair")

typeOfCleaningSupportive.addEventListener("click", function(){
	typeOfCleaningDescriptionSupportive.classList.toggle("not-show");
/* 	typeOfCleaningDescriptionComplex.classList.add("not-show");
	typeOfCleaningDescriptionGeneral.classList.add("not-show");
	typeOfCleaningDescriptionAfterRepair.classList.add("not-show"); */

	//desctop
	typeOfCleaningDesctopSupportive.classList.remove("not-show");
	typeOfCleaningDesctopComplex.classList.add("not-show")
	typeOfCleaningDesctopGeneral.classList.add("not-show")
	typeOfCleaningDesctopAfterRepair.classList.add("not-show")

	//active
	spanSupportive.classList.add("active")
	spanSupportive.classList.remove("no-active");
	if(spanComplex.classList.contains("active")) {
		spanComplex.classList.remove("active");
		spanComplex.classList.add ("no-active")
	}
	if(spanGeneral.classList.contains("active")) {
		spanGeneral.classList.remove("active");
		spanGeneral.classList.add ("no-active")
	}
	if(spanAfterRepair.classList.contains("active")) {
		spanAfterRepair.classList.remove("active");
		spanAfterRepair.classList.add("no-active")
	}

})
typeOfCleaningComplex.addEventListener("click", function(){
	//mobile
	typeOfCleaningDescriptionComplex.classList.toggle("not-show")
	/* typeOfCleaningDescriptionSupportive.classList.add("not-show");
	typeOfCleaningDescriptionGeneral.classList.add("not-show");
	typeOfCleaningDescriptionAfterRepair.classList.add("not-show") */

	//desctop
	typeOfCleaningDesctopComplex.classList.remove("not-show");
	typeOfCleaningDesctopSupportive.classList.add("not-show")
	typeOfCleaningDesctopGeneral.classList.add("not-show")
	typeOfCleaningDesctopAfterRepair.classList.add("not-show")

	//active
	spanComplex.classList.add("active")
	spanComplex.classList.remove("no-active");
	if(spanSupportive.classList.contains("active")) {
		spanSupportive.classList.remove("active");
		spanSupportive.classList.add ("no-active")
	}
	if(spanGeneral.classList.contains("active")) {
		spanGeneral.classList.remove("active");
		spanGeneral.classList.add ("no-active")
	}
	if(spanAfterRepair.classList.contains("active")) {
		spanAfterRepair.classList.remove("active");
		spanAfterRepair.classList.add("no-active")
	}
})
typeOfCleaningGeneral.addEventListener("click", function(){
	typeOfCleaningDescriptionGeneral.classList.toggle("not-show");
/* 	typeOfCleaningDescriptionSupportive.classList.add("not-show");
	typeOfCleaningDescriptionComplex.classList.add("not-show");
	typeOfCleaningDescriptionAfterRepair.classList.add("not-show") */

	//desctop
	typeOfCleaningDesctopGeneral.classList.remove("not-show");
	typeOfCleaningDesctopSupportive.classList.add("not-show")
	typeOfCleaningDesctopComplex.classList.add("not-show")
	typeOfCleaningDesctopAfterRepair.classList.add("not-show")

	//active
	spanGeneral.classList.add("active")
	spanGeneral.classList.remove("no-active");
	if(spanSupportive.classList.contains("active")) {
		spanSupportive.classList.remove("active");
		spanSupportive.classList.add ("no-active")
	}
	if(spanComplex.classList.contains("active")) {
		spanComplex.classList.remove("active");
		spanComplex.classList.add("no-active")
	}
	if(spanAfterRepair.classList.contains("active")) {
		spanAfterRepair.classList.remove("active");
		spanAfterRepair.classList.add("no-active")
	}
})
typeOfCleaningAfterRepair.addEventListener("click", function(){
	typeOfCleaningDescriptionAfterRepair.classList.toggle("not-show")
/* 	typeOfCleaningDescriptionSupportive.classList.add("not-show");
	typeOfCleaningDescriptionComplex.classList.add("not-show");
	typeOfCleaningDescriptionGeneral.classList.add("not-show") */

	//desctop
	typeOfCleaningDesctopAfterRepair.classList.remove("not-show");
	typeOfCleaningDesctopSupportive.classList.add("not-show")
	typeOfCleaningDesctopComplex.classList.add("not-show")
	typeOfCleaningDesctopGeneral.classList.add("not-show")

	//active
	spanAfterRepair.classList.add("active")
	spanAfterRepair.classList.remove("no-active");
	if(spanSupportive.classList.contains("active")) {
		spanSupportive.classList.remove("active");
		spanSupportive.classList.add ("no-active")
	}
	if(spanGeneral.classList.contains("active")) {
		spanGeneral.classList.remove("active");
		spanGeneral.classList.add ("no-active")
	}
	if(spanComplex.classList.contains("active")){
		spanComplex.classList.remove("active");
		spanComplex.classList.add ("no-active")
	}

})

//прайс - подробнее
var priceCleaningSupportive = document.querySelector(".price__item--supportive")
var priceSupportive = document.querySelector(".price__type-of-space--supportive")

var priceCleaningComplex = document.querySelector(".price__item--complex")
var priceComplex = document.querySelector(".price__type-of-space--complex")

var priceCleaningGeneral = document.querySelector(".price__item--general")
var priceGeneral = document.querySelector(".price__type-of-space--general")

var priceCleaningAfterRepair = document.querySelector(".price__item--after-repair")
var priceAfterRepair = document.querySelector(".price__type-of-space--after-repair")

priceCleaningSupportive.addEventListener("click", function(){
	priceSupportive.classList.toggle("not-show")
})
priceCleaningComplex.addEventListener("click", function(){
	priceComplex.classList.toggle("not-show")
})
priceCleaningGeneral.addEventListener("click", function(){
	priceGeneral.classList.toggle("not-show")
})
priceCleaningAfterRepair.addEventListener("click", function(){
	priceAfterRepair.classList.toggle("not-show")
})


//faq
var question1 = document.querySelector(".question1");
var answer1 = document.querySelector(".answer1");
var question2 = document.querySelector(".question2");
var answer2 = document.querySelector(".answer2");
var question3 = document.querySelector(".question3");
var answer3 = document.querySelector(".answer3");
var question4 = document.querySelector(".question4");
var answer4 = document.querySelector(".answer4");
var question5 = document.querySelector(".question5");
var answer5 = document.querySelector(".answer5");
var question6 = document.querySelector(".question6");
var answer6 = document.querySelector(".answer6");
var question7 = document.querySelector(".question7");
var answer7 = document.querySelector(".answer7");
var question8 = document.querySelector(".question8");
var answer8 = document.querySelector(".answer8");
var question9 = document.querySelector(".question9");
var answer9 = document.querySelector(".answer9");
var question10 = document.querySelector(".question10");
var answer10 = document.querySelector(".answer10");

question1.addEventListener("click", function(){
	answer1.classList.toggle("not-show");
})
question2.addEventListener("click", function(){
	answer2.classList.toggle("not-show")
})
question3.addEventListener("click", function(){
	answer3.classList.toggle("not-show")
})
question4.addEventListener("click", function(){
	answer4.classList.toggle("not-show")
})
question5.addEventListener("click", function(){
	answer5.classList.toggle("not-show")
})
question6.addEventListener("click", function(){
	answer6.classList.toggle("not-show")
})
question7.addEventListener("click", function(){
	answer7.classList.toggle("not-show")
})
question8.addEventListener("click", function(){
	answer8.classList.toggle("not-show")
})
question9.addEventListener("click", function(){
	answer9.classList.toggle("not-show")
})
question10.addEventListener("click", function(){
	answer10.classList.toggle("not-show")
})