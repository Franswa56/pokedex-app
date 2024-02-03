import './_Tab.scss'

const Tab = ({ title, isActive, onClick }) => {
    return (
        <button
          className={`tab-title${isActive ? '-active' : ''}`}
          onClick={onClick}
        >
          {title}
        </button>
      );
}

export default Tab;