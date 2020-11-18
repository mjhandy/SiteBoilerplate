<!doctype html>
<html class="" lang="en">

<head>
  <meta charset="utf-8">
  <title>Site Template</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/src/css/main.css">
</head>

<body>
  <header>
    <?php include("components/mainNav/mainNav.php"); ?>
    <div class="container">
      <div class='row'>
        <div class='col-12 col-lg-6'>
          <h1>Site Template</h1>
          <h2>No section nav</h2>
        </div>
      </div>
    </div>
  </header>
  <main id='main'>
    <section id='buttons'>
      <div class='container'>
        <div class='row'>
          <div class='col-12'>
            <h2>Buttons & Text Links</h2>
            <h3>Primary & Secondary</h3>
            <div class='linkGroup'>
              <a href='#' class='link link-primary--solid'>Primary</a>
              <a href='#' class='link link-secondary'>Secondary</a>
            </div>
            <div class='linkGroup'>
              <a href='#' class='link link-primary--hollow'>Primary</a>
              <a href='#' class='link link-secondary'>Secondary</a>
            </div>
            <h3>External Link Icons</h3>
            <div class='linkGroup'>
              <a href='#' class='link link-primary--solid' target="_blank">Primary</a>
              <a href='#' class='link link-secondary' target="_blank">Secondary</a>
            </div>
            <div class='linkGroup'>
              <a href='#' class='link link-primary--hollow' target="_blank">Primary</a>
              <a href='#' class='link link-secondary' target="_blank">Secondary</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class='container '>
        <div class='row'>
          <div class='col-12'>
            <h2>Social Sharing</h2>
          </div>
          <div class='col-6'>
            <ul class='socialSharingLinks'>
              <li>
                <a href='' class='fb'>
                  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-square" role="img"
                    aria-label="Share on Facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor"
                      d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z">
                    </path>
                  </svg>
                </a>
              </li>
              <li>
                <a href='' class='li'>
                  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" role="img"
                    aria-label="Share on LinkedIn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor"
                      d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
                    </path>
                  </svg>
                </a>
              </li>
              <li>
                <a href='' class='tw'>
                  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter-square"
                    class="svg-inline--fa fa-twitter-square fa-w-14" role="img" aria-label="Share on Twitter"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor"
                      d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z">
                    </path>
                  </svg>
                </a>
              </li>
              <li>
                <a href='' class='em'>

                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope-square"
                    class="svg-inline--fa fa-envelope-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512">
                    <path fill="currentColor"
                      d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM178.117 262.104C87.429 196.287 88.353 196.121 64 177.167V152c0-13.255 10.745-24 24-24h272c13.255 0 24 10.745 24 24v25.167c-24.371 18.969-23.434 19.124-114.117 84.938-10.5 7.655-31.392 26.12-45.883 25.894-14.503.218-35.367-18.227-45.883-25.895zM384 217.775V360c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24V217.775c13.958 10.794 33.329 25.236 95.303 70.214 14.162 10.341 37.975 32.145 64.694 32.01 26.887.134 51.037-22.041 64.72-32.025 61.958-44.965 81.325-59.406 95.283-70.199z">
                    </path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="gradientHover">
      <div class='container'>
        <div class='row'>
          <div class='col-12'>
            <h2>Gradients With Hover </h2>
          </div>
          <div class='col-2'>
            <div class='gradientHover'>
              <p>This is a gradient hover</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class='container'>
        <div class='row'>
          <div class='col-12'>
            <h2>Tabs</h2>

            <div class='responsiveTabs'>
              <ul class="nav nav-tabs responsiveTabs-tabs" role="tablist">
                <li class="nav-item">
                  <a id="tab-A" href="#pane-A" class="nav-link active" data-toggle="tab" role="tab">–A–</a>
                </li>
                <li class="nav-item">
                  <a id="tab-B" href="#pane-B" class="nav-link" data-toggle="tab" role="tab">–B–</a>
                </li>
                <li class="nav-item">
                  <a id="tab-C" href="#pane-C" class="nav-link" data-toggle="tab" role="tab">–C–</a>
                </li>
              </ul>

              <div id="content" class="tab-content responsiveTabs-content" role="tablist">
                <div id="pane-A" class="card tab-pane fade show active" role="tabpanel" aria-labelledby="tab-A">
                  <div class="card-header" role="tab" id="heading-A">
                    <h5 class="mb-0">
                      <a data-toggle="collapse" href="#collapse-A" aria-expanded="true" aria-controls="collapse-A">
                        Collapsible Group Item A
                      </a>
                    </h5>
                  </div>
                  <div id="collapse-A" class="collapse show" role="tabpanel" data-parent="#content"
                    aria-labelledby="heading-A">
                    <div class="card-body">
                      [Tab content A]
                    </div>
                  </div>
                </div>

                <div id="pane-B" class="card tab-pane fade" role="tabpanel" aria-labelledby="tab-B">
                  <div class="card-header" role="tab" id="heading-B">
                    <h5 class="mb-0">
                      <a class="collapsed" data-toggle="collapse" href="#collapse-B" aria-expanded="false"
                        aria-controls="collapse-B">
                        Collapsible Group Item B
                      </a>
                    </h5>
                  </div>
                  <div id="collapse-B" class="collapse" role="tabpanel" data-parent="#content"
                    aria-labelledby="heading-B">
                    <div class="card-body">
                      [Tab content B]
                    </div>
                  </div>
                </div>

                <div id="pane-C" class="card tab-pane fade" role="tabpanel" aria-labelledby="tab-C">
                  <div class="card-header" role="tab" id="heading-C">
                    <h5 class="mb-0">
                      <a class="collapsed" data-toggle="collapse" href="#collapse-C" aria-expanded="false"
                        aria-controls="collapse-C">
                        Collapsible Group Item C
                      </a>
                    </h5>
                  </div>
                  <div id="collapse-C" class="collapse" role="tabpanel" data-parent="#content"
                    aria-labelledby="heading-C">
                    <div class="card-body">
                      [Tab content C]
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class='fullWidth fullWidth-copyLeft'>
      <div class="container">
        <div class='row'>
          <div class='col-lg-6 copy'>
            <div class='copy-holder'>
              <h2>Full Width 50/50 Split</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu vestibulum nulla, sed rhoncus
                magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed at rutrum
                turpis. Vestibulum accumsan fringilla sagittis. Maecenas.</p>
              <div class='linkGroup'>
                <a href='#' class='link link-primary--solid'>Primary</a>
                <a href='#' class='link link-secondary'>Secondary</a>
              </div>
            </div>
          </div>
          <div class='col-lg-6 img'>
            <img src="/images/LoneMountain.jpg" loading="lazy" class="">
          </div>
        </div>
      </div>
    </section>
    <section class='fullWidth fullWidth-copyRight'>
      <div class="container">
        <div class='row'>
          <div class='col-lg-6 copy'>
            <div class='copy-holder'>
              <h2>Full Width 50/50 Split</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu vestibulum nulla, sed rhoncus
                magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed at rutrum
                turpis. Vestibulum accumsan fringilla sagittis. Maecenas.</p>
              <div class='linkGroup'>
                <a href='#' class='link link-primary--hollow'>Primary</a>
                <a href='#' class='link link-secondary'>Secondary</a>
              </div>
            </div>
          </div>
          <div class='col-lg-6 img'>
            <img src="/images/arches.jpg" loading="lazy" class="">
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class='container'>
        <div class='row'>
          <div class='col-12'>
            <h2>Carousel/Slider - Default</h2>
          </div>
          <div class='col-12'>

            <div id='carouselPrototype' class='carousel slide' data-theme='default'>
              <!-- indicator -->
              <ol class="carousel-indicators">
                <li data-target="#carouselPrototype" data-slide-to="0" class="active" data-toggle="tooltip"
                  data-placement="top" title="Slide 1"></li>
                <li data-target="#carouselPrototype" data-slide-to="1" data-toggle="tooltip" data-placement="top"
                  title="Slide 2" loading="lazy"></li>
                <li data-target="#carouselPrototype" data-slide-to="2" data-toggle="tooltip" data-placement="top"
                  title="Slide 3" loading="lazy"></li>
              </ol>
              <!-- panels-->
              <div class='carousel-inner'>
                <div class='carousel-item active'>
                  <img src='/images/carousel/slide1.jpg' class="d-block w-100" src="..." alt="First slide">
                  <div class="carousel-caption">
                    <h3>Slide 1</h3>
                    <p>Slide 1</p>
                    <div class='linkGroup'>
                      <a href='#' class='link link-primary--solid'>Primary</a>
                    </div>
                  </div>
                </div>
                <div class='carousel-item'>
                  <img src='/images/carousel/slide2.jpg' class="d-block w-100" src="..." alt="Second slide">
                  <div class="carousel-caption">
                    <h3>Slide 2</h3>
                    <p>Slide 2</p>
                  </div>
                </div>
                <div class='carousel-item'>
                  <img src='/images/carousel/slide3.jpg' class="d-block w-100" src="..." alt="Third slide">
                  <div class="carousel-caption">
                    <h3>Slide 3</h3>
                    <p>Slide 3</p>
                  </div>
                </div>
              </div>
              <!-- arrows -->
              <a class="carousel-control-prev" href="#carouselPrototype" role="button" data-slide="prev"
                data-toggle="tooltip" data-placement="right" title="Previous">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselPrototype" role="button" data-slide="next"
                data-toggle="tooltip" data-placement="left" title="Next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
    <section class='fullWidth fullWidth-slider'>
      <div class='container'>
        <div class='row'>
          <div class='col-12'>
            <h2>Carousel/Slider - Thumbnails</h2>
          </div>
          <div class='col-12'>

            <div id='carouselPrototypeThumbnail' class='carousel slide' data-theme='thumbnail'>
              <!-- indicator -->
              <ol class="carousel-indicators">
                <li data-target="#carouselPrototypeThumbnail" data-slide-to="0" class="active" data-toggle="tooltip"
                  data-placement="top" title="Slide 1">
                  <img src='/images/carousel/slide1Lazy.jpg' class="" alt="First slide">
                </li>
                <li data-target="#carouselPrototypeThumbnail" data-slide-to="1" data-toggle="tooltip"
                  data-placement="top" title="Slide 2">
                  <img src='/images/carousel/slide2Lazy.jpg' class="" alt="First slide">
                </li>
                <li data-target="#carouselPrototypeThumbnail" data-slide-to="2" data-toggle="tooltip"
                  data-placement="top" title="Slide 3">
                  <img src='/images/carousel/slide3Lazy.jpg' class="" alt="First slide">
                </li>
              </ol>
              <!-- panels-->
              <div class='carousel-inner'>
                <div class='carousel-item active'>
                  <img src='/images/carousel/slide1.jpg' class="d-block w-100" alt="First slide">
                  <div class="carousel-caption">
                    <h3>Slide 1</h3>
                    <p>Slide 1</p>
                    <div class='linkGroup'>
                      <a href='#' class='link link-primary--solid'>Primary</a>
                    </div>
                  </div>
                </div>
                <div class='carousel-item'>
                  <img src='/images/carousel/slide2.jpg' class="d-block w-100" alt="Second slide">
                  <div class="carousel-caption">
                    <h3>Slide 2</h3>
                    <p>Slide 2</p>
                  </div>
                </div>
                <div class='carousel-item'>
                  <img src='/images/carousel/slide3.jpg' class="d-block w-100" alt="Third slide">
                  <div class="carousel-caption">
                    <h3>Slide 3</h3>
                    <p>Slide 3</p>
                  </div>
                </div>
              </div>
              <!-- arrows -->
              <a class="carousel-control-prev" href="#carouselPrototypeThumbnail" role="button" data-slide="prev"
                data-toggle="tooltip" data-placement="right" title="Previous">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselPrototypeThumbnail" role="button" data-slide="next"
                data-toggle="tooltip" data-placement="left" title="Next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
    <section id='hotSpot'>
      <div class='container'>
        <div class='row'>
          <div class='col-12'>
            <h2>Responsive Hotspots</h2>
          </div>
          <div class='col-12'>
            <div class='hotSpots'>
              <img class='hotSpots-img' src="//via.placeholder.com/600x450.jpg" width="600" height="450">
              <div class='hotSpots-spot' hsid='01' title='Hot Spot One' position='right top'
                style="top : 50px; left : 100px;">
                <div class='circle'></div>
              </div>
              <div class='card hotSpots-card' hsid='01' id=''>
                <div class='card-head' data-toggle="collapse" data-target="#card-body-01" aria-expanded="false"
                  aria-controls="card-body-01">Hot Spot One</div>
                <div class='card-body collapse' id='card-body-01'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu elementum orci. Nulla nec
                    consectetur justo. Aenean ultricies congue nisl. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Curabitur eu elementum orci. Nulla nec
                    consectetur justo. Aenean ultricies congue nisl.</p>
                </div>
              </div>

              <div class='hotSpots-spot' hsid='02' title='Hot Spot Two' position='right top'
                style='top : 60px; left : 200px;'>
                <div class='circle'></div>
              </div>
              <div class='card hotSpots-card' hsid='02'>
                <div class='card-head' data-toggle="collapse" data-target="#card-body-02" aria-expanded="false"
                  aria-controls="card-body-02">Hot Spot Two</div>
                <div class='card-body collapse' id='card-body-02'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu elementum orci. Nulla nec
                    consectetur justo. Aenean ultricies congue nisl.</p>
                </div>
              </div>

              <div class='hotSpots-spot' hsid='03' title='Hot Spot Three' position='left top'
                style='top : 90px; left : 350px;'>
                <div class='circle'></div>
              </div>
              <div class='card hotSpots-card' hsID='03'>
                <div class='card-head' data-toggle="collapse" data-target="#card-body-03" aria-expanded="false"
                  aria-controls="card-body-03">Hot Spot Three</div>
                <div class='card-body collapse' id='card-body-03'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu elementum orci. Nulla nec
                    consectetur justo. Aenean ultricies congue nisl.</p>
                </div>
              </div>

              <div class='hotSpots-spot' hsid='04' title='Hot Spot Three' position='left bottom'
                style='top : 400px; left : 350px;'>
                <div class='circle'></div>
              </div>
              <div class='card hotSpots-card' hsid='04'>
                <div class='card-head' data-toggle="collapse" data-target="#card-body-04" aria-expanded="false"
                  aria-controls="card-body-04">Hot Spot Four</div>
                <div class='card-body collapse' id='card-body-04'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu elementum orci. Nulla nec
                    consectetur justo. Aenean ultricies congue nisl.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id='suites'>
      <div class='container'>
        <div class='row'>
          <div class='col-12'>
            <h2>Suites</h2>
            <h3>Full colour</h3>
            <div class='card-deck suites justify-content-between theme-fullColour'>
              <div class='card suites-card mb-3 mb-lg-0'>
                <div class='card-header suites-card--header'>Suite Card One</div>
                <div class='card-body suites-card--body'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum posuere ultricies.
                    Mauris
                    elit sapien, mollis a nulla in, efficitur ornare magna. Interdum et malesuada.</p>
                </div>
                <div class='card-footer suites-card--footer'></div>
              </div>

              <div class='card suites-card mb-3 mb-lg-0'>
                <div class='card-header suites-card--header'>Suite Card Two</div>
                <div class='card-body suites-card--body'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum posuere ultricies.
                    Mauris
                    elit sapien, mollis a nulla in, efficitur ornare magna. Interdum et malesuada. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Aliquam fermentum posuere ultricies. Mauris
                    elit sapien, mollis a nulla in, efficitur ornare magna. Interdum et malesuada.</p>
                </div>
                <div class='suites-card--footer'></div>
              </div>

              <div class='card suites-card mb-3 mb-lg-0'>
                <div class='card-header suites-card--header'>Suite Card Three With A Very Long Title That Should Wrap
                </div>
                <div class='card-body suites-card--body'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum posuere ultricies.
                    Mauris
                    elit sapien, mollis a nulla in, efficitur ornare magna. Interdum et malesuada.</p>
                </div>
                <div class='card-footer suites-card--footer'></div>
              </div>

              <div class='card suites-card mb-3 mb-lg-0'>
                <div class='card-header suites-card--header'>Suite Card Four</div>
                <div class='card-body suites-card--body'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum posuere ultricies.
                    Mauris
                    elit sapien, mollis a nulla in, efficitur ornare magna. Interdum et malesuada.</p>
                </div>
                <div class='card-footer suites-card--footer'></div>
              </div>

            </div>
            <h3>First coloured, rest grey scale</h3>
            <div class='card-deck suites justify-content-between theme-first'>
              <div class='card suites-card mb-3 mb-lg-0'>
                <div class='card-header suites-card--header'>Suite Card One</div>
                <div class='card-body suites-card--body'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum posuere ultricies.
                    Mauris
                    elit sapien, mollis a nulla in, efficitur ornare magna. Interdum et malesuada.</p>
                </div>
                <div class='card-footer suites-card--footer'></div>
              </div>

              <div class='card suites-card mb-3 mb-lg-0'>
                <div class='card-header suites-card--header'>Suite Card Two</div>
                <div class='card-body suites-card--body'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum posuere ultricies.
                    Mauris
                    elit sapien, mollis a nulla in, efficitur ornare magna. Interdum et malesuada. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Aliquam fermentum posuere ultricies. Mauris
                    elit sapien, mollis a nulla in, efficitur ornare magna. Interdum et malesuada.</p>
                </div>
                <div class='suites-card--footer'></div>
              </div>

              <div class='card suites-card mb-3 mb-lg-0'>
                <div class='card-header suites-card--header'>Suite Card Three With A Very Long Title That Should Wrap
                </div>
                <div class='card-body suites-card--body'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum posuere ultricies.
                    Mauris
                    elit sapien, mollis a nulla in, efficitur ornare magna. Interdum et malesuada.</p>
                </div>
                <div class='card-footer suites-card--footer'></div>
              </div>

              <div class='card suites-card mb-3 mb-lg-0'>
                <div class='card-header suites-card--header'>Suite Card Four</div>
                <div class='card-body suites-card--body'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum posuere ultricies.
                    Mauris
                    elit sapien, mollis a nulla in, efficitur ornare magna. Interdum et malesuada.</p>
                </div>
                <div class='card-footer suites-card--footer'></div>
              </div>

            </div>
            <h3>Full colour - Three Suites</h3>
            <div class='card-deck suites justify-content-between theme-fullColour'>
              <div class='card suites-card mb-3 mb-lg-0'>
                <div class='card-header suites-card--header'>Suite Card One</div>
                <div class='card-body suites-card--body'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum posuere ultricies.
                    Mauris
                    elit sapien, mollis a nulla in, efficitur ornare magna. Interdum et malesuada.</p>
                </div>
                <div class='card-footer suites-card--footer'></div>
              </div>

              <div class='card suites-card mb-3 mb-lg-0'>
                <div class='card-header suites-card--header'>Suite Card Two</div>
                <div class='card-body suites-card--body'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum posuere ultricies.
                    Mauris
                    elit sapien, mollis a nulla in, efficitur ornare magna. Interdum et malesuada. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Aliquam fermentum posuere ultricies. Mauris
                    elit sapien, mollis a nulla in, efficitur ornare magna. Interdum et malesuada.</p>
                </div>
                <div class='suites-card--footer'></div>
              </div>

              <div class='card suites-card mb-3 mb-lg-0'>
                <div class='card-header suites-card--header'>Suite Card Three With A Very Long Title That Should Wrap
                </div>
                <div class='card-body suites-card--body'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum posuere ultricies.
                    Mauris
                    elit sapien, mollis a nulla in, efficitur ornare magna. Interdum et malesuada.</p>
                </div>
                <div class='card-footer suites-card--footer'></div>
              </div>



            </div>
          </div>
        </div>
      </div>
    </section>
    <section id='productIconCards'>
      <div class='container'>
        <div class='row'>
          <div class='col-12'>
            <h2>Product Icon Cards</h2>
            <div class='card-deck productIconCards'>
              <a href='#' class='productIconCards-card'>
                <img src="https://via.placeholder.com/150">
                <p>Product Name which should wrap</p>
              </a>
              <a href='#' class='productIconCards-card'>
                <img src="https://via.placeholder.com/150">
                <p>Product Name which should wrap</p>
              </a>
              <a href='#' class='productIconCards-card'>
                <img src="https://via.placeholder.com/150">
                <p>Product Name which should wrap</p>
              </a>
              <a href='#' class='productIconCards-card'>
                <img src="https://via.placeholder.com/150">
                <p>Product Name which should wrap</p>
              </a>
              <a href='#' class='productIconCards-card'>
                <img src="https://via.placeholder.com/150">
                <p>Product Name which should wrap</p>
              </a>
              <a href='#' class='productIconCards-card'>
                <img src="https://via.placeholder.com/150">
                <p>Product Name which should wrap</p>
              </a>
              <a href='#' class='productIconCards-card'>
                <img src="https://via.placeholder.com/150">
                <p>Product Name which should wrap</p>
              </a>
              <a href='#' class='productIconCards-card'>
                <img src="https://via.placeholder.com/150">
                <p>Product Name which should wrap</p>
              </a>
              <a href='#' class='productIconCards-card'>
                <img src="https://via.placeholder.com/150">
                <p>Product Name which should wrap</p>
              </a>
              <a href='#' class='productIconCards-card'>
                <img src="https://via.placeholder.com/150">
                <p>Product Name which should wrap</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id='forms'>
      <div class='container'>
        <div class='row'>
          <div class='col-12'>
            <h2>Forms</h2>
            <form>
              <div class="form-group email">
                <label for="exampleFormControlInput1" class='form-label'>Email address</label>
                <input type="email" class="form-field" id="exampleFormControlInput1" placeholder="name@example.com">
              </div>
              <div class="form-group fname">
                <label for="firstName" class='form-label'>First name</label>
                <input type="text" class="form-field" id="firstName" placeholder="ex: John">
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
  <?php include("components/footer/footer.php"); ?>
  <?php include("components/jsScripts/jsScripts.php"); ?>

</body>

</html>