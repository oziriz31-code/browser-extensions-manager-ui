import ToggleSwitch from "./ToggleSwitch.tsx";
import type ExtensionType from "../types.ts";

type ExtensionCardProps = {
  extension: ExtensionType;
  onToggle: () => void;
  onRemove: () => void;
};

function ExtensionCard({extension, onToggle, onRemove}: ExtensionCardProps) {
  const handleToggle = (checked: boolean) => {
    console.log(`Extension ${extension.name} is now ${checked ? 'active' : 'inactive'}`);
    onToggle(); // Notify parent component of the toggle
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    if (confirm(`Are you sure you want to remove ${extension.name}?`)) {
      onRemove();
    }
  };

  return (
    <div className="card flex flex-col gap-12">
      <div className="flex flex-row gap-3">
        <div>
          <img
            width={75}
            src={extension.icon.light}
            alt={`${extension.name} extension icon`}
            className="max-w-full h-auto"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-xl name">
            {extension.name}
          </h1>
          <p className="description">
            {extension.description}
          </p>
        </div>
      </div>
      <footer className="flex justify-between items-center">
        <button
          role="button"
          className="btn-outline-default dark:hover:bg-primary hover:bg-gray-100 transition-colors"
          onClick={handleRemove}
        >
          Remove
        </button>
        <ToggleSwitch
          defaultChecked={extension.isActive}
          onChange={handleToggle}
          aria-label={`Toggle ${extension.name} extension`}
        />
      </footer>
    </div>
  );
}

export default ExtensionCard;
