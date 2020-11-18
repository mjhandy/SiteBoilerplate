<!doctype html>
<html class="" lang="en">

<head>
  <meta charset="utf-8">
  <title>Site Template - Video Player</title>
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
          <h2>Video Player</h2>
        </div>
      </div>
    </div>
  </header>
  <main id='main'>
    <section id='videoPlayer'>
      <div class='container'>
        <div class='row'>
          <div class='col-12 col-lg-10'>
            <div class='videoContainer'>

              <div class='videoContainer-video'>
                <div class="videoContainer-video--topControls controls"></div>
                <video src="/video/4k-video-sample.mp4" id='video'></video>
                <div class="videoContainer-video--bottomControls controls">
                  <div class='progressBars'>
                    <div class='progressBar progressBar-buffering'></div>
                    <div class='progressBar progressBar-playing'></div>
                  </div>
                  <div class='buttons'>
                    <div class='playPause button' role='button'>
                      <svg width="32px" class='icon' height="32px" xmlns="http://www.w3.org/2000/svg" aria-label="Play Video">
                        <use class='playPauseUse' href="/images/bootstrap-Icons/bootstrap-icons.svg#play-fill" />
                      </svg>
                    </div>
                    <div class='volumeMuteControls'>
                      <div class='volumeMute button' role='button'>
                        <svg width="32px" class='icon' height="32px" xmlns="http://www.w3.org/2000/svg" aria-label="Play Video">
                          <use class='volumeMuteUse' href="/images/bootstrap-Icons/bootstrap-icons.svg#volume-up-fill" />
                        </svg>
                      </div>                      
                      <input class="volumeMute-slider" type="range" min="0" max="100" step="1"></input>
                    </div>

                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>


  </main>
  <?php include("components/footer/footer.php"); ?>
  <?php include("components/jsScripts/jsScripts.php"); ?>
</body>

</html>