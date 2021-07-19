import React, { useCallback, useState } from 'react';
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import { useGalleryContext } from "../../context/GalleryContext"
import { views } from "../../constants";
import Nav from '../Nav';
import './styles/_gallery.scss';


const ContentGallery = () => {
  const [view, setView] = useState(views.COLUMN)
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const { stateGallery: { active }, imagesGallery, loading, addMoreImage } = useGalleryContext();

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const handleView = (newView) => {
    setView(newView);
  }

  return <div id="gallery" className="container">
    <div className="container__header">
      <div className="views">
        <div className="tooltip">
          <button onClick={() => handleView(views.COLUMN)} className={`${view === views.COLUMN ? 'active' : ''}`} >
            <img src="/img/column-icon.svg" alt="view column" />
          </button>
          <span className="tooltiptext">View Column</span>
        </div>
        <div className="tooltip">
          <button onClick={() => handleView(views.ROW)} className={`${view === views.ROW ? 'active' : ''}`} >
            <img src="/img/block-icon.svg" alt="view row" />
          </button>
          <span className="tooltiptext">View Row</span>
        </div>
      </div>
      <Nav />
    </div>

    {loading ? <div className="loading"></div> :
      <div>
        {imagesGallery[active].length > 0 && <Gallery photos={imagesGallery[active]} margin={10} direction={view} targetRowHeight={200} onClick={openLightbox} />}
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={imagesGallery[active].map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>}
    <button onClick={addMoreImage} className="btn-primary">Show Me More</button>
  </div>
}

export default ContentGallery;