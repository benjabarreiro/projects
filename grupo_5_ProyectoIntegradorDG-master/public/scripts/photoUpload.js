function qs(element) {
    return document.querySelector(element);
}

window.addEventListener('load', function() {
    let portrayPhoto = qs('img.productLoader-form-uploadImage--portray');
    let horizontalPhoto = qs('img.productLoader-form-uploadImage--horizontal');
    let detailPhoto = qs('img.productLoader-form-uploadImage--detail');
    let image1 = qs('img#one');
    let image2 = qs('img#two');
    let image3 = qs('img#three');
    let image4 = qs('img#four');
    let image5 = qs('img#five');
    let image6 = qs('img#six');
    let image7 = qs('img#seven');
    let image8 = qs('img#eight');
    let image9 = qs('img#nine');
    let image10 = qs('img#ten');

    let portrayInput = qs('input#portray');
    let horizontalInput = qs('input#horizontal');
    let detailInput = qs('input#detail');
    let image1Input = qs('input#one');
    let image2Input = qs('input#two');
    let image3Input = qs('input#three');
    let image4Input = qs('input#four');
    let image5Input = qs('input#five');
    let image6Input = qs('input#six');
    let image7Input = qs('input#seven');
    let image8Input = qs('input#eight');
    let image9Input = qs('input#nine');
    let image10Input = qs('input#ten');

    portrayPhoto.addEventListener('click', function() {
        portrayInput.click();
    });

    horizontalPhoto.addEventListener('click', function() {
        horizontalInput.click()
    });

    detailPhoto.addEventListener('click', function() {
        detailInput.click()
    });

    image1.addEventListener('click', function() {
        image1Input.click()
    });
    image2.addEventListener('click', function() {
        image2Input.click()
    });
    image3.addEventListener('click', function() {
        image3Input.click()
    });
    image4.addEventListener('click', function() {
        image4Input.click()
    });
    image5.addEventListener('click', function() {
        image5Input.click()
    });
    image6.addEventListener('click', function() {
        image6Input.click()
    });
    image7.addEventListener('click', function() {
        image7Input.click()
    });
    image8.addEventListener('click', function() {
        image8Input.click()
    });
    image9.addEventListener('click', function() {
        image9Input.click()
    });
    image10.addEventListener('click', function() {
        image10Input.click()
    });

})