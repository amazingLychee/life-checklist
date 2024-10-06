import './App.css';
import React, { useState, useEffect } from 'react';
import ChecklistItem from './components/ChecklistItem';
import AnimateComp from './components/AnimateComp';
import AnimateText from './components/AnimateText';
import { useTranslation } from 'react-i18next';
import Button from './components/Button';

interface ChecklistItemType {
  id: number | string;
  textKey: string;
  completed: boolean;
}

function App() {
  const { t, i18n } = useTranslation();

  // 切换语言
  const changeLanguage = (language: string | undefined) => {
    i18n.changeLanguage(language);
  };

  const [checklist, setChecklist] = useState<ChecklistItemType[]>(() => {
    const savedChecklist = localStorage.getItem('checklist');
    return savedChecklist ? JSON.parse(savedChecklist) : [];
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/data.json');
        const data: ChecklistItemType[] = await response.json();

        const savedChecklist = localStorage.getItem('checklist');

        // 如果 localStorage 中没有数据，才初始化数据
        if (!savedChecklist || savedChecklist === '[]') {
          setChecklist(data);
          console.log('-------');
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // 将清单状态保存到 localStorage
  useEffect(() => {
    localStorage.setItem('checklist', JSON.stringify(checklist));
  }, [checklist]);

  const handleToggleCheck = (id: number | string) => {
    setChecklist((prevChecklist) =>
      prevChecklist.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      }),
    );
  };

  const uncheckedItem = checklist.filter((item) => !item.completed);

  const handleCompleteAll = () => {
    setChecklist((prevChecklist) =>
      prevChecklist.map((item) => {
        return { ...item, completed: true };
      }),
    );
  };

  return (
    <div className="container container-md mx-auto">
      <AnimateText
        text={t('title')}
        type="h1"
        className="text-5xl text-center font-bold my-20"
      />

      <h1 className="text-5xl text-center font-bold my-20">{t('title')}</h1>
      <div className="flex justify-between">
        <div>
          <Button
            onClick={handleCompleteAll}
            text={t(`check_all`)}
            className={uncheckedItem.length === 0 ? 'danger' : 'success'}
          />
        </div>

        <div className="space-x-2">
          <Button text="English" onClick={() => changeLanguage('en')} />
          <Button text="中文" onClick={() => changeLanguage('zh')} />
        </div>
      </div>

      <ul className="container container-sm">
        {checklist && checklist.length > 0 ? (
          checklist.map((item, index) => (
            <ChecklistItem
              key={index}
              item={{ ...item, text: t(item.textKey) }}
              onToggleCompleted={handleToggleCheck}
            />
          ))
        ) : (
          <h2 className="text-center">{t('loading')}</h2>
        )}
      </ul>
    </div>
  );
}

export default App;
