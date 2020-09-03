//раскрывающееся меню
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var contentTitle = document.querySelector('.content__title');

navMain.classList.remove('main-nav--no-js');

navToggle.addEventListener('click', function() {
	if (navMain.classList.contains('main-nav--closed')) {
		navMain.classList.remove('main-nav--closed');
		navMain.classList.add('main-nav--opened');
	} else {
		navMain.classList.add('main-nav--closed');
		navMain.classList.remove('main-nav--opened');
	}
});

//подробнее - открыть модалку
var modal = document.querySelector('.modal');
var buttonRoom = document.querySelector('.space__button--room');
var buttonHouse = document.querySelector('.space__button--house');
var buttonOffice = document.querySelector('.space__button--office');
var roomPopup = document.querySelector('.services__modal--room');
var housePopup = document.querySelector('.services__modal--house');
var officePopup = document.querySelector('.services__modal--office');
var servicesList = document.querySelector('.services__list');
var toggles = document.querySelector('.toggles');

buttonRoom.addEventListener('click', function() {
	roomPopup.classList.remove('not-show');
	modal.classList.remove('not-show');


	servicesList.classList.add('not-show');
	toggles.classList.add('not-show');
});
buttonHouse.addEventListener('click', function() {
	housePopup.classList.remove('not-show');
	modal.classList.remove('not-show');

	servicesList.classList.add('not-show');
	toggles.classList.add('not-show');
});
buttonOffice.addEventListener('click', function() {
	officePopup.classList.remove('not-show');
	modal.classList.remove('not-show');

	servicesList.classList.add('not-show');
	toggles.classList.add('not-show');
});

//закрыть модалку
var buttonModalRoom = document.querySelector('.services__modal-button--room');
var servicesModalRoom = document.querySelector('.services__modal--room');
var buttonModalHouse = document.querySelector('.services__modal-button--house');
var servicesModalHouse = document.querySelector('.services__modal--house');
var buttonModalOffice = document.querySelector('.services__modal-button--office');
var servicesModalOffice = document.querySelector('.services__modal--office');

buttonModalRoom.addEventListener('click', function() {
	servicesModalRoom.classList.add('not-show');
	servicesList.classList.remove('not-show');
	toggles.classList.remove('not-show');
});
buttonModalHouse.addEventListener('click', function() {
	servicesModalHouse.classList.add('not-show');
	servicesList.classList.remove('not-show');
	toggles.classList.remove('not-show');
});
buttonModalOffice.addEventListener('click', function() {
	servicesModalOffice.classList.add('not-show');
	servicesList.classList.remove('not-show');
	toggles.classList.remove('not-show');
});

//переключатели
var toggleOne = document.querySelector('.toggle-one');
var toggleTwo = document.querySelector('.toggle-two');
var toggleThree = document.querySelector('.toggle-three');
var spaceRoom = document.querySelector('.space--room');
var spaceHouse = document.querySelector('.space--house');
var spaceOffice = document.querySelector('.space--office');

toggleOne.addEventListener('click', function() {
	if (spaceRoom.classList.contains('not-show')) {
		spaceRoom.classList.remove('not-show');
	}
	if (!spaceHouse.classList.contains('not-show')) {
		spaceHouse.classList.add('not-show');
	}
	if (!spaceOffice.classList.contains('not-show')) {
		spaceOffice.classList.add('not-show');
	}
});
toggleTwo.addEventListener('click', function() {
	if (spaceHouse.classList.contains('not-show')) {
		spaceHouse.classList.remove('not-show');
	}
	if (!spaceRoom.classList.contains('not-show')) {
		spaceRoom.classList.add('not-show');
	}
	if (!spaceOffice.classList.contains('not-show')) {
		spaceOffice.classList.add('not-show');
	}
});
toggleThree.addEventListener('click', function() {
	if (spaceOffice.classList.contains('not-show')) {
		spaceOffice.classList.remove('not-show');
	}
	if (!spaceRoom.classList.contains('not-show')) {
		spaceRoom.classList.add('not-show');
	}
	if (!spaceHouse.classList.contains('not-show')) {
		spaceHouse.classList.add('not-show');
	}
});

