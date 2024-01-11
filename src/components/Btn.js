import './Btn.css';

const Btn = ({ content, eventHandler }) => {
  const classNames = {
    Clear: 'double-size aqua-color',
    C: 'aqua-color',
    '/': 'aqua-color',
    '*': 'aqua-color',
    '-': 'aqua-color',
    '+': 'aqua-color',
    '=': 'double-size aqua-color',
  };

  return (
    <button onClick={eventHandler} className={`${classNames[content]} button`}>
      {content}
    </button>
  );
};
export default Btn;
