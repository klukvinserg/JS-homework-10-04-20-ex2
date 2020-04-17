/* <div id="wrapper" style="display: flex;">
        <div style="width: 300px; margin: 10px;">
            <h3>What is Lorem Impus?</h3>
            <img src="img/1.jpg" alt="img" width="100%">
            <p style="text-align: justify;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sequi delectus at totam esse eos, beatae aspernatur, minima illo quam perspiciatis. Ut sit numquam facere? Harum earum veniam possimus quam.Ipsam dignissimos expedita error fugit provident optio unde fuga commodi ducimus quod soluta mollitia, tenetur consectetur tempora corporis facilis quisquam, id suscipit ut magni. Ipsum quaerat amet laborum dicta voluptate.
            <a href="https://www.pravda.com.ua/" target="_blank">More...</a>
            </p>
        </div>
        <div style="width: 300px; margin: 10px;">
            <h3>What is Lorem Impus?</h3>
            <img src="img/1.jpg" alt="img" width="100%">
            <p style="text-align: justify;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sequi delectus at totam esse eos, beatae aspernatur, minima illo quam perspiciatis. Ut sit numquam facere? Harum earum veniam possimus quam.Ipsam dignissimos expedita error fugit provident optio unde fuga commodi ducimus quod soluta mollitia, tenetur consectetur tempora corporis facilis quisquam, id suscipit ut magni. Ipsum quaerat amet laborum dicta voluptate.
            <a href="https://www.pravda.com.ua/" target="_blank">More...</a>
            </p>
        </div>
    </div> */

class HtmlElement {
  constructor(params) {
    this._name = params.name;
    this._ifClosed = params.ifClosed;
    this._description = params.description;
    this._atributes = params.atributes;
    this._style = params.style;
    this._tag = params.tag;
  }

  addAtributes(el) {
    this._atributes.push(el);
  }

  addStyle(el) {
    this._style.push(el);
  }

  getPushEl(el) {
    this._tag.push(el);
  }

  getUnshiftEl(el) {
    this._tag.unshift(el);
  }

  fixTag() {
    let strTag = "";

    for (let i = 0; i < this._tag.length; i++) {
      strTag += this._tag[i].getHtml();
    }

    return strTag;
  }

  fixAtributes() {
    let strAtributes = "";
    for (let i = 0; i < this._atributes.length; i++) {
      strAtributes += this._atributes[i] + " ";
    }

    return strAtributes;
  }

  fixStyle() {
    let strStyle = "";
    for (let i = 0; i < this._style.length; i++) {
      strStyle += this._style[i];

      if (this._style[i][this._style[i].length - 1] !== ";") {
        strStyle += "; ";
      }
    }
    return strStyle;
  }

  getHtml() {
    let str = `<${this._name} ${this.fixAtributes()} style="${this.fixStyle()}">
          ${this._description} ${this.fixTag()}`;

    if (!this._isClosed) {
      str += `</${this._name}>`;
    }
    return str;
  }
}

let objA = {
  name: "a",
  ifClosed: false,
  description: "More...",
  atributes: ['href="https://www.pravda.com.ua/"', 'target="_blank"'],
  style: [],
  tag: [],
};

let tagA = new HtmlElement(objA);

let objP = {
  name: "p",
  ifClosed: false,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sequi delectus at totam esse eos, beatae aspernatur, minima illo quam perspiciatis. Ut sit numquam facere? Harum earum veniam possimus quam.Ipsam dignissimos expedita error fugit provident optio unde fuga commodi ducimus quod soluta mollitia, tenetur consectetur tempora corporis facilis quisquam, id suscipit ut magni. Ipsum quaerat amet laborum dicta voluptate.",
  atributes: [],
  style: [],
  tag: [],
};

let tagP = new HtmlElement(objP);
tagP.addStyle("text-align: justify");
tagP.getPushEl(tagA);

let objImg = {
  name: "img",
  ifClosed: true,
  description: "",
  atributes: ['alt="img"', 'width="100%"'],
  style: [],
  tag: [],
};

let tagImg = new HtmlElement(objImg);
tagImg.addAtributes('src="img/1.jpg"');

let objH3 = {
  name: "h3",
  ifClosed: false,
  description: "What is Lorem Impus?",
  atributes: [],
  style: [],
  tag: [],
};

let tagH3 = new HtmlElement(objH3);

let objNews = {
  name: "div",
  ifClosed: false,
  description: "",
  atributes: [],
  style: ["width: 300px;", "margin: 10px;"],
  tag: [tagH3, tagImg, tagP],
};

let tagNews = new HtmlElement(objNews);

let objMain = {
  name: "div",
  ifClosed: false,
  description: "",
  atributes: [],
  style: ["display: flex;"],
  tag: [tagNews],
};

let tagMain = new HtmlElement(objMain);
tagMain.getUnshiftEl(tagNews);
document.write(tagMain.getHtml());
