// sets dropdownList to the dropdown element
let dropdownList = document.getElementById('select_box');
// when something is selected, run

dropdownList.onchange = (ev) => {
    // console logs the selected value
    console.log(dropdownList);

    console.log("Selected value is: " + dropdownList.value);
    // when something is selected show another dropdown
    document.getElementById("subset").classList.remove('hide');
    // makes a var thats initialised to the selected value
    let subsetValue = (dropdownList.value);
    // foreach on the subsetOptions array that creates options for each of the elements within a dropdown
    console.log(subsetOptions.find(element => element == dropdownList.value)+'4')
    // subsetOptions[selectedOption].forEach(function(subsetOption) {
    //     const option = document.createElement("option");
    //     option.value = subsetOption;
    //     option.text = subsetOption;
    //     subsetSelect.appendChild(option);
    // });
    
}
// array full of objects
    const subsetOptions = {
        'antiques-collectables': ['Autographs', 'Bottles', 'Call Cards', 'Ceramics', 'Clocks & Scientific Instruments', 'Coins & Notes', 'Documents & Maps', 'Furniture', 'Jewellery', 'Memorabilia', 'Ornaments & Figurines', 'Postcards', 'Posters', 'Signs', 'Silver & Metalware', 'Stamps', 'Other Antiques & Collectables'],
        'art-crafts': ['Art Supplies & Equipment', 'Artisan Food', 'Arts and Crafts kits', 'Craft Supplies and Equipment', 'Fabric & Textile', 'Pictures & Paintings', 'Pottery & Ceramics', 'Scrapbooking', 'Sculptures and Woodwork', 'Sewing and Knitting', 'Stationery', 'Other Art & Craft'],
        'baby-nursery': ['Baby Gifts', 'Babyroom & Furniture', 'Car Seats & Travel', 'Changing / Bath time', 'Clothing, Blankets & Covers', 'Feeding', 'Pregnancy & Maternity', 'Pushchairs & Prams', 'Safety & Monitors', 'Toys', 'Walkers & Bouncers', 'Other Baby & Nursery'],
        'Books & Magazines': ['Photography', 'Audiobooks', 'Biographies', 'Bulk', 'Children & Babies', 'DIY & Gardening', 'Fiction', 'Food and Drink', 'Magazines & Comics', 'Non-fiction', 'School & College Books', 'Travel', 'Other Books & Magazines'],
        'business-office': ['Business Shop Fittings', 'Business Stock', 'Businesses For Sale', 'Office Equipment & Supplies', 'Office Furniture', 'Other Business & Office'],
        'car-parts-accessories': ['AC & Heating', 'Braking', 'Electronics', 'Engine & Drivetrain', 'Exhausts', 'Exterior & Body Parts', 'Interior Parts & Trim', 'Lighting & Lamps', 'Service Parts', 'Suspension & Steering', 'Transmission & Drivetrain', 'Wheels, Tyres & Alloys', 'Other Car Parts & Accessories'],
        'clothes-accessories': ['Bags', 'Children & Baby Clothes', 'Clothing Fabric & Haberdashery', 'Fancy Dress & Costumes', 'Footwear', 'Formal Wear', 'Jewellery & Watches', 'Lingerie & Underwear', 'Mens Clothes', 'Sportswear', 'Wedding Wear & Accessories', 'Womens Clothes', 'Other Clothes & Accessories'],
        'computers': ['Components', 'Desktops', 'Gaming', 'Laptops & Netbooks', 'Monitors', 'Networking & Accessories', 'Peripherals', 'Printers & Scanners', 'Servers', 'Software', 'Tablets & eBooks', 'Other Computers'],
        'consoles-games': ['Console Accessories', 'Console Games', 'Consoles', 'Handheld Games', 'Other Consoles & Games'],
        'construction-trade-tools': ['Building Materials & Supplies', 'Electrical', 'Hand Tools', 'Ladders & Scaffolding', 'Measuring & Surveying', 'Painting & Decorating', 'Plumbing & Central Heating', 'Power Tools', 'Safety & Workwear', 'Tool Storage & Workbenches', 'Other Construction & Trade Tools'],
        'electronics': ['Audio', 'Cameras & Photography', 'GPS & Sat Nav', 'Home Appliances', 'Other Electronics', 'Phones', 'Tablets & eBooks', 'TVs & DVD Players', 'Video Games & Consoles'],
        'farm-machinery': ['Balers', 'Combines & Harvesters', 'Cultivation', 'Feeding Equipment', 'Forage & Hay', 'Forestry & Hedging', 'Grain Handling Equipment', 'Livestock Equipment', 'Miscellaneous', 'Mowers', 'Planters & Drills', 'Sprayers', 'Spreaders & Fert. Dist.', 'Tillage Equipment', 'Tractors', 'Trailers', 'Other Farm Machinery'],
        'gardening': ['Barbecues', 'Fertilisers & Plant Food', 'Garden Furniture & Decking', 'Garden Lighting', 'Garden Ornaments & Pots', 'Garden Tools', 'Lawnmowers & Trimmers', 'Other Gardening', 'Patio & Paving', 'Plants & Landscaping', 'Ponds & Water Features', 'Sheds, Greenhouses & Storage'],
        'health-beauty': ['Dental Care', 'Hair Care & Styling', 'Makeup & Cosmetics', 'Massage Products', 'Nail Care, Manicure & Pedicure', 'Perfume & Cologne', 'Skin Care', 'Sun Care & Tanning', 'Other Health & Beauty'],
        'home-appliances': ['Cookers & Ovens', 'Dishwashers', 'Freezers', 'Fridges', 'Microwave Ovens', 'Small Kitchen Appliances', 'Vacuum Cleaners', 'Washing Machines & Dryers', 'Other Home Appliances'],
        'home-furniture': ['Bathroom Furniture & Fittings', 'Beds & Bedroom Furniture', 'Dining & Living Room Furniture', 'Kitchen Furniture & Fittings', 'Office Furniture', 'Other Home Furniture'],
        'kitchen-appliances': ['Blenders, Juicers & Food processors', 'Coffee Machines', 'Cookers & Ovens', 'Dishwashers', 'Freezers', 'Fridges', 'Microwave Ovens', 'Small Kitchen Appliances', 'Other Kitchen Appliances'],
        'musical-instruments': ['Accordions', 'Brass', 'Drums & Percussion', 'Guitars & Basses', 'Harmonicas', 'Keyboards & Piano', 'String Instruments', 'Studio & Live Music Equipment', 'Wind Instruments', 'Other Musical Instruments'],
        'pets': ['Birds', 'Cats & Kittens', 'Dogs & Puppies', 'Fish', 'Horses & Ponies', 'Reptiles & Amphibians', 'Small Furries', 'Other Pets'],
        'phones-accessories': ['Mobile Phone Accessories', 'Mobile Phones', 'Other Phones & Accessories'],
        'sports-leisure': ['Bicycles', 'Boxing & Martial Arts', 'Camping & Hiking', 'Fishing', 'Fitness Equipment & Accessories', 'Golf', 'Rugby', 'Sailing', 'Snooker, Pool & Billiards', 'Sports Memorabilia & Collectibles', 'Surfing & Windsurfing', 'Swimming', 'Team Sports', 'Tennis & Racquet Sports', 'Water Sports', 'Winter Sports', 'Other Sports & Leisure'],
        'tickets': ['Concerts', 'Events', 'Festivals', 'Sports', 'Theatre & Comedy', 'Other Tickets'],
        'tools-diy': ['Building Materials & Supplies', 'Electrical', 'Hand Tools', 'Ladders & Scaffolding', 'Measuring & Surveying', 'Painting & Decorating', 'Plumbing & Central Heating', 'Power Tools', 'Safety & Workwear', 'Tool Storage & Workbenches', 'Other Tools & DIY'],
        'toys-games': ['Action Figures & Toys', 'Board Games & Puzzles', 'Educational Toys', 'Electronic Toys', 'Outdoor Toys & Games', 'Soft Toys', 'Other Toys & Games'],
        'wedding': ['Bridal Accessories', 'Bridal Wear', 'Groom Wear', 'Wedding Decorations & Accessories', 'Wedding Dresses', 'Wedding Suits', 'Other Wedding']
    }
    const doneDealSections = {
        'cars': ['Alfa Romeo', 'Audi', 'BMW', 'Chevrolet', 'Chrysler', 'Citroen', 'Dacia', 'Daewoo', 'Daihatsu', 'Dodge', 'Ferrari', 'Fiat', 'Ford', 'Honda', 'Hyundai', 'Isuzu', 'Jaguar', 'Jeep', 'Kia', 'Lamborghini', 'Lancia', 'Land Rover', 'Lexus', 'Maserati', 'Mazda', 'Mercedes-Benz', 'MG', 'Mini', 'Mitsubishi', 'Nissan', 'Opel', 'Peugeot', 'Porsche', 'Renault', 'Rover', 'Saab', 'Seat', 'Skoda', 'Smart', 'SsangYong', 'Subaru', 'Suzuki', 'Toyota', 'Vauxhall', 'Volkswagen', 'Volvo', 'Other Cars'],
        'property': ['For Sale', 'To Let', 'Holiday Homes'],
        'electronics': ['Audio', 'Cameras & Photography', 'Computers & Gaming', 'Home Appliances', 'Phones & Accessories', 'TV, DVD & Video'],
        'home-garden': ['Antiques & Collectables', 'Furniture & Interiors', 'DIY & Renovations', 'Garden & Patio', 'Home Entertainment', 'Kitchen & Dining'],
        'sports-fitness': ['Bicycles', 'Fitness', 'Other Sports & Leisure', 'Watersports'],
        'hobbies-collectibles': ['Books & Magazines', 'Coins & Stamps', 'Memorabilia', 'Music & Instruments', 'Toys & Games', 'Wine & Spirits', 'Other Hobbies & Interests'],
        'fashion-health-beauty': ['Clothes & Accessories', 'Health & Beauty'],
        'baby-kids': ['Baby & Toddler', 'Toys & Games'],
        'jobs-education': ['Job Seekers & CVs', 'Classes', 'Courses & Training', 'Job Opportunities', 'Internship'],
        'services': ['Building & Trades', 'Childcare', 'Cleaning', 'Entertainment', 'Financial', 'Health & Beauty', 'IT', 'Legal', 'Moving & Storage', 'Pet Services', 'Photography', 'Printing & Reprographics', 'Transport'],
        'pets': ['Dogs', 'Cats', 'Fish', 'Horses', 'Birds', 'Reptiles', 'Small Furries', 'Other Pets']
    };
    


