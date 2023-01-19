import { Hdiv } from "./HeaderStyles";
import logo from "../../../Public/assets/FRONTEIRA-Logo.png"

export const Header = () => {
  return (
    <Hdiv>
      <section>
        <nav>
            <ul className="actions1">
              <a><span><img src={logo} alt="FRONTEIRA-Logo.png" /></span></a>
              <li>MEMBERS</li>
              <li>ORGANIZATION</li>
              <li>DIVISIONS</li>
              <li>DISCORD</li>
              <li>SUPPORT</li>
              <li>ACCOUNT</li>
            </ul>
        </nav>
      </section>
          <div className="line-end"></div>
     
    </Hdiv>
  );
};
