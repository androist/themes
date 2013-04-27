task :default do |t|
	exec "jekyll"
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
	puts File.join File.dirname(__FILE__), "_posts", "#{time.year}-#{time.month}-#{time.day}-#{name}.md"
	#File.new "_posts", "w"
end