$(function() {
	var platforms = []

	$('.post').each(function() {
		var platform = $(this).data('platform')

		if(platform && platforms.indexOf(platform) == -1) {
			platforms.push(platform)

			$('.select-platform').append(
				'<a class="platform" data-platform="' + platform + '">' + platform + '</a>'
			)
		}
	})

	$('.platform').click(function() {
		$('.platform').removeClass('active')
		$(this).addClass('active')

		var platform = $(this).data('platform')

		if(platform && platform.length > 0) {
			$('.post').not('[data-platform~="' + platform + '"]').fadeOut('fast')
			$('.post[data-platform=~"' + platform + '"]').fadeIn('fast')
		} else {
			$('.post').fadeIn('fast')
		}
	})
})