import styles from './index.module.css';
import { BenchmarkMarker } from './benchmark-marker';

export function Index() {
  return (
    <div className={styles.page}>
      <BenchmarkMarker />
      <h2>Index Page</h2>
    </div>
  );
}

export default Index;
