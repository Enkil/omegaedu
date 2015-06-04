/* Omega on map */
var omega = {
    map: null,
    bounds: null
};

omega.init = function (selector, latLng, zoom, filename) { // Init map function
    var myOptions = {
        center: latLng,
        zoom: zoom,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT
        },
        disableDoubleClickZoom: true,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
        },
        scaleControl: true,
        scrollwheel: false,
        panControl: true,
        streetViewControl: true,
        draggable: true,
        overviewMapControl: true,
        overviewMapControlOptions: {
            opened: false
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var markerImage = new google.maps.MarkerImage(
        'img/images/map-marker.png',
        new google.maps.Size(101, 99)
    );
    var markerImageHover = new google.maps.MarkerImage(
        'img/images/map-marker.png',
        new google.maps.Size(101, 99)
    );

    this.map = new google.maps.Map($(selector)[0], myOptions);
    this.bounds = new google.maps.LatLngBounds();

    $.get(filename)
        .done(
        function (xml) {
            $(xml).find("office").each(function () {
                var city = $(this).find('city').text(),
                    subway = $(this).find('subway').text(),
                    street = $(this).find('street').text(),
                    house = $(this).find('house').text(),
                    building = $(this).find('building').text(),
                    door = $(this).find('door').text(),
                    lat = $(this).find('lat').text(),
                    lng = $(this).find('lng').text();

                // create a new LatLng point for the marker
                var point = new google.maps.LatLng(parseFloat(lat), parseFloat(lng));

                // extend the bounds to include the new point
                omega.bounds.extend(point);

                var marker = new google.maps.Marker({
                    icon: markerImage,
                    position: point,
                    map: omega.map
                });

                var infoWindow = new google.maps.InfoWindow();
                var html = '' +
                    '<div class="map-container">' +
                        '<div class="row">' +
                            '<div class="col-xs-4">' +
                                '<img src="img/images/omega-logo.png">' +
                            '</div>' +
                            '<div class="col-xs-8">' +
                                '<p>Город:' + city + '</p>' +
                                '<p>Метро:' + subway + ' </p>' +
                                '<p>Улица:' + street + ' </p>' +
                                '<p>Дом:' + house + ' </p>' +
                                '<p>Строение:' + building + ' </p>' +
                                '<p>Вход:' + door + ' </p>' +
                            '</div>' +
                        '</div>' +
                    '</div>';

                google.maps.event.addListener(marker, 'click', function () {
                    infoWindow.setContent(html);
                    marker.setIcon(markerImageHover);
                    infoWindow.open(omega.map, marker);
                });
                omega.map.fitBounds(omega.bounds);

                google.maps.event.addListener(marker, 'mouseover', function () {
                    marker.setIcon(markerImageHover);
                });

                google.maps.event.addListener(marker, 'mouseout', function () {
                    marker.setIcon(markerImage);
                });

            });
        }
    )
        .fail(function () {
            alert("error");
        })
};

if ($("#omega-on-map").length) {

    var myLatLng = new google.maps.LatLng(55.804400, 37.585939); // Set map center

    omega.init('#omega-on-map', myLatLng, 15, './omega-on-map.xml'); // Init omega on map function
};