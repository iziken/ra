'use strict';

function getRating(rating) {
  if (rating.value < 1 || rating.value > 5 || (typeof rating.value !=='number')) {
    return false;
  } else {
    const res = [];
    for (let i = 0; i < rating.value; i++) {
      res.push(<li key={i}><Star/></li>);
    }
    return res;
  }
}

function Stars({count}) {
  const rating = {
    value: count
  }
  return <ul className="card-body-stars u-clearfix">{getRating(rating)}</ul>;
}
