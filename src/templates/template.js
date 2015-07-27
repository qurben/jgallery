angular.module('jgallery').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('../../templates/animation.html',
    "<div class=jgallery-animation-container><div ng-repeat=\"row in [rows] | jgalleryRange\" class=row><div ng-repeat=\"col in [cols] | jgalleryRange\" class=item><div ng-transclude style=\"transform: translate({{-100*(col+1-(1+parseInt(cols))/2)}}%, {{-100*(row+1-(1+parseInt(rows))/2)}}%)\"></div></div></div></div>"
  );


  $templateCache.put('../../templates/draggable-nav.html',
    "<div class=zoom-nav ng-class=\"{hide: ! draggableNavIsVisible && ! draggingInProgress}\"><img jgallery-draggable-img ng-src=\"{{ gallery.activeAlbum.activePhoto.href }}\" class=bg><div jgallery-draggable-nav-crop class=crop ng-style=\"{\n" +
    "        width: preview.clientWidth / img.width * nav.width  + 'px',\n" +
    "        height: preview.clientHeight / img.height * nav.height  + 'px',\n" +
    "        'margin-left': - parseInt( img.style.marginLeft ) / img.width * nav.width + 'px',\n" +
    "        'margin-top': - img.height / img.height * parseInt( img.style.marginTop ) / img.height * nav.height + 'px',\n" +
    "        'border-color': options.backgroundColor\n" +
    "    }\"><img ng-src=\"{{ gallery.activeAlbum.activePhoto.href }}\" ng-style=\"{\n" +
    "            'margin-left': parseInt( img.style.marginLeft ) / img.width * nav.width + 'px',\n" +
    "            'margin-top': img.height / img.height * parseInt( img.style.marginTop ) / img.height * nav.height + 'px',\n" +
    "        }\"></div></div>"
  );


  $templateCache.put('../../templates/jgallery.html',
    "<div ng-transclude ng-hide=\"options.mode !== 'full-screen' && gallery.isVisible\"></div><div class=\"jgallery jgallery-{{ options.mode }}\" data-jgallery-id=\"{{ gallery.id }}\" ng-show=gallery.isVisible ng-style=\"{\n" +
    "        background: options.backgroundColor,\n" +
    "        color: options.textColor,\n" +
    "        'text-shadow': '0 0 1px ' + options.backgroundColor,\n" +
    "        width: options.mode != 'full-screen' ? options.width : 'inherit',\n" +
    "        height: options.mode != 'full-screen' ? options.height : 'inherit'\n" +
    "     }\"><div jgallery-thumbnails ng-hide=\"thumbnailsIsHidden && ! thumbnailsIsFullScreen\" class=\"jgallery-thumbnails jgallery-thumbnails-{{ options.thumbnailsPosition }} {{ options.thumbType }}\" style=\"{{ thumbnailsIsVertical ? 'width: ' + thumbWidth : 'height: ' + thumbHeight }}px; background: {{ options.backgroundColor }}\" ng-class=\"{'full-screen': thumbnailsIsFullScreen}\"></div><div data-jgallery-preview></div></div>"
  );


  $templateCache.put('../../templates/preview.html',
    "<div class=zoom-container ng-style=\"{\n" +
    "        'left': ! isSlider && ! thumbnailsIsHidden && options.thumbnailsPosition === 'left' ? thumbnails.clientWidth + 'px' : 0,\n" +
    "        'right': ! isSlider && ! thumbnailsIsHidden && options.thumbnailsPosition == 'right' ? thumbnails.clientWidth + 'px' : 0,\n" +
    "        'top': ! isSlider && ! thumbnailsIsHidden && options.thumbnailsPosition == 'top' ? thumbnails.clientHeight + 'px' : 0,\n" +
    "        'bottom': ! isSlider && ! thumbnailsIsHidden && options.thumbnailsPosition == 'bottom' ? 40 + thumbnails.clientHeight + 'px' : '40px',\n" +
    "        'background': options.backgroundColorAlternative\n" +
    "    }\"><div class=\"zoom before pt-perspective\" jgallery-draggable-container><jgallery-animation rows=\"{{ options.transitionRows }}\" cols=\"{{ options.transitionCols }}\"><img ng-src=\"{{ gallery.activeAlbum.activePhoto.href }}\" ng-style=gallery.activeAlbum.activePhoto.style jgallery-draggable-element=\"{{ canDrag }}\" jgallery-draggable-element-on-start=startDragCallback() jgallery-draggable-element-on-stop=stopDragCallback() jgallery-mousedown-prevent-default></jgallery-animation><div jgallery-draggable-nav></div></div><span class=\"fa fa-chevron-left prev jgallery-btn jgallery-btn-large\" ng-class=\"{hidden: ! gallery.activeAlbum.hasPrevPhoto}\" ng-click=goToPrevPhoto() ng-style=\"{\n" +
    "                'background': options.backgroundColor\n" +
    "          }\"></span> <span class=\"fa fa-chevron-right next jgallery-btn jgallery-btn-large\" ng-class=\"{hidden: ! gallery.activeAlbum.hasNextPhoto}\" ng-click=goToNextPhoto() ng-style=\"{\n" +
    "                'background': options.backgroundColor\n" +
    "          }\"></span> <span class=progress></span><div class=nav ng-style=\"{\n" +
    "            'background': options.backgroundColor\n" +
    "        }\"><span jgallery-btn class=\"fa resize fa-search jgallery-btn jgallery-btn-small\" data-tooltip-position=\"bottom right\" data-tooltip=\"{{ options.tooltipZoom }}\" ng-class=\"{\n" +
    "                'fa-search-plus': canZoomIn,\n" +
    "                'fa-search-minus': canZoomOut\n" +
    "              }\" ng-click=changeZoomSize()></span> <span jgallery-btn class=\"fa change-mode jgallery-btn jgallery-btn-small\" data-tooltip-position=\"bottom right\" data-tooltip=\"{{ options.tooltipFullScreen }}\" ng-show=options.canChangeMode ng-click=\"options.mode = options.mode == 'standard' ? 'full-screen' : 'standard'\" ng-class=\"{'fa-expand': options.mode == 'standard', 'fa-compress': options.mode != 'standard'}\"></span> <span jgallery-btn class=\"fa fa-times jgallery-close jgallery-btn jgallery-btn-small\" data-tooltip-position=\"bottom right\" data-tooltip=\"{{ options.tooltipClose }}\" ng-show=options.canClose ng-click=\"gallery.isVisible = false\"></span></div><div class=nav-bottom style=\"background: {{ options.backgroundColor }}; box-shadow: 0 0 5px rgba( 0, 0, 0, .3 )\" ng-hide=thumbnailsIsFullScreen><div class=icons><span jgallery-btn class=\"fa fa-th full-screen jgallery-btn jgallery-btn-small\" data-tooltip=\"{{ options.tooltipSeeAllPhotos }}\" ng-click=\"thumbnailsIsFullScreen = ! thumbnailsIsFullScreen\"></span> <span jgallery-btn class=\"fa minimalize-thumbnails jgallery-btn jgallery-btn-small\" data-tooltip=\"{{ options.tooltipToggleThumbnails }}\" ng-class=\"{'fa-ellipsis-h': !thumbnailsIsVertical, 'fa-ellipsis-v': thumbnailsIsVertical, inactive: thumbnailsIsHidden}\" ng-click=\"thumbnailsIsHidden = ! thumbnailsIsHidden;\"></span> <span jgallery-btn class=\"fa fa-list-ul change-album jgallery-btn jgallery-btn-small\" ng-class=\"{inactive: ! hasManyAlbums, active: albumsDropdownIsVisible}\" ng-click=\"albumsDropdownIsVisible = ! albumsDropdownIsVisible\" tooltip=\"{{ options.tooltipSeeOtherAlbums }}\"><span class=\"menu jgallery-btn\" style=\"background: {{ options.backgroundColor }}; box-shadow: 0 0 20px {{ options.color }}\"><span class=item ng-repeat=\"album in gallery.albums\" ng-click=\"gallery.setAlbumAsActive( album.id )\">{{ album.title }}</span></span> <span class=title>{{ gallery.activeAlbum.title }}</span></span></div><div class=\"title before\"></div></div></div>"
  );


  $templateCache.put('../../templates/scrollable.html',
    "<div ng-transclude></div><span class=\"jgallery-scroll-top jgallery-btn\" ng-class=\"{'visible': canScrollTop()}\" ng-click=scrollTop();><span class=\"fa fa-chevron-up ico\"></span></span> <span class=\"jgallery-scroll-bottom jgallery-btn\" ng-class=\"{'visible': canScrollBottom()}\" ng-click=scrollBottom();><span class=\"fa fa-chevron-down ico\"></span></span> <span class=\"jgallery-scroll-left jgallery-btn\" ng-class=\"{'visible': canScrollLeft()}\" ng-click=scrollLeft();><span class=\"fa fa-chevron-left ico\"></span></span> <span class=\"jgallery-scroll-right jgallery-btn\" ng-class=\"{'visible': canScrollRight()}\" ng-click=scrollRight();><span class=\"fa fa-chevron-right ico\"></span></span>"
  );


  $templateCache.put('../../templates/thumbnails.html',
    "<div jgallery-scrollable><div ng-repeat=\"album in gallery.albums\" class=album ng-class=\"{'active': album.id == gallery.activeAlbum.id}\" style=\"{{ thumbnailsIsVertical ? '' : 'width: ' + album.photos.length * thumbWidth + 'px' }}\"><a ng-repeat=\"photo in album.photos\" ng-click=\"$event.preventDefault(); $parent.$parent.$parent.$parent.gallery.showPhoto( photo ); $parent.$parent.$parent.$parent.thumbnailsIsFullScreen = false;\" ng-href=\"{{ isSlider ? photo.src : photo.href }}\" ng-attr-link=\"{{ isSlider ? photo.href : undefined }}\" ng-attr-target=\"{{ isSlider ? photo.target : undefined }}\" style=\"width: {{ thumbWidth }}px; height: {{ thumbHeight }}px; font-size: {{ thumbHeight }}px\"><img ng-src=\"{{ photo.src }}\" ng-attr-alt=\"{{ photo.title }}\" ng-attr-data-jgallery-bg-color=\"{{ photo.bgColor }}\" ng-attr-data-jgallery-text-color=\"{{ photo.textColor }}\" ng-class=\"{\n" +
    "                     'thumb-vertical': photo.thumbWidth / photo.thumbHeight < options.thumbWidth / options.thumbHeight,\n" +
    "                     'thumb-horizontal': photo.thumbWidth / photo.thumbHeight >= options.thumbWidth / options.thumbHeight,\n" +
    "                     'thumb-on-full-screen-vertical': photo.thumbWidth / photo.thumbHeight < options.thumbWidthOnFullScreen / options.thumbHeightOnFullScreen,\n" +
    "                     'thumb-on-full-screen-horizontal': photo.thumbWidth / photo.thumbHeight >= options.thumbWidthOnFullScreen / options.thumbHeightOnFullScreen\n" +
    "                 }\"></a></div></div>"
  );

}]);