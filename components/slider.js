const createSlider = () => {
  const slider = document.createElement('section');
  slider.classList.add('slider_section');
  slider.classList.add('position-relative');
  slider.innerHTML += `<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="slider_item-box">
        <div class="slider_item-container">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="slider_item-detail">
                  <div>
                    <h1>
                      Welcome to <br />
                      Our Fruits Shop
                    </h1>
                    <p>
                      There are many variations of passages of Lorem
                      Ipsum available, but the majority have suffered
                      alteration in some form, by injected humour, or
                      randomised words which don't look even slightly
                      believable.
                    </p>
                    <div class="d-flex">
                      <a href="" class="text-uppercase custom_orange-btn mr-3">
                        Shop Now
                      </a>
                      <a href="" class="text-uppercase custom_dark-btn">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="slider_img-box">
                  <div>
                    <img src="../../images/slide-img.png" alt="" class="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="slider_item-box">
        <div class="slider_item-container">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="slider_item-detail">
                  <div>
                    <h1>
                      Welcome to <br />
                      Our Fruits Shop
                    </h1>
                    <p>
                      There are many variations of passages of Lorem
                      Ipsum available, but the majority have suffered
                      alteration in some form, by injected humour, or
                      randomised words which don't look even slightly
                      believable.
                    </p>
                    <div class="d-flex">
                      <a href="" class="text-uppercase custom_orange-btn mr-3">
                        Shop Now
                      </a>
                      <a href="" class="text-uppercase custom_dark-btn">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="slider_img-box">
                  <div>
                    <img src="../../images/slide-img.png" alt="" class="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="slider_item-box">
        <div class="slider_item-container">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="slider_item-detail">
                  <div>
                    <h1>
                      Welcome to <br />
                      Our Fruits Shop
                    </h1>
                    <p>
                      There are many variations of passages of Lorem
                      Ipsum available, but the majority have suffered
                      alteration in some form, by injected humour, or
                      randomised words which don't look even slightly
                      believable.
                    </p>
                    <div class="d-flex">
                      <a href="" class="text-uppercase custom_orange-btn mr-3">
                        Shop Now
                      </a>
                      <a href="" class="text-uppercase custom_dark-btn">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="slider_img-box">
                  <div>
                    <img src="../../images/slide-img.png" alt="" class="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="custom_carousel-control">
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>`;
  return slider;

}