import { Box } from "@mui/system";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = ({ onChange, onClickItem, onClickThumb, ...props }) => {
  return (
    <Carousel
      infiniteLoop={true}
      showArrows={true}
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
      dynamicHeight={true}
      autoFocus={true}
      autoPlay={true}
      interval={2000}
    >
      {props.images.map((image, index) => (
        <Box key={`${image.id}-${index}`}>
          <img src={image.image} alt={image.image} />
        </Box>
      ))}
    </Carousel>
  );
};

export default Slider;
