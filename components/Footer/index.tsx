import styles from '../../styles/Footer.module.scss';
import {Facebook, Youtube, Instagram, Twitter } from '../../utils/icons';

export default function Footer() {
  return (
       <div className={styles.footer} >
       <section className={styles.link}>
       <div className={styles.logos}>
         <a href="#" className={styles.icon} target='_blank' rel='noreferrer'><Facebook /></a>
         <a href="#" className={styles.icon} target='_blank' rel='noreferrer'><Instagram /></a>
         <a href="#" className={styles.icon} target='_blank' rel='noreferrer'><Twitter /></a>
         <a href="#" className={styles.icon} target='_blank' rel='noreferrer'><Youtube /></a>
       </div>
       <div className={styles.sub_links}>
         <ul>
           <li><a href="#">Audio and Subtitles</a></li>
           <li><a href="#">Audio Description</a></li>
           <li><a href="#">Help Center</a></li>
           <li><a href="#">Gift Cards</a></li>
           <li><a href="#">Media Center</a></li>
           <li><a href="#">Investor Relations</a></li>
           <li><a href="#">Jobs</a></li>
           <li><a href="#">Terms of Use</a></li>
           <li><a href="#">Privacy</a></li>
           <li><a href="#">Legal Notices</a></li>
           <li><a href="#">Corporate Information</a></li>
           <li><a href="#">Contact Us</a></li>
         </ul>
       </div>
     </section>
   <footer>
     <p className={styles.footerText}> © 2022-2022 Netflix-Clone, Inc.</p>
   </footer>
   </div >
  );
}
