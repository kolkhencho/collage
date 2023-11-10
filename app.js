window.onload = function() { // После того, как окно загружено
 
	setTimeout(function() { // Устанавливаем таймаут на 200мс
 
		document.body.classList.add('loaded') // Добавляем класс готовности body
 
		if (window.matchMedia('(min-width: 992px)').matches) { // Если не смартфон
 
			Draggable.create('.gallery', { // Запускаем плагин Draggable
				bounds: 'body',
				inertia: true
			})
			
		}
 
	}, 2000)
}
let soundButton = document.querySelector('.soundButton'),audio = document.querySelector('.audio')

soundButton.addEventListener('click',e=>{
    soundButton.classList.toggle('paused')
    audio.paused ? audio.play():audio.pause()
})
window.onfocus=function(){
    soundButton.classList.contains('paused')?audio.pause():audio.play();
}
window.onblur=function(){
    audio.pause();
}

const body=document.querySelector("body"),
    toggle = document.querySelector(".toggle");

    let getMode = localStorage.getItem("mode");
    if(getMode&&getMode==="dark"){
        body.classList.add("dark");
        toggle.classList.add("active");

    }

    toggle.addEventListener("click",()=>{
        body.classList.toggle("dark");

        if(!body.classList.contains("dark")){
            return localStorage.setItem("mode","light");
        }
        localStorage.setItem("mode","dark");
    })
    toggle.addEventListener("click",()=>toggle.classList.toggle("active"));