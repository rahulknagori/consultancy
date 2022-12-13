import styles from "./CircularLoader.module.css";

type CircularLoaderProps = {
  size?: number;
};

const CircularLoader = ({ size }: CircularLoaderProps) => {
  return (
    <div
      style={{
        width: size,
        height: size,
      }}
      className={styles.loader}
    ></div>
  );
};

export default CircularLoader;
