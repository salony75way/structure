import CentralizeContentSection, {
  Left,
  Right,
} from "../CentralizeContentSection";

import Details from "../../Details";
import styles from "./index.module.css";

const LayoutSection = ({ data, inputLabel }) => {
  const { image, sendLink } = data;
  return (
    <CentralizeContentSection fullWidth={!!sendLink} reverse={image.position == 'left'}>
      <Left>
        <Details inputLabel={inputLabel} data={data} />
      </Left>
      <Right shouldHide={!!sendLink}>
        <img className={styles.image} src={image.src} />
      </Right>
    </CentralizeContentSection>
  );
};

export default LayoutSection;