//виды уборок - подробнее - нажимаем на тип уборки - появляется краткое описание
var supportive = document.querySelector('.toc__item-title--supportive');
var supportiveDescription = document.querySelector('.toc__item-description--supportive');
var general = document.querySelector('.toc__item-title--general');
var generalDescription = document.querySelector('.toc__item-description--general');
var afterRepair = document.querySelector('.toc__item-title--after-repair');
var afterRepairDescription = document.querySelector('.toc__item-description--after-repair');
var dop = document.querySelector('.toc__item-title--dop');
var dopDescription = document.querySelector('.toc__item-description--dop');

supportive.addEventListener('click', function() {
	supportiveDescription.classList.toggle('not-show');

	if(!generalDescription.classList.contains("not-show")){
		generalDescription.classList.add("not-show")
	}
	if(!afterRepairDescription.classList.contains("not-show")){
		afterRepairDescription.classList.add("not-show")
	}
	if(!dopDescription.classList.contains("not-show")){
		dopDescription.classList.add("not-show")
	}

});
general.addEventListener('click', function() {
	generalDescription.classList.toggle('not-show');

	if(!supportiveDescription.classList.contains("not-show")){
		supportiveDescription.classList.add("not-show")
	}
	if(!afterRepairDescription.classList.contains("not-show")){
		afterRepairDescription.classList.add("not-show")
	}
	if(!dopDescription.classList.contains("not-show")){
		dopDescription.classList.add("not-show")
	}
});
afterRepair.addEventListener('click', function() {
	afterRepairDescription.classList.toggle('not-show');

	if(!supportiveDescription.classList.contains("not-show")){
		supportiveDescription.classList.add("not-show")
	}
	if(!generalDescription.classList.contains("not-show")){
		generalDescription.classList.add("not-show")
	}
	if(!dopDescription.classList.contains("not-show")){
		dopDescription.classList.add("not-show")
	}
});
dop.addEventListener('click', function() {
	dopDescription.classList.toggle('not-show');

	if(!supportiveDescription.classList.contains("not-show")){
		supportiveDescription.classList.add("not-show")
	}
	if(!generalDescription.classList.contains("not-show")){
		generalDescription.classList.add("not-show")
	}
	if(!afterRepairDescription.classList.contains("not-show")){
		afterRepairDescription.classList.add("not-show")
	}
});

//гажимаем на кнопку подробнее и открывается модалка со списком работ, вхолящих в уборку
var header = document.querySelector('.header');
var services = document.querySelector(".services")
var advantages = document.querySelector('.advantages');
var faq = document.querySelector('.faq');
var footer = document.querySelector('.footer');
var button = document.querySelector('.toc__item-button');
var buttonSupportive = document.querySelector('.toc__item-button--supportive');
var modalSupportive = document.querySelector('.toc-modal--supportive');
var buttonGeneral = document.querySelector('.toc__item-button--general');
var modalGeneral = document.querySelector('.toc-modal--general');
var buttonAfterRepair = document.querySelector('.toc__item-button--after-repair');
var modalAfterRepair = document.querySelector('.toc-modal--after-repair');
var buttonDop = document.querySelector('.toc__item-button--dop');
var modalDop = document.querySelector('.toc-modal--dop');

buttonSupportive.addEventListener('click', function() {
	modalSupportive.classList.remove('not-show');
	if(!modalGeneral.classList.contains("not-show")){
		modalGeneral.classList.add("not-show")
	}
	if(!modalAfterRepair.classList.contains("not-show")){
		modalAfterRepair.classList.add("not-show")
	}
	if(!modalDop.classList.contains("not-show")){
		modalDop.classList.add("not-show")
	}
	
});
buttonGeneral.addEventListener('click', function() {
	modalGeneral.classList.remove('not-show');
	if(!modalSupportive.classList.contains("not-show")){
		modalSupportive.classList.add("not-show")
	}
	if(!modalAfterRepair.classList.contains("not-show")){
		modalAfterRepair.classList.add("not-show")
	}
	if(!modalDop.classList.contains("not-show")){
		modalDop.classList.add("not-show")
	}
});
buttonAfterRepair.addEventListener('click', function() {
	modalAfterRepair.classList.remove('not-show');
	if(!modalSupportive.classList.contains("not-show")){
		modalSupportive.classList.add("not-show")
	}
	if(!modalGeneral.classList.contains("not-show")){
		modalGeneral.classList.add("not-show")
	}
	if(!modalDop.classList.contains("not-show")){
		modalDop.classList.add("not-show")
	}
});
buttonDop.addEventListener('click', function() {
	modalDop.classList.remove('not-show');
	if(!modalSupportive.classList.contains("not-show")){
		modalSupportive.classList.add("not-show")
	}
	if(!modalGeneral.classList.contains("not-show")){
		modalGeneral.classList.add("not-show")
	}
	if(!modalAfterRepair.classList.contains("not-show")){
		modalAfterRepair.classList.add("not-show")
	}
});

