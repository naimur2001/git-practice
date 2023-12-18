import styles from './section1.module.css';

const section1 = () => {
  return (
    <>
    <div className={`${styles.header}`}>section1</div>
    <p className={`${styles.para}`}>I created a new Branch.
      Name: Developer.
    </p>
    </>
  )
}

export default section1;