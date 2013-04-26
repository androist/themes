$(function{
	$('.platform').click(function() {
		var platform = $(this).data('platform')

		if(platform) {
			$('.post').not('[data-platform="' + plaform + '"]').fadeOut('fast')
			$('.post[data-platform="' + plaform + '"]').fadeIn('fast')
		} else {
			$('.post').fadeIn('fast')
		}
	})
})