import Tab from "../Tab/Tab";
import {useState} from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './_Tabs.scss'
const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].title);
    const [prevTab, setPrevTab] = useState('');

    const changeTab = (newTab) => {
      setPrevTab(activeTab);
      setActiveTab(newTab);
  };

  
  return (
    <div className="tabs">
      <div className="tabs__list">
        {tabs.map(tab => (
          <Tab
            key={tab.title}
            title={tab.title}
            isActive={tab.title === activeTab}
            onClick={() => changeTab(tab.title)}
          />
        ))}
      </div>
      <TransitionGroup className="tab-content-wrapper">
        <CSSTransition
          key={activeTab}
          timeout={300}
          classNames="slide"
        >
          <div className="tab-content">
            {tabs.find(tab => tab.title === activeTab).content}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Tabs;