//закрываем модалку видов уборки
var buttonModal = document.querySelector(".toc-modal__close");
var buttonCloseSupportive = document.querySelector(".button__close--supportive")
var buttonCloseGeneral = document.querySelector(".button__close--general")
var buttonCloseAfterRepair = document.querySelector(".button__close--after-repair")
var buttonCloseDop = document.querySelector(".button__close--dop")

buttonCloseSupportive.addEventListener("click", function(){
	modalSupportive.classList.add("not-show")
})
buttonCloseGeneral.addEventListener("click", function(){
	modalGeneral.classList.add("not-show")
})
buttonCloseAfterRepair.addEventListener("click", function(){
	modalAfterRepair.classList.add("not-show")
})
buttonCloseDop.addEventListener("click", function(){
	modalDop.classList.add("not-show")
});

//desctop: при нажатии на уборку появляется белое подчеркивание
var desctopSupportive = document.querySelector(".toc__desctop-item--supportive")
var desctopGeneral = document.querySelector(".toc__desctop-item--general")
var desctopAfterRepair = document.querySelector(".toc__desctop-item--after-repair")
var desctopDop = document.querySelector(".toc__desctop-item--dop")

var desctopSupportiveWorks = document.querySelector(".toc__desctop-box--supportive") 
var desctopGeneralWorks = document.querySelector(".toc__desctop-box--general") 
var desctopAfterRepairWorks = document.querySelector(".toc__desctop-box--after-repair") 
var desctopDopWorks = document.querySelector(".toc__desctop-box--dop") 

desctopSupportive.addEventListener("click", function(){
	if(!(desctopSupportive.classList.contains("active"))){
		desctopSupportive.classList.add("active")
		if (desctopGeneral.classList.contains("active"))
			desctopGeneral.classList.remove("active")
		if (desctopAfterRepair.classList.contains("active"))
			desctopAfterRepair.classList.remove("active")
		if (desctopDop.classList.contains("active"))
			desctopDop.classList.remove("active");

		if(desctopSupportiveWorks.classList.contains("not-show"))
			desctopSupportiveWorks.classList.remove("not-show")
		if(!desctopGeneralWorks.classList.contains("not-show"))
			desctopGeneralWorks.classList.add("not-show")
		if(!desctopAfterRepairWorks.classList.contains("not-show"))
		desctopAfterRepairWorks.classList.add("not-show")
		if(!desctopDopWorks.classList.contains("not-show"))
		desctopDopWorks.classList.add("not-show")

	} 
})
desctopGeneral.addEventListener("click", function(){
	if(!desctopGeneral.classList.contains("active")){
		desctopGeneral.classList.add("active")
		if (desctopSupportive.classList.contains("active"))
			desctopSupportive.classList.remove("active")
		if (desctopAfterRepair.classList.contains("active"))
			desctopAfterRepair.classList.remove("active")
		if (desctopDop.classList.contains("active"))
			desctopDop.classList.remove("active");

		if(desctopGeneralWorks.classList.contains("not-show"))
			desctopGeneralWorks.classList.remove("not-show")
		if(!desctopSupportiveWorks.classList.contains("not-show"))
			desctopSupportiveWorks.classList.add("not-show")
		if(!desctopAfterRepairWorks.classList.contains("not-show"))
			desctopAfterRepairWorks.classList.add("not-show")
		if(!desctopDopWorks.classList.contains("not-show"))
			desctopDopWorks.classList.add("not-show")
	
	}
})

