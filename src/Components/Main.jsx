import styles from './styles.module.css';
import Section1 from './Developers/section1';
import Section2 from './Emon/emon';
const Main = () => {
  return (


    <div>
      <h1  className={`text-3xl text-center text-design ${styles.textDesign}`} >Practice Git command </h1>
 <Section1></Section1>
 <Section2></Section2>
    </div>

  )
}

export default Main
