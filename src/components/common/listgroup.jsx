import React from "react";

const listgroup = (props) => {
  const { items, textProperty, ValueProperty, selectedItem} = props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[ValueProperty]}
          className={item===selectedItem?" clickable list-group-item active":" clickable list-group-item"}
          onClick={() => props.onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

listgroup.defaultProps = {
  textProperty: "name",
  ValueProperty: "_id",
};

export default listgroup;
