import React, { useEffect } from 'react';
import getTagsByName from '../model/actions/getTagsByName';
import store from '../../../store/store';

const { tagsState } = store.getState();

export default function Tags() {
  store.useState([tagsState]);
  const { isGettingTags, tagsGetError, tags } = tagsState;

  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    getTagsByName('');
  }, []);

  if (isGettingTags) {
    return <div>Getting tags, please wait...</div>;
  } else if (tagsGetError) {
    return <div>{'Getting tags failed: ' + tagsGetError.message}</div>;
  } else {
    const tagListItems = tags.map((tag) => <li key={tag._id}>{tag.name}</li>);
    return (
      <React.Fragment>
        <div>Tags:</div>
        <div className="tags">{tagListItems}</div>
      </React.Fragment>
    );
  }
}
