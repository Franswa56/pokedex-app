import './_ProgressBar.scss'

const ProgressBar = ({ title, value }) => {
  return (
    <>
    <div className='title'>{title}</div>
    <div className='bar-container'>
      <div className="bar">
        <div style={{ width: value/2.4 + "%" }} className="bar-score">
          <h4>{value}</h4>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProgressBar;
