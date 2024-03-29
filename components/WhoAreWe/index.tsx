// "use client"
// import React, { useEffect } from 'react';
// import styles from './index.module.css';

// interface WhoWeAreProps {
//   // Any additional props you might want to add
// }

// const WhoWeAre: React.FC<WhoWeAreProps> = (props) => {
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add(styles.animate);
//           }
//         });
//       },
//       { threshold: 0.8 }
//     );

//     // Assuming your CSS classes handle animation appropriately without using refs
//     document.querySelectorAll(`.${styles.paragraph}`).forEach((element) => {
//       observer.observe(element);
//     });

//     return () => {
//       document.querySelectorAll(`.${styles.paragraph}`).forEach((element) => {
//         observer.unobserve(element);
//       });
//     };
//   }, []);

//   return (
//     <div className={styles.container}>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <div className={styles.gridContainer}>
//         <div className={styles.gridItem}>
//           <h1 className={styles.heading}>Who we are?</h1>
//         </div>
//         <div className={styles.gridLine} />
//         <div className={styles.gridItem}>
//           <p className={styles.paragraph}>
//             Our club provides a platform where students can share a mutual interest in business and characteristic enthusiasm to succeed. We provide guidance replete with sufficient exposure and real-life projects.
//           </p>
//           <br></br>
//         </div>
//       </div>
//       <div className={styles.gridContainer}>
//         <div className={styles.gridItem}>
//           <br></br>
//           <p className={styles.paragraph}>
//             SIGMA - The Business Club of NITT operates in four major fields, i.e., Projects, Data Analytics, Case Studies and Consulting, and Articles. We encourage our members to explore these domains as well as to participate and manage various events, including Guest Lectures, Workshops, and Competitions.
//           </p>
//         </div>
//         <div className={styles.gridLine} />
//         <div className={styles.gridItem}>
//           <h1 className={styles.heading}>What we do?</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhoWeAre;


"use client"
import React, { useEffect } from 'react';
import styles from './index.module.css';

interface WhoWeAreProps {
  // Any additional props you might want to add
}

const WhoWeAre: React.FC<WhoWeAreProps> = (props) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          }
        });
      },
      { threshold: 0.8 }
    );

    // Assuming your CSS classes handle animation appropriately without using refs
    document.querySelectorAll(`.${styles.paragraph}`).forEach((element) => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll(`.${styles.paragraph}`).forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <h1 className={styles.heading}>Who we are?</h1>
          </div>
          <div className={styles.gridLine} />
          <div className={styles.gridItem}>
            <p className={styles.paragraph}>
              Our club provides a platform where students can share a mutual interest in business and characteristic enthusiasm to succeed. We provide guidance replete with sufficient exposure and real-life projects.
            </p>
            <br></br>
          </div>
        </div>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <br></br>
            <p className={styles.paragraph}>
              SIGMA - The Business Club of NITT operates in four major fields, i.e., Projects, Data Analytics, Case Studies and Consulting, and Articles. We encourage our members to explore these domains as well as to participate and manage various events, including Guest Lectures, Workshops, and Competitions.
            </p>
          </div>
          <div className={styles.gridLine} />
          <div className={styles.gridItem}>
            <h1 className={styles.heading}>What we do?</h1>
          </div>
        </div>
      </div>
      
    </div>
    
  );
};

export default WhoWeAre;
