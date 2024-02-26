import AccordionFaq from "./Accordion/AccordionFaq";
import styles from "./FaqSection.module.css";

const FaqSection = ()=>{
    return (
        <div className={styles.wrapper}>
            <h1 style={{marginBottom:"20px"}}>FAQs</h1>
            <AccordionFaq/>
        </div>
    );
} 

export default FaqSection;