const text = document.querySelector(".sec-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Tinguuuuuuuu";
    }, 0);
    setTimeout(() => {
        text.textContent = "Motuuuuuuuu";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Betuuuuuu";
    }, 8000); //1s = 1000 milliseconds
}
textLoad();
setInterval(textLoad, 12000);
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");

    const centerText = document.getElementById('centertext');
    const movieContainer = document.getElementById('movie_container');
    const imageOne = document.querySelector('.image_one');
    const video = document.querySelector('video');
    const images = document.querySelectorAll('.image');

    function startSequence() {
        console.log("Starting the sequence");

        // Hide everything initially
        movieContainer.style.display = 'none';
        imageOne.style.display = 'none';
        video.style.display = 'none';
        images.forEach(img => img.style.display = 'none');

        // Show the center text initially
        centerText.style.display = 'block';
        console.log("Center text is now visible");

        // When the center text is clicked
        centerText.addEventListener('click', function() {
            console.log("Center text clicked");
            centerText.style.display = 'none';

            // Show the movie container
            movieContainer.style.display = 'block';
            console.log("Movie container is now visible");

            showImageOne();
        }, { once: true }); // Ensures the click event is only registered once per loop
    }

    function showImageOne() {
        console.log("Displaying the first image");
        imageOne.style.display = 'block';
        setTimeout(() => {
            console.log("Hiding the first image and showing the video");
            imageOne.style.display = 'none';
            playVideo();
        }, 4000); // Display the first image for 4 seconds
    }

    function playVideo() {
        console.log("Playing the video");
        video.style.display = 'block';
        video.play();

        video.onended = () => {
            console.log("Video ended, hiding video and showing images");
            video.style.display = 'none';
            showImagesSequentially();
        };
    }

    function showImagesSequentially() {
        let index = 0;

        function showNextImage() {
            if (index > 0) {
                console.log("Hiding previous image:", index - 1);
                images[index - 1].style.display = 'none';
            }
            if (index < images.length) {
                console.log("Displaying image:", index);
                images[index].style.display = 'block';
                index++;
                setTimeout(showNextImage, 4000); // Show each image for 4 seconds
            } else {
                console.log("Restarting sequence");
                startSequence(); // Restart the sequence after the last image
            }
        }

        showNextImage();
    }

    startSequence(); // Start the loop when the DOM is ready
});

// for the gallery
document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.containertwo');
    const images = document.querySelectorAll('.image1');
    const title = document.querySelector('.title');
    const originalTitleText = title.textContent; // Store the original title text

    // When an image is clicked
    images.forEach(image => {
        image.addEventListener('click', function(event) {
            // Change the title text to the figcaption text
            const figcaption = image.nextElementSibling.textContent;
            title.textContent = figcaption;

            // Change the container's background image
            container.style.backgroundImage = `url(${image.src})`;
            container.style.backgroundSize = 'cover';
            container.style.backgroundPosition = 'center';

            // Prevent the event from reaching the container's click listener
            event.stopPropagation();
        });
    });

    // When the container is clicked (but not on an image)
    container.addEventListener('click', function(event) {
        // Check if the click target is not an image
        if (!event.target.classList.contains('image1')) {
            // Reset the title text to the original text
            title.textContent = originalTitleText;

            // Change the container's background color and remove the background image
            container.style.backgroundColor = 'antiquewhite';
            container.style.backgroundImage = ''; // Remove the background image
        }
    });
});

document.addEventListener("DOMContentLoaded",function()
{
    const image = document.querySelector('.img');
    const wrapper = document.querySelector('.wrapper');
    const container = document.querySelector('.container');

    image.addEventListener('click',function()
{
    setInterval(() => {
    container.style.display = 'none';
    wrapper.style.display = 'block';
    }, 1000);
    
})
})

document.addEventListener("DOMContentLoaded", function() {
    const leftWindow = document.getElementById('left-window');
    const rightWindow = document.getElementById('right-window');
    const content = document.getElementById('content');
    const container = document.getElementById('containerfour');

    container.addEventListener('click', function() {
        leftWindow.classList.add('open');
        rightWindow.classList.add('open');

        setTimeout(() => {
            leftWindow.style.display = 'none';
            rightWindow.style.display = 'none';
            content.style.display = 'block';
        }, 1000); // Wait for the door opening animation to finish
    });
});



function showMessages() {
    const messageBox = document.getElementById('message-box');
    if (messageBox.classList.contains('hidden')) {
        messageBox.classList.remove('hidden');
    } else {
        messageBox.classList.add('hidden');
    }
}
