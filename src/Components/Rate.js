import StarRatingComponent from "react-star-rating-component";

const Rate = ({ rating, setRating }) => {
  const onStarClick = (nextValue) => {
    setRating(nextValue);
  };
  return (
    <div className=" rate-Button">
      <StarRatingComponent
        starCount={5}
        value={rating}
        onStarClick={onStarClick}
      />
    </div>
  );
};

Rate.defaultProps = {
  setRating: () => {},
  rate: 1,
};
export default Rate;
