import Params from './parameters';
import {Size} from '../preview';

const defaults: Params = {
    autoStartAtAlbum: 1,
    autoStartAtItem: 1,
    backgroundColor: '#000',
    browserHistory: true,
    canChangePreviewSize: true,
    canMinimizeThumbnails: true,
    itemOnHide: () => {},
    itemOnLoad: () => {},
    itemOnShow: () => {},
    navigationOnPreviewClick: true,
    onChange: () => {},
    previewSize: Size.cover,
    previewDraggable: true,
    slideShow: true,
    slideShowAutoStart: false,
    slideShowInterval: 4000,
    textColor: '#fff',
    thumbnailHeight: '64px',
    thumbnailHeightOnFullScreen: '128px',
    thumbnailWidth: '64px',
    thumbnailWidthOnFullScreen: '128px',
    thumbnails: true,
    thumbnailsFullScreen: true,
    thumbnailsPosition: 'bottom',
    thumbnailsVisible: true,
    tooltipChangeSize: 'Change size',
    tooltipSeeAllItems: 'See all items',
    tooltipSeeOtherAlbums: 'See other albums',
    tooltipSlideShowPause: 'Pause slide show',
    tooltipSlideShowStart: 'Start slide show',
    tooltipThumbnailsToggle: 'Toogle whumbnails',
    transitionAnimateSliceHeight: false,
    transitionAnimateSliceWidth: true,
    transitionDetails: 1,
    transitionDuration: 250,
    transitionOpacity: false,
    transitionOriginX: .5,
    transitionOriginY: .5,
    transitionXAxis: true,
    transitionYAxis: false,
    transitionEasingFunction: t => Math.sin(t*1.5707963267948966),
};

export default defaults;