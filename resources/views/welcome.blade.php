<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Sitarung</title>
        <link rel="stylesheet" href="{{ asset('/css/bootstrap.min.css') }}" />
        <link type="text/css" rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.css" />
        <link rel="stylesheet" href="{{ asset('/front/css/style.css') }}" />
        <link rel="stylesheet" href="{{ asset('/front/css/form.css') }}" />
        <link rel="stylesheet" href="{{ asset('/front/css/table.css') }}" />
        <link rel="stylesheet" href="{{ asset('/front/css/badge.css') }}" />
        <link rel="stylesheet" href="{{ asset('/front/css/modal.css') }}" />
        <link rel="stylesheet" href="{{ asset('/front/css/pagination.css') }}" />
    </head>
    <body>
      <div id="app">
        <App></App>
      </div>

      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">


      <link rel="stylesheet" href="{{ asset('/css/featherlight.min.css') }}" />
      <link rel="stylesheet" href="{{ asset('/css/bootstrap-select.min.css') }}" />
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
      <script src="{{ asset('/js/popper.min.js') }}"></script>
      <script src="{{ asset('/js/bootstrap.min.js') }}"></script>
      <script src="https://unpkg.com/leaflet/dist/leaflet-src.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.js"></script>
      <script src="{{ asset('/js/app.js'.'?'.time()) }}"></script>
      <script src="{{ asset('/js/featherlight.min.js') }}"></script>
      <script src="{{ asset('/js/bootstrap-select.min.js') }}"></script>
    </body>
</html>
