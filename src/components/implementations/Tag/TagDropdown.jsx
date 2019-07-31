import React, { Component } from "react";
import { Dropdown, Header, Icon } from "semantic-ui-react";
import TagSegment from "./TagSegment";
import { NEW_INSTANCE_UUID } from "../../../API";

export class TagDropdown extends Component {
  render() {
    const {
      tagMap,
      defaultValue,
      setAsActiveTag,
      isLoading,
      ...rest
    } = this.props;
    const tagKeys = [...tagMap.keys()];

    //the choices
    const options = tagKeys.map(key => {
      const rgb = tagMap.get(key).rgb;
      const text = tagMap.get(key).title;
      return {
        key: key,
        value: key,
        text: text,
        rgb: rgb,
        content: (
          <Header size="tiny">
            <TagSegment text={text} rgb={rgb} />

            <Icon
              name="ellipsis vertical"
              onClick={() => setAsActiveTag(key)}
            />
          </Header>
        )
      };
    });

    const renderLabel = label => ({
      content: <TagSegment text={label.text} rgb={label.rgb} />,
      onClick: () => setAsActiveTag(label.value)
    });

    const activateNewTag = value => {
      setAsActiveTag(NEW_INSTANCE_UUID, value);
    };

    return (
      <Dropdown
        loading={isLoading.fetchUserTags}
        search
        multiple
        clearable
        allowAdditions
        selection
        options={options}
        renderLabel={renderLabel}
        defaultValue={defaultValue}
        onAddItem={(e, { value }) => activateNewTag(value)}
        {...rest}
      />
    );
  }
}
