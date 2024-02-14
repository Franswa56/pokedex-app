import Tab from "../Tab/Tab";
import {useState} from 'react'
import './_Tabs.scss'
const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].title);

    console.log("Onglet actif :", activeTab);
  
    return (
      <div className="tabs">
        <div>
          {tabs.map(tab => (
            <Tab
              key={tab.title}
              title={tab.title}
              isActive={tab.title === activeTab}
              onClick={() => {
                setActiveTab(tab.title);
              }}
            />
          ))}
        </div>
        <div className="tab-content">
          {tabs.find(tab => tab.title === activeTab).content}
        </div>
      </div>
    );
  };

  export default Tabs