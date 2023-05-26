document.addEventListener("DOMContentLoaded", function () {
    // Array of image URLs
    const imageUrls = [
        "https://s-pages.s3.amazonaws.com/sample-businessWatch.png",
        "https://s-pages.s3.amazonaws.com/sample-linkInBioGirl&Bike.png",
        "https://s-pages.s3.amazonaws.com/sample-eventTech.png",
        "https://s-pages.s3.amazonaws.com/sample-customPhotoBusiness.png",
        "https://s-pages.s3.amazonaws.com/sample-donationLove&Colors.png",
        "https://s-pages.s3.amazonaws.com/sample-smartLabelMuseum.png",
        "https://s-pages.s3.amazonaws.com/sample-petIdCooper.png",
        "https://s-pages.s3.amazonaws.com/sample-donationLittleSteps.png",
        "https://s-pages.s3.amazonaws.com/sample-petIdSpike.png",
        "https://s-pages.s3.amazonaws.com/sample-linkInBioFitness.png",
        "https://s-pages.s3.amazonaws.com/sample-linkInBioDesignBusiness.png",
        "https://s-pages.s3.amazonaws.com/sample-linkInBioNailsBusiness.png",
        "https://s-pages.s3.amazonaws.com/sample-videos.png",
        "https://s-pages.s3.amazonaws.com/sample-linkInBioTennis.png",
        "https://s-pages.s3.amazonaws.com/sample-audioAndDonation.png",
        "https://s-pages.s3.amazonaws.com/sample-customHotelBusiness.png",
        "https://s-pages.s3.amazonaws.com/sample-businessMango.png",
        "https://s-pages.s3.amazonaws.com/sample-donationAndGallery.png",
        "https://s-pages.s3.amazonaws.com/sample-customCosmeticBusiness.png",
        "https://s-pages.s3.amazonaws.com/sample-video.png",
        "https://s-pages.s3.amazonaws.com/sample-linkInBioCoffeeBusiness2.png",
        "https://s-pages.s3.amazonaws.com/sample-linkInBioCoffeeBusiness3.png",
        "https://s-pages.s3.amazonaws.com/sample-linkInBioCoffeeBusiness1.png",
        "https://s-pages.s3.amazonaws.com/sample-linkInBioModel.png",
        "https://s-pages.s3.amazonaws.com/sample-socialsClimateActivist.png",
        "https://s-pages.s3.amazonaws.com/sample-audioMattDj.png",
        "https://s-pages.s3.amazonaws.com/sample-businessPizza.png",
        "https://s-pages.s3.amazonaws.com/sample-smartLabelToolsBox.png",
        "https://s-pages.s3.amazonaws.com/sample-linkInBioDancer.png",
        "https://s-pages.s3.amazonaws.com/sample-vcardPlus.png",
        "https://s-pages.s3.amazonaws.com/sample-businessCars.png",
        "https://s-pages.s3.amazonaws.com/sample-productWater.png",
        "https://s-pages.s3.amazonaws.com/kHiziG.png",
        "https://s-pages.s3.amazonaws.com/sample-petIdMilo.png",
        "https://s-pages.s3.amazonaws.com/sample-businessBrushstrokesStudio.png"
    ];

    // Get the grid container element
    const gridContainer = document.getElementById("gridContainer");

    // Iterate through the image URLs and generate grid items
    imageUrls.forEach((imageUrl) => {
        // Create the iPhone container
        const iphoneContainer = document.createElement("div");
        iphoneContainer.classList.add("iphone-container");

        // Create the iPhone screen
        const iphoneScreen = document.createElement("div");
        iphoneScreen.classList.add("iphone-screen");

        // Create the image
        const image = document.createElement("img");
        image.classList.add("iphone-image");
        image.src = imageUrl;
        image.alt = "iPhone Image";

        // Append the image to the iPhone screen
        iphoneScreen.appendChild(image);

        // Append the iPhone screen to the iPhone container
        iphoneContainer.appendChild(iphoneScreen);

        // Append the iPhone container to the grid container
        gridContainer.appendChild(iphoneContainer);
    });
});
