
10.times do |d|
ProjDocument.create!(title: "Document #{d}", description: "description holder", file_url: "https://www.smashingmagazine.com/wp-content/uploads/2016/01/07-responsive-image-example-castle-7-opt.jpg", image_url: "https://www.smashingmagazine.com/wp-content/uploads/2016/01/07-responsive-image-example-castle-7-opt.jpg")
end
