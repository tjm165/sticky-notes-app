import React, { Component } from "react";
import { Dropdown, Header, Icon } from "semantic-ui-react";
import TagSegment from "./TagSegment";

export class TagDropdown extends Component {
  render() {
    const { tagMap, defaultValue, setAsActiveTag, ...rest } = this.props;
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
            <Icon name="write" onClick={() => setAsActiveTag(key)} />
            <TagSegment text={text} rgb={rgb} />
          </Header>
        )
      };
    });

    const renderLabel = label => ({
      content: <TagSegment text={label.text} rgb={label.rgb} />,
      onClick: () => setAsActiveTag(label.value)
    });

    return (
      <Dropdown
        search
        multiple
        clearable
        selection
        options={options}
        renderLabel={renderLabel}
        defaultValue={defaultValue}
        {...rest}
      />
    );
  }
}
