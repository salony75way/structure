import Arrow from "../../assets/img/Arrow.png";
import Logo from "../../assets/img/logo.PNG";

function Header() {
  return (
    <div className="header_container">
      <div className="header_wrapper">
        <p className="header_text">
          Get no-fee trading for life when you sign up today
        </p>
        <img
          src={Arrow}
          alt="arrow"
          width="16px"
          style={{ marginLeft: "10px" }}
        />
      </div>
      <div className="header_header2">
        <div className="header_header2_left">
          <img src={Logo} width="30px" height="27px" />

          <p>structure</p>
        </div>
        <div className="header_header2_center">
          <ol>
            <li>All Assets</li>
            <li>Stocks</li>
            <li>Cypto</li>
            <li>Trade</li>
          </ol>
        </div>
        <div className="header_header2_right">
          <p className="header_header2_right_text">Signup</p>
          <button className="header_header2_right_btn">Get the App</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
