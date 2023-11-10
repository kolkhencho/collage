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

