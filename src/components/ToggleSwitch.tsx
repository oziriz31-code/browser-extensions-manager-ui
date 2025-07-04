import {useState} from 'react';

interface ToggleSwitchProps {
  label?: string;
  defaultChecked?: boolean;
  onChange?: (value: boolean) => void;
}

function ToggleSwitch({label, defaultChecked = false, onChange}: ToggleSwitchProps) {
  const [checked, setChecked] = useState(defaultChecked);

  const handleToggle = () => {
    const newValue = !checked;
    setChecked(newValue);
    onChange?.(newValue); // emit to parent if onChange exists
  };

  return (
    <label className="toggle-switch">
      {label && <span className="toggle-switch-label">{label}</span>}
      <div className="toggle-switch-container">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleToggle}
          className="toggle-switch-input peer"
        />
        <div className="toggle-switch-track"></div>
        <div className="toggle-switch-thumb"></div>
      </div>
    </label>
    // <label className="flex items-center gap-2 cursor-pointer select-none">
    //   {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
    //   <div className="relative">
    //     <input
    //       type="checkbox"
    //       checked={checked}
    //       onChange={handleToggle}
    //       className="sr-only peer"
    //     />
    //     <div
    //       className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-[#DD4841] transition-colors duration-200"></div>
    //     <div
    //       className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 peer-checked:translate-x-full"></div>
    //   </div>
    // </label>
  );
}

export default ToggleSwitch;
