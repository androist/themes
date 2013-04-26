$(function() {
	$('.platform').click(function() {
		var platform = $(this).data('platform')

		if(platform && platform.length > 0) {
			$('.post').not('[data-platform="' + platform + '"]').fadeOut('fast')
			$('.post[data-platform="' + platform + '"]').fadeIn('fast')
		} else {
			$('.post').fadeIn('fast')
		}
	})
})