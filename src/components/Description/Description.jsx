import css from './Description.module.css';
export const Description = ({ title, children }) => {
  return (
    <section className={css.section}>
        <div className={css.sectionWrap} >
            <h1>{title}</h1>
            {children}
        </div>  
    </section>
  );
};