import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { equals, type } from "ramda";
import "./component.css";

const SIZES = {
  small: 0.3,
  medium: 0.5,
  large: 1,
  "x-large": 2
};

const length = size => n => `${SIZES[size] * n}`;

export class Checkbox extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    colour: PropTypes.string,
    onClick: PropTypes.func.isRequired
  };
  static defaultProps = {
    checked: false,
    disabled: false,
    label: "",
    size: "medium",
    colour: "black"
  };
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(event) {
    const { id, onClick, disabled, checked: prevChecked } = this.props;
    if (disabled) return;
    const checked = !prevChecked;
    if (equals(type(onClick), "Function")) {
      onClick(id, checked);
    }
  }
  render() {
    const { label, disabled, checked, size, colour } = this.props;
    const len = length(size);
    return (
      <div onClick={this.onClick} className={colour}>
        <svg
          width={len(48)}
          height={len(48)}
          viewBox={`0 0 ${len(48)} ${len(48)}`}
          style={{ marginBottom: len(-6) }}
        >
          <rect
            width={len(48)}
            height={len(48)}
            className="border"
            stroke={colour}
            fill="white"
            strokeWidth={len(8)}
          />
          {checked ? (
            <path
              d={`M${len(16)},${len(32)}l${len(3)},${len(3)}L${len(37)},${len(
                17
              )}l-${len(3)}-${len(3)}Z`}
            />
          ) : null}
          {checked ? (
            <path
              d={`M${len(22)},${len(32)}l-${len(3)},${len(3)}-${len(8)}-${len(
                8
              )},${len(3)}-${len(3)}Z`}
            />
          ) : null}
        </svg>
        {label && (
          <span style={{ marginLeft: `0.25em`, fontSize: `${len(3)}em` }}>
            {label}
          </span>
        )}
      </div>
    );
  }
}

export default Checkbox;
