import React, { useState } from 'react';

interface TabPageProps {
    components: React.ReactNode[];
    names: string[];
}

const TabPage: React.FC<TabPageProps> = ({ components, names }) => {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (tabIndex: number) => {
        setActiveTab(tabIndex);
    };

    return (
        <div className="flex justify-center h-full">
            <div className="flex-1">
                <div className="flex">
                    {names.map((name, index) => (
                        <a
                            key={index}
                            className={`flex-1 py-2 text-center ${
                                activeTab === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                            }`}
                            onClick={() => handleTabClick(index)}
                        >
                            {name}
                        </a>
                    ))}
                </div>
                <div className="p-4">
                    {components[activeTab]}
                </div>
            </div>
        </div>
    );
};

export default TabPage;
