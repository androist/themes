task :default => [:clean] do |t|
	exec "jekyll"
end

task :server => [:clean] do |t|
	exec "jekyll --server"
end

task :post, [:name] do |t, args|
	name = ""
	if args.name then
		name = args.name
	else
		print "Post name: "
		name = STDIN.gets.chomp
	end

	if name.empty? then 
		puts "Please enter name!"
		exit
	end

	time = Time.new
	path =  File.join File.dirname(__FILE__), "_posts", "#{time.year}-#{time.month}-#{time.day}-#{name}.md"
	File.new path, "w"
	puts "Created file #{path}"
end

task :optimize do |t|
	require 'rbconfig'
	is_windows = (RbConfig::CONFIG['host_os'] =~ /mswin|mingw|cygwin/)
	if is_windows then
		png_opt = File.join File.dirname(__FILE__), "_bin", "optipng.exe %f"
		jpg_opt = File.join File.dirname(__FILE__), "_bin", "jpegtran.exe -o %f %f"

		png_opt_exists = true
		jpg_opt_exists = true
	else
		png_opt = "optipng %f"
		jpg_opt = "jpegtran -o %f %f"

		png_opt_exists = system("which optipng > /dev/null 2>&1")
		jpg_opt_exists = system("which jpegtran > /dev/null 2>&1")

		if !png_opt_exists && jpg_opt_exists then
			puts "Neither optipng or jpegtran are found, exiting"
			exit
		elsif !png_opt_exists then
			puts "optipng not found, only optimizing jpeg"
		else
			puts "jpegtran not found, only optimizing png"
		end
	end

	if jpg_opt_exists then
		Dir.glob(File.join File.dirname(__FILE__), "files", "thumb", "*.jpg").each do |f|
			puts "Optimizing #{f}"
			cmd = jpg_opt.gsub("%f", f)
			cmd.gsub! "/", "\\" if is_windows
			
			`#{cmd}`
		end
	end

	if png_opt_exists then
		Dir.glob(File.join File.dirname(__FILE__), "files", "thumb", "*.png").each do |f|
			puts "Optimizing #{f}"
			cmd = png_opt.gsub("%f", f)
			cmd.gsub! "/", "\\" if is_windows
			
			`#{cmd}`
		end
	end
end

task :clean do |t|
	system "rm -rf _site"
end