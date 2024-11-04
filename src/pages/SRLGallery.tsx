import { SimpleReactLightbox, SRLWrapper } from 'simple-react-lightbox';
import { Badge } from "@/components/ui/badge";
import { photos } from "@/data/photos";

const options = {
  settings: {
    overlayColor: 'rgba(0, 0, 0, 0.9)',
    autoplaySpeed: 3000,
    transitionSpeed: 500,
  },
  buttons: {
    backgroundColor: 'rgba(30, 30, 36, 0.8)',
    iconColor: 'rgba(255, 255, 255, 0.8)',
    iconPadding: '10px',
    showAutoplayButton: true,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: true,
    showNextButton: true,
    showPrevButton: true,
    showThumbnailsButton: true,
    size: '45px'
  },
  thumbnails: {
    showThumbnails: true,
    thumbnailsAlignment: 'center',
    thumbnailsContainerBackgroundColor: 'transparent',
    thumbnailsContainerPadding: '0',
    thumbnailsGap: '0 1px',
    thumbnailsIconColor: '#ffffff',
    thumbnailsOpacity: 0.4,
    thumbnailsPosition: 'bottom',
    thumbnailsSize: ['100px', '80px']
  },
  caption: {
    captionAlignment: 'center',
    captionColor: '#FFFFFF',
    captionContainerPadding: '20px 0 30px 0',
    captionFontFamily: 'inherit',
    captionFontSize: '1.2em',
    captionFontStyle: 'inherit',
    captionFontWeight: 'inherit',
    captionTextTransform: 'inherit',
    showCaption: true
  }
};

export function SRLGallery() {
  return (
    <SimpleReactLightbox>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="secondary">
            SRL Gallery
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Simple React Lightbox Gallery
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Click on any image to open the lightbox view with advanced features.
          </p>
        </div>

        <SRLWrapper options={options}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <a
                key={photo.id}
                href={photo.fullSize}
                data-attribute="SRL"
                className="cursor-pointer overflow-hidden rounded-lg"
              >
                <img
                  src={photo.thumbnail}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  data-title={photo.title}
                  data-description={`${photo.location} - By ${photo.photographer}`}
                />
              </a>
            ))}
          </div>
        </SRLWrapper>
      </div>
    </SimpleReactLightbox>
  );
}