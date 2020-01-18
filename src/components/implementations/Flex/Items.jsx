import React, { useState } from "react";
import { List, Icon } from "semantic-ui-react";
import FlexContainer from "./FlexContainer";
import FlexEditor from "./FlexEditor";

export default function Items({
  noteMap,
  activeNote,
  functions,
  isLoading,
  type,
  tagMap,
  notes,
  items,
  ...rest
}) {
  return (
    <List>
      {items.map(key => (
        <FlexContainer
          isSelected={activeNote.UUID === key}
          onClick={() => functions.setAsActiveNote(key)}
          {...rest}
          type={type}
          rgb={noteMap.get(key).rgb}
          key={key}
          borderTop
        >
          <>
            <Icon
              onClick={() =>
                functions.submitNote({
                  ...noteMap.get(key),
                  secondaryContent: !noteMap.get(key).secondaryContent
                })
              }
              name={
                noteMap.get(key).secondaryContent ? "circle" : "circle outline"
              }
            ></Icon>
            {noteMap.get(key).content}
          </>
          <FlexEditor
            type={type}
            isLoading={isLoading}
            note={activeNote}
            tagMap={tagMap}
            onSubmit={functions.submitNote}
            onDelete={() => functions.deleteNote(activeNote["UUID"])}
            setAsActiveTag={functions.setAsActiveTag}
          />
        </FlexContainer>
      ))}
    </List>
  );
}
