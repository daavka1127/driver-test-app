<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
  />
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">


    <link rel="stylesheet" href="{{ asset('frontend-css-js/css/normalize.min.css') }}" />

    <link rel="stylesheet" href="{{ asset('frontend-css-js/css/bootstrap.min.css') }}" />
    <link rel="stylesheet" href="{{ asset('frontend-css-js/css/jquery.fancybox.css') }}" />
    <link rel="stylesheet" href="{{ asset('frontend-css-js/css/flexslider.css') }}" />
    <link rel="stylesheet" href="{{ asset('frontend-css-js/css/styles.css') }}" />
    <link rel="stylesheet" href="{{ asset('frontend-css-js/css/queries.css') }}" />
    <link rel="stylesheet" href="{{ asset('frontend-css-js/css/etline-font.css') }}" />
    <link
      rel="stylesheet"
      href="{{ asset('frontend-css-js/bower_components/animate.css/animate.min.css') }}"
    />
    <link
    rel="stylesheet"
    href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
  />
    <link rel="stylesheet" href="{{ asset('frontend-css-js/css/myStyle.css') }}" />
    <script src="{{ asset('frontend-css-js/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js') }}"></script>
    <!-- Styles -->
    {{-- <link href="{{ asset('css/app.css') }}" rel="stylesheet"> --}}
</head>
<body id="top">
    <div id="user_contents">

    </div>
</body>

{{-- <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script> --}}
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script>
  window.jQuery ||
    document.write(
      '<script src=" {{ asset('frontend-css-js/js/vendor/jquery-1.11.2.min.js') }}"><\/script>'
    );
</script>

<script src="{{ asset('frontend-css-js/bower_components/retina.js/dist/retina.js') }}"></script>
<script src="{{ asset('frontend-css-js/js/jquery.fancybox.pack.js') }}"></script>
 <script src="{{ asset('frontend-css-js/js/vendor/bootstrap.min.js') }}"></script>
 <script src="{{ asset('frontend-css-js/js/scripts.js') }}"></script>
<script src="{{ asset('frontend-css-js/js/jquery.flexslider-min.js') }}"></script>
<script src="{{ asset('frontend-css-js/bower_components/classie/classie.js') }}"></script>
<script src="{{ asset('frontend-css-js/bower_components/jquery-waypoints/lib/jquery.waypoints.min.js') }}"></script>
{{-- <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script> --}}
    <script src="{{ asset('js/app.js') }}"></script>
</html>
