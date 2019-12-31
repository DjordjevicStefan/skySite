class XMLRequest {
  constructor(data) {
    this.data = data;
  }

  sendRequest = (option, path) => {
    return new Promise((resolve, reject) => {
      if (option.toUpperCase() === "POST") {
        const xml = new XMLHttpRequest();

        xml.onload = () => {
         //  console.log("resTest", xml.responseText);
         //  console.log("response", xml.response);
         //   console.log("xml" , xml);
           resolve(xml.responseText);
        };

        xml.onerror = () => {
          reject();
        };

        xml.open(option.toUpperCase(), path);

        xml.setRequestHeader(
          "Content-type",
          "application/x-www-form-urlencoded"
        );

        xml.send(this.data);

        // xml.onreadystatechange = () => {
        //    if (xml.readyState == 4 && xml.status == 200) {

        //    } else {
        //         console.log("usao u error block");
        //         reject() ;
        //    }
        // }
      }
    });
  };
}

class InputForm {
  constructor() {
    this.form = document.querySelector(".form");
    this.fullName = this.form.querySelector("#name");
    this.userText = this.form.querySelector("#textarea");
    this.email = this.form.querySelector("#email");
    this.btn = this.form.querySelector(".btn");

    this.form.addEventListener("submit", this.handleSubmit);
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("test");
    const fullName = this.fullName.value;
    const userText = this.userText.value;
    const email = this.email.value;

    const data = `fullName=${fullName}&userText=${userText}&email=${email}`;

    let xml = new XMLRequest(data);

    this.btnChange("disable") ;

    xml
      .sendRequest("post", "php/contact.php")
      .then(res => {
        this.resetInput();
        // f from Modal class!
        modal.showModal() ;
        this.btnChange("enable");
      })
      .catch(() => {
        this.btnChange("enable");
      });

  };

  resetInput = () => {
    this.fullName.value = "";
    this.userText.value = "";
    this.email.value = "";
  };

  btnChange = op => {
    if (op === "disable") {
      this.btn.disabled = true;
    } else {
      this.btn.disabled = false;
    }
  };
}

new InputForm();
