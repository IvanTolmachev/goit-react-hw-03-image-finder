import PropTypes from 'prop-types';
import { List, Img } from './ImageGalleryItem.styled';

export function ImageGalleryItem({ src, alt, srcLarge }) {
  return (
    <List>
      <Img src={src} alt={alt} data-modal={srcLarge} />
    </List>
  );
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  srcLarge: PropTypes.string,
};
