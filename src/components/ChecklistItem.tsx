import React from 'react';

interface ChecklistItemProps {
  item: {
    id: number | string;
    text: string;
    completed: boolean;
  };
  onToggleCompleted: (id: number | string) => void;
}
const ChecklistItem: React.FC<ChecklistItemProps> = ({
  item,
  onToggleCompleted,
}) => {
  const completedStyle = 'bg-green-200 hover:bg-green-300 scale-95';
  const notCompletedStyle = 'bg-gray-200 hover:bg-gray-300';

  return (
    <li
      className={`${item.completed ? completedStyle : notCompletedStyle} min-h-28 flex flex-row justify-around items-center text-xl gap-4 px-4 py-2 cursor-pointer rounded-md shadow-md my-2 font-medium`}
      onClick={() => onToggleCompleted(item.id)}
    >
      <div className="bg-slate-500 text-teal-50 w-8 h-8 p-1 rounded-full text-center shadow-md">
        {item.id}
      </div>
      <div>{item.text}</div>
      <div>{item.completed ? '✅' : '❌'}</div>
    </li>
  );
};

export default ChecklistItem;
