<!--
=========================================================
* Argon Dashboard 2 - v2.0.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://www.creative-tim.com/license)
* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
-->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="apple-touch-icon" sizes="76x76" href="../assets/img/apple-icon.png">
  <link rel="icon" type="image/png" href="../assets/img/favicon.png">
  <title>CMS</title>
  <link type="text/css" rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
  <!--     Fonts and icons     -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
  <!-- Nucleo Icons -->
  <link href="{{ asset('/cms/css/nucleo-icons.css') }}" rel="stylesheet" />
  <link href="{{ asset('/cms/css/nucleo-svg.css') }}" rel="stylesheet" />
  <!-- Font Awesome Icons -->
  <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
  <link href="{{ asset('/cms/css/nucleo-svg.css') }}" rel="stylesheet" />
  <!-- CSS Files -->
  <link id="pagestyle" href="{{ asset('/cms/css/argon-dashboard.css?v=2.0.4') }}" rel="stylesheet" />
  <link rel="stylesheet" href="{{ asset('/css/featherlight.min.css') }}" />
  <link rel="stylesheet" href="{{ asset('/css/bootstrap-select.min.css') }}" />
  <link rel="stylesheet" href="{{ asset('/css/bootstrap-datepicker.min.css') }}" />
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
  <link rel="stylesheet" href="{{ asset('/cms/css/custom.css') }}" />

</head>

<body class="g-sidenav-show">

  <div id="app">
    <App></App>
  </div>

  <!--   Core JS Files   -->
  <script src="{{ asset('/cms/js/core/popper.min.js') }}"></script>
  <script src="{{ asset('/cms/js/core/bootstrap.min.js') }}"></script>
  <script src="{{ asset('/cms/js/plugins/perfect-scrollbar.min.js') }}"></script>
  <script src="{{ asset('/cms/js/plugins/smooth-scrollbar.min.js') }}"></script>
  <script src="{{ asset('/cms/js/plugins/chartjs.min.js') }}"></script>
  <script src="https://unpkg.com/leaflet/dist/leaflet-src.js"></script>
  <script src="{{ asset('/js/app.js'.'?'.time()) }}"></script>
  <script src="{{ asset('/js/featherlight.min.js') }}"></script>
  <script src="{{ asset('/js/bootstrap-select.min.js') }}"></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js'></script>
  <script>
    var win = navigator.platform.indexOf('Win') > -1;
    if (win && document.querySelector('#sidenav-scrollbar')) {
      var options = {
        damping: '0.5'
      }
      Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
    }
  </script>
  <!-- Github buttons -->
  <script async defer src="https://buttons.github.io/buttons.js"></script>
  <!-- Control Center for Soft Dashboard: parallax effects, scripts for the example pages etc -->
  <script src="{{ asset('/cms/js/argon-dashboard.min.js?v=2.0.4') }}"></script>
</body>

</html>
