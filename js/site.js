$(function() {
	$('.platform').click(function() {
		var platform = $(this).data('platform')

		if(platform) {
			$('.post').not('[data-platform="' + platform + '"]').fadeOut('fast')
			$('.post[data-platform="' + platform + '"]').fadeIn('fast')
		} else {
			$('.post').fadeIn('fast')
		}
	})
})