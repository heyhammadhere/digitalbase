import Icon from "../Icon";
import notification from "../../assets/icons/notification.svg";

const Header = () => {
  return (
    <div className="header">
      <section className="header-title">
        <h4>
          Welcome Back <span>Janifer</span>
        </h4>
      </section>
      <section className="header-actions">
        <input className="header-search" type="search" placeholder="Search" />
        <div className="header-notification">
          <Icon src={notification} size={30} />
        </div>
      </section>
    </div>
  );
};

export default Header;
