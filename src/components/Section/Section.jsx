import css from './Section.module.css';
export const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
        <div className={css.sectionWrap} >
            <h2>{title}</h2>
            {children}
        </div>  
    </section>
  );
};