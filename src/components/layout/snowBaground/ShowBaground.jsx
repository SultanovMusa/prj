import scss from './ShowBaground.module.scss';

const ShowBackground = () => {
  return (
    <div className={scss['snow-background']}>
      {[...Array(100)].map((_, index) => (
        <div
          key={index}
          className={scss.snowflake}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ShowBackground;

