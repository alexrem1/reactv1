//another way to write CSS

import styles from "./ModuleCSS.module.css";

const ModuleCSS = () => {
  return (
    <div className={styles.moduleContainer}>
      <h1 className={styles.dogs}>Module CSS</h1>
    </div>
  );
};

export default ModuleCSS;
