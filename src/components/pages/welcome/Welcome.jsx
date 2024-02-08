import scss from "./Welcome.module.scss";

const Welcome = () => {
	return (
		<div className={scss.container}>
			<h1>Ассаламу алейкум🤝</h1>
			<div className={scss.conten}>
      <div className={scss.holder}>
        <div className={scss.candle}>
          <div className={scss.blinking_glow}></div>
          <div className={scss.thread}></div>
          <div className={scss.glow}></div>
          <div className={scss.flame}></div>
        </div>
    </div>
      
			</div>
		</div>
	);
};

export default Welcome;
