import React from "react";

import ProgImgBuilder from "./ProgImgBuilder";

const Blurred = ({ src, blur }) => {
  return null
};

class ProgImg extends React.Component {
  static Blurred = Blurred;

  state = {
    src: null,
    blurredSrc: null,
    blurredAmount: 5,
  };

  constructor(props) {
    super(props);
    this.state.src = props.src;

    if (!props.children) return;

    React.Children.forEach(props.children, (child) => {
      if (child.type.name) {
        switch (child.type.name) {
          case "Blurred":
            if (!child.props.src)
              throw new Error("ProgImg.Blurred needs a valid src value");
            this.state.blurredSrc = child.props.src;
            if (child.props.blur) {
              this.state.blurredAmount = child.props.blur;
            }
            break;
        }
      }
    });
  }

  render() {
    return <ProgImgBuilder {...this.state} />;
  }
}

export default ProgImg;

/**
 * The preview image can also be inlined
 * <img src="data:image/jpeg;base64,/9j/4AAQSkZJ..."  class="preview" />
 *
 * - base-64 encoding is less efficient, typically 30% larger than binary data
 * - inlined images cannot be cached
 */
