import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import firebase from 'gatsby-plugin-firebase';
import incrementViews from '../../lib/increment-views';

const ViewCounter = ({ id }) => {
  const [viewCount, setViewCount] = useState('');

  useEffect(() => {
    const onViews = (newViews) => {
      setViewCount(newViews.val() === 1 ? 0 : newViews.val());
    };

    incrementViews(id);

    firebase.database().ref(`/views`).child(id).on(`value`, onViews);

    return () => {
      if (firebase.database()) {
        firebase.database().ref(`/views`).child(id).off(`value`, onViews);
      }
    };
  }, [id]);

  return (
    <span>
      {viewCount ? viewCount : `---`}
    </span>
  );
};

export default ViewCounter;

ViewCounter.propTypes = {
  id: PropTypes.string
}