desctopAfterRepair.addEventListener("click", function(){
	if(!desctopAfterRepair.classList.contains("active")){
		desctopAfterRepair.classList.add("active")
		if (desctopSupportive.classList.contains("active"))
			desctopSupportive.classList.remove("active")
		if (desctopGeneral.classList.contains("active"))
		desctopGeneral.classList.remove("active")
		if (desctopDop.classList.contains("active"))
			desctopDop.classList.remove("active");

		if(desctopAfterRepairWorks.classList.contains("not-show"))
		desctopAfterRepairWorks.classList.remove("not-show")
		if(!desctopSupportiveWorks.classList.contains("not-show"))
			desctopSupportiveWorks.classList.add("not-show")
		if(!desctopGeneralWorks.classList.contains("not-show"))
			desctopGeneralWorks.classList.add("not-show")
		if(!desctopDopWorks.classList.contains("not-show"))
			desctopDopWorks.classList.add("not-show")
	
	}
})
	desctopDop.addEventListener("click", function(){
	if(!desctopDop.classList.contains("active")){
			desctopDop.classList.add("active")
			if (desctopSupportive.classList.contains("active"))
				desctopSupportive.classList.remove("active")
			if (desctopGeneral.classList.contains("active"))
			desctopGeneral.classList.remove("active")
			if (desctopAfterRepair.classList.contains("active"))
			desctopAfterRepair.classList.remove("active");
	
			if(desctopDopWorks.classList.contains("not-show"))
			desctopDopWorks.classList.remove("not-show")
			if(!desctopSupportiveWorks.classList.contains("not-show"))
				desctopSupportiveWorks.classList.add("not-show")
			if(!desctopGeneralWorks.classList.contains("not-show"))
				desctopGeneralWorks.classList.add("not-show")
			if(!desctopAfterRepairWorks.classList.contains("not-show"))
			desctopAfterRepairWorks.classList.add("not-show")
		
	}	
})

//прайс -() подробнее
var priceCleaningSupportive = document.querySelector('.price__item--supportive');
var priceSupportive = document.querySelector('.price__type-of-space--supportive');

var priceCleaningGeneral = document.querySelector('.price__item--general');
var priceGeneral = document.querySelector('.price__type-of-space--general');

var priceCleaningAfterRepair = document.querySelector('.price__item--after-repair');
var priceAfterRepair = document.querySelector('.price__type-of-space--after-repair');

priceCleaningSupportive.addEventListener('click', function() {
	priceSupportive.classList.toggle('not-show');
});

priceCleaningGeneral.addEventListener('click', function() {
	priceGeneral.classList.toggle('not-show');
});
priceCleaningAfterRepair.addEventListener('click', function() {
	priceAfterRepair.classList.toggle('not-show');
});

//faq
var question1 = document.querySelector('.question1');
var answer1 = document.querySelector('.answer1');
var question2 = document.querySelector('.question2');
var answer2 = document.querySelector('.answer2');
var question3 = document.querySelector('.question3');
var answer3 = document.querySelector('.answer3');
var question4 = document.querySelector('.question4');
var answer4 = document.querySelector('.answer4');
var question5 = document.querySelector('.question5');
var answer5 = document.querySelector('.answer5');
var question6 = document.querySelector('.question6');
var answer6 = document.querySelector('.answer6');
var question7 = document.querySelector('.question7');
var answer7 = document.querySelector('.answer7');
var question8 = document.querySelector('.question8');
var answer8 = document.querySelector('.answer8');
var question9 = document.querySelector('.question9');
var answer9 = document.querySelector('.answer9');
var question10 = document.querySelector('.question10');
var answer10 = document.querySelector('.answer10');

question1.addEventListener('click', function() {
	answer1.classList.toggle('not-show');
});
question2.addEventListener('click', function() {
	answer2.classList.toggle('not-show');
});
question3.addEventListener('click', function() {
	answer3.classList.toggle('not-show');
});
question4.addEventListener('click', function() {
	answer4.classList.toggle('not-show');
});
question5.addEventListener('click', function() {
	answer5.classList.toggle('not-show');
});
question6.addEventListener('click', function() {
	answer6.classList.toggle('not-show');
});
question7.addEventListener('click', function() {
	answer7.classList.toggle('not-show');
});
question8.addEventListener('click', function() {
	answer8.classList.toggle('not-show');
});
question9.addEventListener('click', function() {
	answer9.classList.toggle('not-show');
});
question10.addEventListener('click', function() {
	answer10.classList.toggle('not-show');
});
