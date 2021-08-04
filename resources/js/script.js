$(document).ready(function () {
  /* Sticky navigation */
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "8%",
    }
  );

  /* Scroll on buttons */
  $(".js--scroll-to-plans").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".js--section-plans").offset().top,
      },
      500
    );
  });

  $(".js--scroll-to-start").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".js--section-features").offset().top,
      },
      500
    );
  });

  /* Animation on scroll */
  $(".js--wp-1").waypoint(
    (direction) => {
      $(".js--wp-1").addClass("animate__animated animate__fadeIn");
    },
    {
      offset: "70%",
    }
  );

  $(".js--wp-2").waypoint(
    (direction) => {
      $(".js--wp-2").addClass("animate__animated animate__fadeInUp");
    },
    {
      offset: "70%",
    }
  );

  $(".js--wp-3").waypoint(
    (direction) => {
      $(".js--wp-3").addClass("animate__animated animate__pulse");
    },
    {
      offset: "70%",
    }
  );
});
