$(function() {
	$('.platform').click(function() {
		$('.platform').removeClass('active')
		$(this).addClass('active')

		var platform = $(this).data('platform')

		if(platform && platform.length > 0) {
			$('.post').not('[data-platform~="' + platform + '"]').fadeOut('fast')
			$('.post[data-platform~="' + platform + '"]').fadeIn('fast')
		} else {
			$('.post').fadeIn('fast')
		}
	})
})

if('ontouchstart' in document.documentElement) {
	$('body').addClass('touch')
}