import React from 'react';
import store from '../../../store/store';
import Form from '../../common/form/Form';
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
      buttonText="Get Tags by Name"
      onSubmitForm={getTagsByName}
    />
  );

  let tagsContent;
  if (isGettingTags) {
    tagsContent = <div>Getting tags, please wait...</div>;
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
