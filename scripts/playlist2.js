// Ustalenie szeroko�ci i wysoko�ci sekcji #video

console.log($(document).width());
let windowWidth = $(document).width();
let windowHeight = $(document).height();
let width = 320;
let height = 180;

if (windowWidth >= windowHeight && windowWidth >= 320 && windowWidth < 360) {
  // Landscape
  width = 320;
  height = 180;
} else if (windowWidth < windowHeight && windowWidth >= 320 && windowWidth < 360) {
  // Portraits
  width = 320;
  height = 180;
} else if (windowWidth >= windowHeight && windowWidth >= 360 && windowWidth < 400) {
  // Landscape
  width = 320;
  height = 180;
} else if (windowWidth < windowHeight && windowWidth >= 360 && windowWidth < 400) {
  // Portraits
  width = 360;
  height = 202.5;
} else if (windowWidth >= windowHeight && windowWidth >= 400 && windowWidth < 640) {
  // Landscape
  width = 320;
  height = 180;
} else if (windowWidth < windowHeight && windowWidth >= 400 && windowWidth < 640) {
  // Portraits
  width = 400;
  height = 225;
} else if (windowWidth >= windowHeight && windowWidth >= 640 && windowWidth < 900) {
  // Landscape
  width = 320;
  height = 180;
} else if (windowWidth < windowHeight && windowWidth >= 640 && windowWidth < 900) {
  // Portraits
  width = 800;
  height = 450;
} else if (windowWidth >= windowHeight && windowWidth >= 700 && windowWidth < 1200) {
  // Landscape
  width = 500;
  height = 281.25;
} else if (windowWidth < windowHeight && windowWidth >= 700 && windowWidth < 1200) {
  // Portraits
  width = 800;
  height = 450;
} else if (windowWidth >= windowHeight && windowWidth >= 1000 && windowWidth < 1400) {
  // Landscape
  width = 500;
  height = 281.25;
} else if (windowWidth < windowHeight && windowWidth >= 1000 && windowWidth < 1400) {
  // Portraits
  width = 1000;
  height = 562.5;
} else if (windowWidth >= windowHeight && windowWidth >= 1200 && windowWidth < 3000) {
  // Landscape
  width = 800;
  height = 450;
}



// if (windowWidth <= 640) {
//   width = 320;
//   height = 180;
// } else if (windowWidth <= 1000) {
//   width = 360;
//   height = 202.5;
// } else if (windowWidth <= 1300) {
//   width = 640;
//   height = 360;
// } else {
//   width = 800;
//   height = 450;
// }


$(document).ready(function () {

  // const key = 'AIzaSyCSWgU5WvJFc30kyf0VHYLn_EkwCvXFlqI';
  const key = 'AIzaSyB_u2kM1JATuGyHfMsctTSrIOlhHaCgmpA';
  // const playlistId = 'PL8YLUNHoR5xnAnd2WoMG9Kgc0-N9hSBA7';
  const playlistId = 'PLjT36k8LxWpMckvo6zeI1jUPiiwlvdms5';
  const URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

  const options = {
    part: 'snippet',
    key: key,
    maxResults: 50,
    playlistId: playlistId
  }

  loadVids();

  function loadVids() {
    $.getJSON(URL, options, function (data) {
      // console.log(data);
      let id = data.items[0].snippet.resourceId.videoId;
      mainVid(id);
      resultsLoop(data);
    });
  }



  function mainVid(id) {

    $('#video').html(`
    <iframe width="${width}" height="${height}" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
    `
      // allowfullscreen
    );
  }

  function resultsLoop(data) {

    $.each(data.items, function (i, item) {
      let thumb = item.snippet.thumbnails.medium.url;
      let title = item.snippet.title;
      let desc = "";
      // let desc = item.snippet.description.substring(0, 100);
      let vid = item.snippet.resourceId.videoId;

      $('main').append(`
    <article class="item" data-key="${vid}">

        <img src="${thumb}" alt="" class="thumb">

        <div class="details">
          <h4>${title}</h4>
          <p>${desc}</p>
        </div>

      </article>
    `);
    });
  }

  $('main').on('click', 'article', function () {
    let id = $(this).attr('data-key');
    mainVid(id);


  })

});