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
      { threshold: 0.5 }
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
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <h1 className={styles.heading}>Who we are?</h1>
        </div>
        <div className={styles.gridLine} />
        <div className={styles.gridItem}>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor commodo ipsum, ac facilisis velit interdum vel.
          </p>
        </div>
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor commodo ipsum, ac facilisis velit interdum vel. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor commodo ipsum, ac facilisis velit interdum vel. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor commodo ipsum, ac facilisis velit interdum vel.
          </p>
        </div>
        <div className={styles.gridLine} />
        <div className={styles.gridItem}>
          <h1 className={styles.heading}>What we do?</h1>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;




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
//       { threshold: 0.5 }
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

//   const isSmallScreen = typeof window !== 'undefined' && window.innerWidth <= 848;

//   return (
//     <div className={styles.container}>
//       {isSmallScreen ? (
//         <>
//           <div className={styles.heading} style={{ fontSize: '24px', fontWeight: 'bold' }}>Who we are</div>
//           <div className={styles.paragraph} style={{ fontSize: '16px' }}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor commodo ipsum, ac facilisis velit interdum vel.
//           </div>
//           <hr style={{ width: '100%', border: '1px solid #000', margin: '10px 0' }} />
//           <div className={styles.heading} style={{ fontSize: '24px', fontWeight: 'bold' }}>What we do?</div>
//           <div className={styles.paragraph} style={{ fontSize: '16px' }}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor commodo ipsum, ac facilisis velit interdum vel.
//           </div>
//         </>
//       ) : (
//         <>
//           <div className={styles.gridContainer}>
//             <div className={styles.gridItem}>
//               <h1 className={styles.heading}>Who we are?</h1>
//             </div>
//             <div className={styles.gridLine} />
//             <div className={styles.gridItem}>
//               <p className={styles.paragraph}>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor commodo ipsum, ac facilisis velit interdum vel.
//               </p>
//             </div>
//           </div>
//           <div className={styles.gridContainer}>
//             <div className={styles.gridItem}>
//               <p className={styles.paragraph}>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor commodo ipsum, ac facilisis velit interdum vel. 
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor commodo ipsum, ac facilisis velit interdum vel. 
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor commodo ipsum, ac facilisis velit interdum vel.
//               </p>
//             </div>
//             <div className={styles.gridLine} />
//             <div className={styles.gridItem}>
//               <h1 className={styles.heading}>What we do?</h1>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default WhoWeAre;

