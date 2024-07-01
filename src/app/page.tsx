import styles from "./page.module.css";
import NumberPad from "@/components/molecules/NumberPad";

function Home() {
  return (
      <div className={styles.page}>
          홈 영역
          <NumberPad />
      </div>
  );
}

export default Home;