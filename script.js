document.addEventListener("DOMContentLoaded", function () {
    // Array of image URLsconst items = [
    const items = [
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-businessWatch.png",
            tags: ["Link-in-bio", "Social Networks", "Business"],
            link: "https://example.com/item1"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-linkInBioGirl&Bike.png",
            tags: ["Link-in-bio", "Social Networks", "Empowered Woman"],
            link: "https://example.com/item2"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-eventTech.png",
            tags: ["Event", "Smart Label"],
            link: "https://example.com/item3"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-customPhotoBusiness.png",
            tags: ["tag2", "tag4"],
            link: "https://example.com/item4"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-donationLove&Colors.png",
            tags: ["tag3", "tag5"],
            link: "https://example.com/item1"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-smartLabelMuseum.png",
            tags: ["Business", "Gallery", "Multimedia", "Art & Design"],
            link: "https://example.com/item6"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-petIdCooper.png",
            tags: ["tag2", "tag3"],
            link: "https://example.com/item7"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-donationLittleSteps.png",
            tags: ["tag5", "tag3"],
            link: "https://example.com/item1"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-petIdSpike.png",
            tags: ["Pet Tag ID", "Social Networks"],
            link: "https://example.com/item1"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-linkInBioFitness.png",
            tags: ["tag5", "tag2"],
            link: "https://example.com/item1"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-linkInBioDesignBusiness.png",
            tags: ["tag2", "tag3"],
            link: "https://example.com/item1"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-linkInBioNailsBusiness.png",
            tags: ["tag3", "tag4"],
            link: "https://example.com/item1"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-videos.png",
            tags: ["tag5", "tag4"],
            link: "https://example.com/item1"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-linkInBioTennis.png",
            tags: ["tag2", "tag3"],
            link: "https://example.com/item1"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-audioAndDonation.png",
            tags: ["tag5", "tag2"],
            link: "https://example.com/item1"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-customHotelBusiness.png",
            tags: ["Business", "Gallery", "Multimedia", "Body & Care"],
            link: "https://example.com/item1"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-businessMango.png",
            tags: ["tag5", "tag2"],
            link: "https://example.com/item1"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-donationAndGallery.png",
            tags: ["tag2", "tag3"],
            link: "https://example.com/item1"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-customCosmeticBusiness.png",
            tags: ["tag3", "tag4"],
            link: "https://example.com/item1"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-video.png",
            tags: ["tag5", "tag4"],
            link: "https://example.com/item1"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-linkInBioCoffeeBusiness2.png",
            tags: ["Link-in-bio", "Business", "Coffee Shops"],
            link: "https://example.com/item1"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-linkInBioCoffeeBusiness3.png",
            tags: ["tag5", "tag2"],
            link: "https://example.com/item1"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-linkInBioCoffeeBusiness1.png",
            tags: ["tag3", "tag4"],
            link: "https://example.com/item1"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-linkInBioModel.png",
            tags: ["tag5", "tag3"],
            link: "https://example.com/item1"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-socialsClimateActivist.png",
            tags: ["tag2", "tag4"],
            link: "https://example.com/item1"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-audioMattDj.png",
            tags: ["tag5", "tag2"],
            link: "https://example.com/item1"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-businessPizza.png",
            tags: ["tag2", "tag3"],
            link: "https://example.com/item1"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-smartLabelToolsBox.png",
            tags: ["tag3", "tag4"],
            link: "https://example.com/item1"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-linkInBioDancer.png",
            tags: ["Link-in-bio", "Social Networks", "Empowered Woman", "Health"],
            link: "https://example.com/item1"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-vcardPlus.png",
            tags: ["tag2", "tag3"],
            link: "https://example.com/item1"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-businessCars.png",
            tags: ["Business", "Gallery", "Multimedia"],
            link: "https://example.com/item1"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-productWater.png",
            tags: ["tag3", "tag4"],
            link: "https://example.com/item1"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/kHiziG.png",
            tags: ["tag5", "tag4"],
            link: "https://example.com/item1"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-petIdMilo.png",
            tags: ["Pet Tag ID", "vCard Plus"],
            link: "https://example.com/item1"
        },
        {
            imageUrl: "https://s-pages.s3.amazonaws.com/sample-businessBrushstrokesStudio.png",
            tags: ["Link-in-bio", "Social Networks", "Business", "Gallery", "Multimedia", "Art & Design"],
            link: "https://example.com/item1"
        }
    ];

    const gridContainer = document.getElementById("gridContainer");
    const tagFilters = document.querySelectorAll(".tag-filter");

    // Function to filter items based on the selected tag
    function filterItems(tag) {
        // Remove the 'active' class from all tag filters
        tagFilters.forEach((filter) => {
            filter.classList.remove("active");
        });

        // Add the 'active' class to the selected tag filter
        const selectedFilter = document.querySelector(`[data-tag="${tag}"]`);
        selectedFilter.classList.add("active");

        gridContainer.innerHTML = ""; // Clear the grid container

        // Filter items based on the selected tag or show all items if tag is "all"
        const filteredItems = tag === "all" ? items : items.filter((item) => item.tags.includes(tag));

        // Generate grid items for the filtered items
        filteredItems.forEach((item) => {
            const iphoneContainer = document.createElement("div");
            iphoneContainer.classList.add("iphone-container");

            const iphoneScreen = document.createElement("div");
            iphoneScreen.classList.add("iphone-screen");

            const imageContainer = document.createElement("div");
            imageContainer.classList.add("image-container");

            const imageLink = document.createElement("a");
            imageLink.href = item.link;

            const image = document.createElement("img");
            image.classList.add("iphone-image");
            image.src = item.imageUrl;
            image.alt = "iPhone Image";

            image.addEventListener("mouseenter", function () {
                image.classList.add("blur");
            });

            image.addEventListener("mouseleave", function () {
                image.classList.remove("blur");
            });

            const linkContainer = document.createElement("div");
            linkContainer.classList.add("link-container");
            linkContainer.textContent = item.link;

            imageLink.appendChild(image);
            imageContainer.appendChild(imageLink);
            iphoneScreen.appendChild(imageContainer);
            iphoneContainer.appendChild(iphoneScreen);
            iphoneContainer.appendChild(linkContainer);
            gridContainer.appendChild(iphoneContainer);
        });
    }

    // Event listener for tag filter buttons
    tagFilters.forEach((filter) => {
        filter.addEventListener("click", function () {
            const selectedTag = this.getAttribute("data-tag");
            filterItems(selectedTag);
        });
    });

    // Show all items by default
    filterItems("all");
});
