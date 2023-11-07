
import {  Image, Typography } from "antd";

function AppHeader() {

  return (
    <div className="AppHeader">
      <Image
        width={40}
        src="https://img.freepik.com/premium-photo/generic-luxury-logo-floral-with-letter-d-with-gold-composition_880100-2314.jpg"
      ></Image>
      <Typography.Title className="AppTxtr">Air Quality Checker</Typography.Title>
      <Image
        width={40}
        src="https://www.flaginstitute.org/wp/wp-content/uploads/2015/05/Norway.png"
      ></Image>
    
    </div>
  );
}
export default AppHeader;
