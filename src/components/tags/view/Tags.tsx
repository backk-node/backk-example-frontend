import React from 'react';
import store from '../../../store/store';
import getErrorMessage from '../../../utils/getErrorMessage';
import Form from '../../common/form/Form';
import preventDefaultAnd from '../../../utils/preventDefaultAnd';
import TagName from '../../../services/backk-example-microservice.default/tag/args/TagName';
import getTagsByName from '../model/actions/getTagsByName';

const { tagsState } = store.getState();
const tagName = new TagName();

export default function Tags() {
  store.useState([tagsState]);
  const { isGettingTags, tagsGetError, tags, forceImmediateGetFormValidationId } = tagsState;

  const tagNameForm = (
    <Form
      Class={TagName}
      instance={tagName}
      serviceFunctionType={'other'}
      forceImmediateValidationId={forceImmediateGetFormValidationId}
      error={tagsGetError}
      onSubmitForm={preventDefaultAnd(getTagsByName, tagName)}
    />
  );

  let tagsContent;
  if (isGettingTags) {
    tagsContent = <div>Getting tags, please wait...</div>;
  } else if (tagsGetError) {
    tagsContent = <div>{'Getting tags failed: ' + getErrorMessage(tagsGetError)}</div>;
  } else {
    const tagListItems = tags.map((tag) => <li key={tag._id}>{tag.name}</li>);
    tagsContent = (
      <React.Fragment>
        <div>Tags:</div>
        <div className="tags">{tagListItems}</div>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      {tagNameForm}
      {tagsContent}
    </React.Fragment>
  );
}
