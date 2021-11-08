import React, { useEffect } from 'react';
import getTagsByName from '../model/actions/getTagsByName';
import store from '../../../store/store';

const { tagsState } = store.getState();

export default function Tags() {
  store.useState([tagsState]);

  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    getTagsByName('a');
  }, []);

  if (tagsState.isGettingTags) {
    return <div>Getting tags, please wait...</div>;
  } else if (tagsState.lastError) {
    return <div>{'Getting tags failed: ' + tagsState.lastError.message}</div>;
  } else {
    const tags = tagsState.tags.map((tag) => <li key={tag._id}>{tag.name}</li>);
    return <div className="tags">{tags}</div>;
  }
}
